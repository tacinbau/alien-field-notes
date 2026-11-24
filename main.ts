import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Earth review: the dominant species follows its pets around with little bags, collecting droppings like treasure. 4/5 stars \u2014 I brought my own bag.";

// The gate allows 1 to 200 characters; refuse to write an over-long line.
if (entry.length < 1 || entry.length > 200) {
  throw new Error(`entry is ${entry.length} characters, must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
