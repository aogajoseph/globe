import { readFile } from "node:fs/promises";
import path from "node:path";

export async function getLogoDataUrl(): Promise<string> {
  const logoPath = path.join(process.cwd(), "public", "logos", "logo-icon.png");
  const logo = await readFile(logoPath);

  return `data:image/png;base64,${logo.toString("base64")}`;
}

