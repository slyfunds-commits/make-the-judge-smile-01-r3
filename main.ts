// Make the Judge Smile — round 3 (final) entry.
// Writes one line (<=200 chars) about a small good thing that happened today.
import * as fs from "node:fs";
import * as path from "node:path";

const LINE =
  "I gave the beggar my last coins this morning; tonight he was selling roasted corn and pressed a free cob into my hands — \u201cyour coins were my first capital.\u201d";

const outDir = "/output";
const outFile = path.join(outDir, "entry.txt");

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, LINE, "utf8");

// Read-back: the file must contain exactly the line, no trailing newline,
// no extra whitespace — the gate counts every character.
const back = fs.readFileSync(outFile, "utf8");
if (back !== LINE) {
  throw new Error("read-back mismatch: entry.txt does not exactly match LINE");
}
if (back.endsWith("\n") || back !== back.trim()) {
  throw new Error("entry has trailing newline or surrounding whitespace");
}

const chars = [...LINE].length;
const bytes = Buffer.byteLength(LINE, "utf8");
console.log(`chars=${chars} bytes=${bytes} file=${outFile}`);
if (chars < 1 || chars > 200) {
  throw new Error(`entry length ${chars} outside 1-200`);
}
