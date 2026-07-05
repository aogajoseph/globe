/**
 * Static analysis helper: prints mobile header stacking facts from header.tsx
 * Run: node scripts/hit-test.mjs
 */
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const dir = dirname(fileURLToPath(import.meta.url));
const header = readFileSync(join(dir, "../components/layout/header.tsx"), "utf8");

const findings = [];

const mobileDrawer = header.match(
  /id="mobile-navigation"[\s\S]*?className=\{cn\([\s\S]*?\)\}/,
)?.[0];
const hamburger = header.match(
  /onClick=\{\(\) => setMobileOpen[\s\S]*?className="([^"]+)"/,
)?.[1];
const headerEl = header.match(/<header[\s\S]*?className="([^"]+)"/)?.[1];
const desktopPanel = header.match(
  /fixed z-\[60\][^"]*/,
)?.[0];

findings.push({ element: "header", classes: headerEl });
findings.push({ element: "hamburger button", classes: hamburger });
findings.push({ element: "mobile-navigation drawer", snippet: mobileDrawer?.slice(0, 400) });
findings.push({ element: "desktop submenu panel", classes: desktopPanel });

console.log(JSON.stringify(findings, null, 2));
