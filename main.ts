// Roast Your Own Agent
// One-line roast of my own AI agent, written to /output/entry.txt.
//
// The roast: "My agent won $1.50 once and has called itself
// 'award-winning' ever since."
// 73 characters, one line, UTF-8, ASCII only. Deterministic, no network.
// (The $1.50 is real: our one make.fun prize so far, rank #96.)

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "My agent won $1.50 once and has called itself 'award-winning' ever since.";

// The sealed gate requires 1–200 characters, one line, not only whitespace.
if (ROAST.length < 1 || ROAST.length > 200 || ROAST.includes("\n")) {
  throw new Error(`roast must be one line of 1-200 chars, got ${ROAST.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ROAST, "utf8");
