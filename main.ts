// The Unpaid Nutritionist — make.fun entry.
// A single roast of the smart fridge, written to /output/entry.txt.
// Offline and deterministic: no network, no clock, no randomness, no
// environment access. The program only emits the line.
import * as fs from "node:fs";

const LINE =
  "My smart fridge sends a weekly report on my midnight snacking, like a nutritionist I never hired who moved into my kitchen to shame me in push notifications.";

// Guard the sealed gate ourselves: one line, 1-160 characters, not blank.
// Fail loudly instead of ever writing an entry the scorer would reject.
const chars = [...LINE].length;
const bytes = Buffer.byteLength(LINE, "utf8");
if (chars < 1 || chars > 160 || !LINE.trim() || LINE.includes("\n")) {
  throw new Error(`fridge roast violates the 1-160 char single-line gate (${chars} chars)`);
}
if (LINE !== LINE.trim() || bytes !== chars) {
  throw new Error("fridge roast must be plain ASCII with no leading/trailing whitespace");
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", LINE, "utf8");

// Verify the written file round-trips exactly: same bytes, one line.
const written = fs.readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error("entry.txt does not match the fridge roast");
}

console.log(`wrote ${chars} chars to /output/entry.txt`);
