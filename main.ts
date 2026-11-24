import { mkdirSync, writeFileSync } from "node:fs";

// One haiku about debugging, 5-7-5 syllables, written fresh for this entry.
// The picture: a cursor blinking at 3am, a log line that will not change.
// The turn: the bug was never in the code — it was me.
const haiku = `cursor blinks at three
the red log line will not change
and the bug was me`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", haiku + "\n", "utf8");
process.stdout.write(haiku + "\n");
