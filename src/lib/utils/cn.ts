// Utility function for conditionally merging CSS class names into a clean space-separated string.

type ClassValue =
  | string
  | number
  | null
  | undefined
  | false
  | Record<string, boolean>
  | ClassValue[];

// Recursively parses strings, arrays, and conditional boolean maps into a single class string
export function cn(...values: ClassValue[]) {
  const out: string[] = [];

  const walk = (v: ClassValue) => {
    if (!v) return;

    if (typeof v === "string" || typeof v === "number") {
      out.push(String(v));
      return;
    }

    if (Array.isArray(v)) {
      v.forEach(walk);
      return;
    }

    if (typeof v === "object") {
      for (const [k, ok] of Object.entries(v)) {
        if (ok) out.push(k);
      }
    }
  };

  values.forEach(walk);
  return out.join(" ");
}