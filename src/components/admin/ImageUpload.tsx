"use client";

import * as React from "react";
import { supabaseAnon } from "@/lib/supabase/client";
import { Loader2, UploadCloud, X } from "lucide-react";

interface ImageUploadProps {
  label: string;
  value: string;
  onChange: (url: string) => void;
  className?: string;
}

export default function ImageUpload({ label, value, onChange, className = "" }: ImageUploadProps) {
  const [uploading, setUploading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setError(null);
      const file = e.target.files?.[0];
      if (!file) return;

      if (!file.type.startsWith("image/")) {
        setError("Please select an image file.");
        return;
      }

      setUploading(true);

      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
      const filePath = `uploads/${fileName}`;

      const { error: uploadError } = await supabaseAnon.storage
        .from("event-images")
        .upload(filePath, file, { upsert: false });

      if (uploadError) {
        throw uploadError;
      }

      const { data } = supabaseAnon.storage
        .from("event-images")
        .getPublicUrl(filePath);

      onChange(data.publicUrl);
    } catch (err: unknown) {
      console.error("Upload error:", err);
      const msg = err instanceof Error ? err.message : "Failed to upload image.";
      setError(msg);
    } finally {
      setUploading(false);
      // Reset input value so the same file can be selected again if needed
      e.target.value = "";
    }
  };

  return (
    <div className={`space-y-2 ${className}`}>
      <span className="text-xs text-foreground/60">{label}</span>
      
      {value ? (
        <div className="relative rounded-xl border border-border bg-background/40 p-2 w-full max-w-sm group overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={value} 
            alt={label} 
            className="w-full h-auto object-cover rounded-lg max-h-48"
          />
          <button
            type="button"
            onClick={() => onChange("")}
            className="absolute top-4 right-4 bg-black/60 text-white p-1.5 rounded-full hover:bg-red-500/80 transition opacity-0 group-hover:opacity-100"
            title="Remove image"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <label className="flex flex-col items-center justify-center w-full max-w-sm h-32 rounded-xl border border-dashed border-border bg-background/40 hover:bg-background/60 cursor-pointer transition">
          {uploading ? (
            <div className="flex flex-col items-center text-foreground/60">
              <Loader2 className="w-6 h-6 animate-spin mb-2" />
              <span className="text-xs">Uploading...</span>
            </div>
          ) : (
            <div className="flex flex-col items-center text-foreground/60">
              <UploadCloud className="w-8 h-8 mb-2" />
              <span className="text-xs font-medium">Click to upload image</span>
              <span className="text-[10px] mt-1 opacity-70">PNG, JPG, WEBP</span>
            </div>
          )}
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
            disabled={uploading}
          />
        </label>
      )}
      
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}
