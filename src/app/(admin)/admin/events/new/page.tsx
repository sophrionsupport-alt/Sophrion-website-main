"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

type ApiOk<T = unknown> = { ok: true; data?: T; message?: string };
type ApiFail = { ok: false; error?: string; message?: string };
type ApiResp<T = unknown> = ApiOk<T> | ApiFail;

export default function NewEventPage() {
  const router = useRouter();

  const [title, setTitle] = React.useState("");
  const [slug, setSlug] = React.useState("");
  const [saving, setSaving] = React.useState(false);
  const [error, setError] = React.useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");

    try {
      const res = await fetch("/api/admin/events", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          title,
          slug,
        }),
      });

      const json = (await res.json()) as ApiResp<{ id: string }>;

      if (!json.ok) {
        throw new Error(json.error || "Failed to create event");
      }

      if (!json.data?.id) {
        throw new Error("Event created, but no ID was returned.");
      }

      router.push(`/admin/events/${json.data.id}`);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-6 grid gap-1">
        <h1 className="text-2xl font-semibold text-foreground">
          New Event
        </h1>
        <p className="text-sm text-foreground/60">
          Create an event draft first, then you can fill in the full details like schedule, venue, and rules.
        </p>
      </div>

      <form
        onSubmit={onSubmit}
        className="grid gap-5 rounded-2xl border border-border bg-card p-6"
      >
        <Input
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <Input
          label="Slug (optional)"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          placeholder="Will be auto-generated from title if left blank"
        />

        {error ? <div className="text-sm text-red-400">{error}</div> : null}

        <div className="flex justify-end gap-3">
          <Button
            type="button"
            variant="secondary"
            onClick={() => router.push("/admin/events")}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={saving}>
            {saving ? "Creating..." : "Create Draft"}
          </Button>
        </div>
      </form>
    </div>
  );
}
