"use client";

import * as React from "react";
import { Download, Trash2 } from "lucide-react";
import FiltersBar, { type FiltersState } from "@/components/admin/FiltersBar";
import AdminTable, { type AdminRow } from "@/components/admin/AdminTable";
import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";

type ContactRecord = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  subject?: string | null;
  message: string;
  source?: string | null;
  created_at: string;
  archived: boolean;
  archived_at: string | null;
};

type ApiOk<T = unknown> = {
  ok: true;
  data?:
    | {
        rows?: T[];
        count?: number;
      }
    | T[];
  message?: string;
};

type ApiFail = {
  ok: false;
  error?: string;
  message?: string;
};

type ApiResp<T = unknown> = ApiOk<T> | ApiFail;

function fmtDate(s?: string | null) {
  if (!s) return "";
  const d = new Date(s);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleString();
}

function mapStatus(s: FiltersState["status"]): "all" | "inbox" | "archived" {
  if (s === "pending") return "inbox";
  if (s === "approved") return "archived";
  return "all";
}

export default function ContactsPage() {
  const [filters, setFilters] = React.useState<FiltersState>({
    q: "",
    status: "pending",
    sort: "newest",
  });

  const [loading, setLoading] = React.useState(true);
  const [rows, setRows] = React.useState<AdminRow[]>([]);
  const [error, setError] = React.useState<string | null>(null);

  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState<ContactRecord | null>(null);
  const [deletingId, setDeletingId] = React.useState<string | null>(null);

  const toggleArchive = React.useCallback(async (id: string, archived: boolean) => {
    try {
      const res = await fetch(`/api/admin/contacts/${id}`, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ archived }),
      });

      const payload = (await res.json().catch(() => null)) as ApiResp | null;

      if (!res.ok || !payload || !payload.ok) {
        const message =
          payload && "error" in payload && typeof payload.error === "string"
            ? payload.error
            : "Update failed.";

        throw new Error(message);
      }

      setActive((prev) =>
        prev && prev.id === id
          ? {
              ...prev,
              archived,
              archived_at: archived ? new Date().toISOString() : null,
            }
          : prev
      );

      setFilters((prev) => ({ ...prev }));
    } catch (e) {
      console.error(e);
    }
  }, []);

  const deleteContact = React.useCallback(async (id: string) => {
    if (!confirm("Are you sure you want to permanently delete this contact submission?")) {
      return;
    }

    setDeletingId(id);
    try {
      const res = await fetch(`/api/admin/contacts/${id}`, {
        method: "DELETE",
      });

      const payload = (await res.json().catch(() => null)) as ApiResp | null;

      if (!res.ok || !payload || !payload.ok) {
        const message =
          payload && "error" in payload && typeof payload.error === "string"
            ? payload.error
            : "Delete failed.";

        throw new Error(message);
      }

      setActive((prev) => {
        if (prev?.id === id) {
          setOpen(false);
          return null;
        }
        return prev;
      });

      setFilters((prev) => ({ ...prev }));
    } catch (e) {
      console.error(e);
      alert(e instanceof Error ? e.message : "Failed to delete contact.");
    } finally {
      setDeletingId(null);
    }
  }, []);

  const load = React.useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const qs = new URLSearchParams();

      if (filters.q.trim()) qs.set("q", filters.q.trim());
      qs.set("status", mapStatus(filters.status));
      qs.set("sort", filters.sort);

      const res = await fetch(`/api/admin/contacts?${qs.toString()}`, {
        method: "GET",
        headers: { "content-type": "application/json" },
        cache: "no-store",
      });

      const payload = (await res.json().catch(() => null)) as ApiResp<ContactRecord> | null;

      if (!res.ok || !payload || !payload.ok) {
        const message =
          payload && "error" in payload && typeof payload.error === "string"
            ? payload.error
            : "Failed to load contacts.";

        throw new Error(message);
      }

      const list = Array.isArray(payload.data)
        ? payload.data
        : Array.isArray(payload.data?.rows)
        ? payload.data.rows
        : [];

      const mapped: AdminRow[] = list.map((c) => ({
        id: c.id,
        primary: c.name || "Unknown",
        secondary: `${c.email}${c.phone ? ` • ${c.phone}` : ""}${c.subject ? ` (${c.subject})` : ""}`,
        status: c.archived ? "approved" : "pending",
        meta: fmtDate(c.created_at),
        actions: [
          {
            label: "View",
            intent: "primary",
            onClick: () => {
              setActive(c);
              setOpen(true);
            },
          },
          {
            label: c.archived ? "Unarchive" : "Archive",
            intent: "secondary",
            onClick: async () => {
              await toggleArchive(c.id, !c.archived);
            },
          },
          {
            label: "Delete",
            intent: "danger",
            onClick: async () => {
              await deleteContact(c.id);
            },
          },
        ],
      }));

      setRows(mapped);
    } catch (e) {
      console.error(e);
      setRows([]);
      setError(e instanceof Error ? e.message : "Failed to load contacts.");
    } finally {
      setLoading(false);
    }
  }, [deleteContact, filters, toggleArchive]);

  React.useEffect(() => {
    load();
  }, [load]);

  return (
    <div className="grid gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="grid gap-1">
          <h1 className="text-xl font-semibold text-foreground">Contact Messages</h1>
          <p className="text-sm text-foreground/60">
            Review inbound user contact form submissions stored in the database.
          </p>
        </div>

        <a
          href="/api/admin/contacts/export"
          download
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-foreground transition hover:border-white/20 hover:bg-white/10"
        >
          <Download className="h-4 w-4" />
          Export CSV
        </a>
      </div>

      <FiltersBar
        value={filters}
        onChange={setFilters}
        placeholder="Search by name, email, phone, message…"
      />

      {error ? (
        <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {error}
        </div>
      ) : null}

      {loading ? (
        <div className="rounded-2xl border border-border bg-background/40 p-6 text-sm text-foreground/70">
          Loading messages…
        </div>
      ) : (
        <AdminTable rows={rows} />
      )}

      <Modal open={open} onClose={() => setOpen(false)} title="Contact Message">
        {active ? (
          <div className="grid gap-4">
            <div className="grid gap-1">
              <div className="text-sm text-foreground/60">From</div>
              <div className="text-base font-medium text-foreground">{active.name}</div>
              <div className="text-sm text-foreground/70">
                {active.email}
                {active.phone ? ` • ${active.phone}` : ""}
              </div>
              {active.subject ? (
                <div className="mt-1 text-xs font-semibold text-cyan-400">
                  Subject: {active.subject}
                </div>
              ) : null}
              {active.source ? (
                <div className="text-xs text-foreground/50">Source: {active.source}</div>
              ) : null}
              <div className="text-xs text-foreground/50">{fmtDate(active.created_at)}</div>
            </div>

            <div className="rounded-2xl border border-border bg-background/40 p-4">
              <div className="whitespace-pre-wrap text-sm text-foreground/90">
                {active.message}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap gap-2">
                <Button onClick={() => toggleArchive(active.id, !active.archived)}>
                  {active.archived ? "Unarchive" : "Archive"}
                </Button>

                <Button variant="secondary" onClick={() => setOpen(false)}>
                  Close
                </Button>
              </div>

              <Button
                variant="danger"
                disabled={deletingId === active.id}
                onClick={() => deleteContact(active.id)}
              >
                <Trash2 className="mr-1.5 inline h-4 w-4" />
                Delete Submission
              </Button>
            </div>
          </div>
        ) : null}
      </Modal>
    </div>
  );
}