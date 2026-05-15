import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const BROCHURE_FILENAME = "Sophrion-brochure.png";
const DEFAULT_BROCHURE_PATH = path.join(
  process.cwd(),
  "public",
  "images",
  "institutions",
  BROCHURE_FILENAME
);

function resolveBrochurePath() {
  const custom = process.env.INSTITUTIONS_BROCHURE_PATH?.trim();
  if (custom) {
    return path.isAbsolute(custom) ? custom : path.join(process.cwd(), custom);
  }
  return DEFAULT_BROCHURE_PATH;
}

function contentTypeFor(filePath: string) {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === ".png") return "image/png";
  if (ext === ".jpg" || ext === ".jpeg") return "image/jpeg";
  if (ext === ".webp") return "image/webp";
  if (ext === ".svg") return "image/svg+xml";
  return "application/octet-stream";
}

export async function GET() {
  try {
    const filePath = resolveBrochurePath();
    const buffer = await readFile(filePath);
    const filename = path.basename(filePath);

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": contentTypeFor(filePath),
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("[institutions/brochure] failed to read brochure file:", error);
    return NextResponse.json(
      { ok: false, error: "Brochure file is not available." },
      { status: 404 }
    );
  }
}
