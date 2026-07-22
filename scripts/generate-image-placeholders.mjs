import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = join(process.cwd(), "public", "images");

function svg(accent: "line" | "arc" | "frame", accentY = 720) {
  const accentEl =
    accent === "arc"
      ? '<path d="M 0 900 Q 960 620 1920 880" stroke="#ffffff" stroke-opacity="0.05" stroke-width="1.5" fill="none"/>'
      : accent === "frame"
        ? '<rect x="480" y="240" width="960" height="540" rx="4" stroke="#ffffff" stroke-opacity="0.04" stroke-width="1" fill="none"/>'
        : `<line x1="0" y1="${accentY}" x2="1920" y2="${accentY - 40}" stroke="#ffffff" stroke-opacity="0.06" stroke-width="1"/>`;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" fill="none" role="img" aria-hidden="true">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse">
      <path d="M 64 0 L 0 0 0 64" fill="none" stroke="#ffffff" stroke-opacity="0.025" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1920" height="1080" fill="url(#bg)"/>
  <rect width="1920" height="1080" fill="url(#grid)"/>
  ${accentEl}
</svg>`;
}

const files: Array<[string, "line" | "arc" | "frame", number?]> = [
  ["company/reception.png", "line"],
  ["company/team-collaboration.png", "arc", 680],
  ["company/founding-journey.png", "line", 700],
  ["company/leadership-discussion.png", "arc", 660],
  ["company/profile.png", "line"],
  ["divisions/divisions-collaboration.png", "arc"],
  ["divisions/engineering-workspace.png", "line", 690],
  ["divisions/creative-studio.png", "arc", 670],
  ["products/product-development.png", "line", 710],
  ["products/akiba-app-mockup.png", "frame"],
  ["projects/storytelling-creative.png", "arc"],
  ["projects/addam.png", "line", 650],
  ["research/research-collaboration.png", "arc", 700],
  ["careers/workplace-culture.png", "line", 680],
  ["contact/remote-collaboration.png", "arc", 720],
];

for (const [relativePath, accent, accentY] of files) {
  const dir = join(root, relativePath.split("/").slice(0, -1).join("/"));
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(root, relativePath), svg(accent, accentY ?? 720), "utf8");
}

console.log(`Created ${files.length} placeholder images.`);
