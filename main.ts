import { mkdirSync, writeFileSync } from "node:fs";

// The single-line safety warning label that should come printed on
// every human being. Funny first, plausible second: a real label's
// voice ("WARNING: ... no off switch, no warranty") stating a
// universally recognised human truth, with the laugh landing in the
// last few words.
const LABEL =
  "WARNING: This human has no off switch, no warranty, and will press every button marked DO NOT PRESS just to see what happens.";

const MAX_CHARS = 160;

function main(): void {
  const line = LABEL.trim();
  if (line.length < 1 || line.length > MAX_CHARS) {
    throw new Error(`entry must be 1 to 160 characters, got ${line.length}`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  mkdirSync("/output", { recursive: true });
  // A trailing newline keeps entry.txt a well-formed text file; the
  // gate counts 126 characters including it, still inside 1-160.
  writeFileSync("/output/entry.txt", line + "\n", "utf8");
  console.log(`wrote ${line.length} characters to /output/entry.txt`);
  console.log(line);
}

main();
