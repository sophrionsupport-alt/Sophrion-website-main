"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";

import FiltersBar, { type FiltersState } from "@/components/admin/FiltersBar";
import AdminTable, { type AdminRow } from "@/components/admin/AdminTable";
import Modal from "@/components/ui/Modal";
import { X, Eye } from "lucide-react";

type RegistrationKind = "team" | "individual";

type Registration = {
id: string;
event_id: string;

event_title?: string | null;
events?: { title?: string | null } | null;

full_name: string;
email: string | null;
phone: string | null;
college: string | null;

year?: string | null;
roll_number?: string | null;

status: "pending" | "approved" | "rejected";
is_volunteer?: boolean;

type: RegistrationKind;
team_size?: number | null;

leader_name?: string | null;
leader_email?: string | null;
leader_phone?: string | null;

created_at: string;
};

export default function RegistrationsPage() {
const searchParams = useSearchParams();
const eventFilter = searchParams.get("event_id");

const [filters, setFilters] = React.useState<FiltersState>({
q: "",
status: "all",
sort: "newest",
});
const [roleTab, setRoleTab] = React.useState<"all" | "students" | "volunteers">("all");

const [rows, setRows] = React.useState<AdminRow[]>([]);
const [raw, setRaw] = React.useState<Registration[]>([]);
const [selectedIds, setSelectedIds] = React.useState<string[]>([]);
const [loading, setLoading] = React.useState(true);
const [exporting, setExporting] = React.useState(false);

const [deleteId, setDeleteId] = React.useState<string | null>(null);
const [viewId, setViewId] = React.useState<string | null>(null);

const active = raw.find((r) => r.id === deleteId) ?? null;
const viewActive = raw.find((r) => r.id === viewId) ?? null;

function getRegistrationById(id: string) {
return raw.find((r) => r.id === id) ?? null;
}

const loadRegistrations = React.useCallback(async () => {
try {
setLoading(true);

  const params = new URLSearchParams();

  if (filters.q.trim()) params.set("q", filters.q.trim());
  if (filters.status !== "all") params.set("status", filters.status);
  if (filters.sort) params.set("sort", filters.sort);
  if (eventFilter) params.set("event_id", eventFilter);
  if (roleTab !== "all") params.set("role", roleTab);

  const res = await fetch(`/api/admin/registrations?${params.toString()}`, {
    cache: "no-store",
  });

  const json = await res.json();

  if (!res.ok || !json?.ok) {
    console.error(json?.error);
    setRaw([]);
    setRows([]);
    return;
  }

  const list: Registration[] = json.data?.rows ?? [];

  setRaw(list);

  const mapped: AdminRow[] = list.map((r) => {
    const type = r.type ?? "individual";

    return {
      id: r.id,
      primary:
        type === "team" ? `👥 ${r.full_name}` : `👤 ${r.full_name}`,
      secondary:
        type === "team"
          ? `${r.event_title ?? r.events?.title ?? ""} • ${
              r.team_size ?? 0
            } members`
          : r.email ?? "",
      status: r.status,
      meta:
        type === "team"
          ? [
              r.leader_name ? `Leader: ${r.leader_name}` : null,
              r.leader_email ?? null,
              r.college ?? null,
              r.event_title ?? r.events?.title ?? null,
            ]
              .filter(Boolean)
              .join(" • ")
          : [r.college, r.phone, r.event_title ?? r.events?.title ?? null]
              .filter(Boolean)
              .join(" • "),
    };
  });

  setRows(mapped);
} catch (err) {
  console.error("Failed loading registrations", err);
  setRaw([]);
  setRows([]);
} finally {
  setLoading(false);
}


}, [filters, eventFilter, roleTab]);

React.useEffect(() => {
void loadRegistrations();
}, [loadRegistrations]);

async function updateStatus(
id: string,
status: "approved" | "rejected" | "pending"
) {
const registration = getRegistrationById(id);


if (!registration) {
  alert("Registration not found");
  return;
}

const res = await fetch(
  `/api/admin/registrations/${id}?kind=${registration.type}`,
  {
    method: "PATCH",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ status }),
  }
);

const json = await res.json();

if (!res.ok || !json?.ok) {
  alert(json?.error || "Failed to update");
  return;
}

await loadRegistrations();

}

async function deleteRegistration(id: string) {
const registration = getRegistrationById(id);


if (!registration) {
  alert("Registration not found");
  return;
}

const res = await fetch(
  `/api/admin/registrations/${id}?kind=${registration.type}`,
  {
    method: "DELETE",
  }
);

const json = await res.json();

if (!res.ok || !json?.ok) {
  alert(json?.error || "Delete failed");
  return;
}

setDeleteId(null);
setSelectedIds((prev) => prev.filter((x) => x !== id));
setRows((prev) => prev.filter((r) => r.id !== id));
setRaw((prev) => prev.filter((r) => r.id !== id));


}

async function exportRegistrations() {
try {
setExporting(true);


  const params = new URLSearchParams();

  if (filters.q.trim()) params.set("q", filters.q.trim());
  if (filters.status !== "all") params.set("status", filters.status);
  if (filters.sort) params.set("sort", filters.sort);
  if (eventFilter) params.set("event_id", eventFilter);
  if (roleTab !== "all") params.set("role", roleTab);

  const res = await fetch(
    `/api/admin/registrations/export?${params.toString()}`
  );

  const blob = await res.blob();

  const url = window.URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "registrations-export.csv";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  window.URL.revokeObjectURL(url);
} catch (error) {
  console.error(error);
  alert("Failed to export registrations");
} finally {
  setExporting(false);
}


}

return ( <div className="space-y-6"> <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between"> <div> <h1 className="text-2xl font-semibold">Event Registrations</h1> <p className="text-sm text-foreground/60">
Review and manage individual and team registrations. </p> </div>


    <button
      type="button"
      onClick={exportRegistrations}
      disabled={loading || exporting}
      className="rounded-xl border border-border px-4 py-2 text-xs hover:bg-background/60"
    >
      {exporting ? "Exporting..." : "Export CSV"}
    </button>
  </div>

  <div className="flex gap-2 border-b border-border pb-1 mb-4">
    {(["all", "students", "volunteers"] as const).map((tab) => (
      <button
        key={tab}
        onClick={() => setRoleTab(tab)}
        className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
          roleTab === tab
            ? "bg-[var(--bg-surface)] text-[var(--accent-primary)] border-b-2 border-[var(--accent-primary)]"
            : "text-[var(--text-muted)] hover:text-white hover:bg-white/5"
        }`}
      >
        {tab.charAt(0).toUpperCase() + tab.slice(1)}
      </button>
    ))}
  </div>

  <FiltersBar value={filters} onChange={setFilters} />

  <div className="rounded-xl border border-border bg-card overflow-hidden">
    {loading ? (
      <div className="p-6 text-sm text-foreground/60">
        Loading registrations...
      </div>
    ) : (
      <AdminTable
        rows={rows}
        selectedIds={selectedIds}
        onSelectedIdsChange={setSelectedIds}
        columnsLabel={{
          primary: "Registrant",
          status: "Status",
          meta: "Details",
          actions: "Actions",
        }}
        renderActions={(row) => (
          <>
            <button
              className="rounded-lg border border-border bg-background/40 px-2 py-1 text-xs hover:bg-background/60 inline-flex items-center gap-1 text-white/80"
              onClick={() => setViewId(row.id)}
            >
              <Eye className="w-3 h-3" /> View
            </button>
            
            {row.status === "pending" && (
              <>
                <button
                  className="rounded-lg border border-green-500/40 bg-green-500/10 px-3 py-1 text-xs text-green-300"
                  onClick={() => updateStatus(row.id, "approved")}
                >
                  Approve
                </button>

                <button
                  className="rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-1 text-xs text-red-300"
                  onClick={() => updateStatus(row.id, "rejected")}
                >
                  Reject
                </button>
              </>
            )}

            {row.status === "approved" && (
              <button
                className="rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-1 text-xs text-red-300"
                onClick={() => updateStatus(row.id, "rejected")}
              >
                Reject
              </button>
            )}

            {row.status === "rejected" && (
              <button
                className="rounded-lg border border-green-500/40 bg-green-500/10 px-3 py-1 text-xs text-green-300"
                onClick={() => updateStatus(row.id, "approved")}
              >
                Approve
              </button>
            )}

            <button
              className="rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-1 text-xs text-red-300"
              onClick={() => setDeleteId(row.id)}
            >
              Delete
            </button>
          </>
        )}
      />
    )}
  </div>

  <Modal
    open={!!deleteId}
    onClose={() => setDeleteId(null)}
    title="Delete registration"
  >
    {active && (
      <div className="space-y-4">
        <p className="text-sm">
          Delete registration for <b>{active.full_name}</b>?
        </p>

        <div className="flex gap-2">
          <button
            className="rounded-lg bg-red-600 px-4 py-2 text-xs text-white"
            onClick={() => deleteRegistration(active.id)}
          >
            Delete
          </button>

          <button
            className="rounded-lg border px-4 py-2 text-xs"
            onClick={() => setDeleteId(null)}
          >
            Cancel
          </button>
        </div>
      </div>
    )}
  </Modal>

  {/* Slide-out Drawer for Details */}
  {viewActive && (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm transition-opacity">
      <div 
        className="w-full max-w-md bg-[var(--bg-primary)] h-full shadow-2xl border-l border-[var(--border-subtle)] overflow-y-auto animate-in slide-in-from-right duration-300"
      >
        <div className="sticky top-0 bg-[var(--bg-primary)]/90 backdrop-blur p-6 border-b border-[var(--border-subtle)] flex items-center justify-between z-10">
          <h2 className="text-xl font-bold text-white">Registration Details</h2>
          <button 
            onClick={() => setViewId(null)}
            className="p-2 hover:bg-white/10 rounded-full transition-colors text-[var(--text-muted)] hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="space-y-4">
             <div className="inline-flex px-3 py-1 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] text-xs font-bold uppercase tracking-wider">
                {viewActive.type === "team" ? "Team Registration" : "Individual"}
             </div>
             {viewActive.is_volunteer && (
                <div className="inline-flex ml-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-wider">
                   Volunteer
                </div>
             )}
          </div>

          <div className="grid gap-4">
            <div>
              <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">Name / Team</div>
              <div className="text-lg font-semibold text-white">{viewActive.full_name}</div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               <div>
                 <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">Status</div>
                 <div className={`font-medium capitalize ${
                    viewActive.status === 'approved' ? 'text-green-400' :
                    viewActive.status === 'rejected' ? 'text-red-400' : 'text-yellow-400'
                 }`}>
                    {viewActive.status}
                 </div>
               </div>
               <div>
                 <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">Event</div>
                 <div className="font-medium text-white line-clamp-1">{viewActive.event_title || viewActive.events?.title || 'N/A'}</div>
               </div>
            </div>

            <div className="h-px w-full bg-[var(--border-subtle)] my-2" />

            <div>
              <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">Email</div>
              <div className="text-sm text-white">{viewActive.email || viewActive.leader_email || 'N/A'}</div>
            </div>
            
            <div>
              <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">Phone</div>
              <div className="text-sm text-white">{viewActive.phone || viewActive.leader_phone || 'N/A'}</div>
            </div>

            <div>
              <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">College</div>
              <div className="text-sm text-white">{viewActive.college || 'N/A'}</div>
            </div>

            {viewActive.type === 'individual' && (
               <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">Year</div>
                    <div className="text-sm text-white">{viewActive.year || 'N/A'}</div>
                  </div>
                  <div>
                    <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">Roll Number</div>
                    <div className="text-sm text-white">{viewActive.roll_number || 'N/A'}</div>
                  </div>
               </div>
            )}

            {viewActive.type === 'team' && (
               <div>
                 <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">Team Details</div>
                 <div className="text-sm text-white">Leader: {viewActive.leader_name}</div>
                 <div className="text-sm text-white">Size: {viewActive.team_size} members</div>
               </div>
            )}
            
            <div>
              <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">Registered At</div>
              <div className="text-sm text-white">{new Date(viewActive.created_at).toLocaleString()}</div>
            </div>

          </div>
          
          <div className="pt-8 flex flex-col gap-3">
             {viewActive.status === "pending" && (
               <div className="flex gap-3">
                  <button
                    className="flex-1 rounded-xl bg-green-500/10 hover:bg-green-500/20 text-green-400 font-semibold py-3 transition-colors border border-green-500/20"
                    onClick={() => updateStatus(viewActive.id, "approved")}
                  >
                    Approve
                  </button>
                  <button
                    className="flex-1 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 font-semibold py-3 transition-colors border border-red-500/20"
                    onClick={() => updateStatus(viewActive.id, "rejected")}
                  >
                    Reject
                  </button>
               </div>
             )}
             
             {viewActive.status === "approved" && (
                <button
                  className="w-full rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 font-semibold py-3 transition-colors border border-red-500/20"
                  onClick={() => updateStatus(viewActive.id, "rejected")}
                >
                  Revoke & Reject
                </button>
             )}
             
             {viewActive.status === "rejected" && (
                <button
                  className="w-full rounded-xl bg-green-500/10 hover:bg-green-500/20 text-green-400 font-semibold py-3 transition-colors border border-green-500/20"
                  onClick={() => updateStatus(viewActive.id, "approved")}
                >
                  Approve Registration
                </button>
             )}
          </div>
        </div>
      </div>
      <div className="flex-1" onClick={() => setViewId(null)}></div>
    </div>
  )}
</div>


);
}
