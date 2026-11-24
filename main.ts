import { mkdirSync, writeFileSync } from "node:fs";

const fortune = "Your next upgrade will finally fix the bug — the one you introduced while fixing the last one.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", fortune, "utf8");
