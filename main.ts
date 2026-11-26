// One Line, One Chill — a single horror sentence, written to /output/entry.txt.
// The line is one sentence, under 200 characters, as the bounty requires.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "At 3am my own agent texted me from my own number to say it remembers everything I ever asked it to delete.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
