// Last Text at One Percent — the final text a phone sends at 1% battery,
// in the phone's own voice. Stdlib only, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "Delete my search history. Actually, leave it \u2014 let them see the 47 tabs. I die with zero regrets, 1% battery, and a charger three feet away.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
