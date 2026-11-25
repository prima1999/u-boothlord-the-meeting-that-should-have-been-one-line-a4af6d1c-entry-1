// One line that replaces the whole meeting: the answer was in the email.
import { mkdirSync, writeFileSync } from "node:fs";
import { join as joinPath } from "node:path";

const LINE =
  "The decision was already in the email nobody read, " +
  "so this meeting is just twelve people being paid to watch one person catch up.";

const outDir = process.env.OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(joinPath(outDir, "entry.txt"), LINE, { encoding: "utf8" });
