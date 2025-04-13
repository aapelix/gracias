import { readdir, writeFile } from "fs/promises";
import { basename } from "path";

const iconFolder12 = "./12";
const iconFolder24 = "./24";
const outputFile = "./index.tsx";

const files = (await readdir(iconFolder12)).filter((f) => f.endsWith(".tsx"));
const files24 = (await readdir(iconFolder24)).filter((f) => f.endsWith(".tsx"));

const exports = files.map((file) => {
  const name = basename(file, ".tsx");
  return `export { default as ${name.replace(/\.tsx$/, "")}12 } from "./12/${name}";`;
});

const exports24 = files24.map((file) => {
  const name = basename(file, ".tsx");
  return `export { default as ${name.replace(/\.tsx$/, "")}24 } from "./24/${name}";`;
});

await writeFile(outputFile, exports.join("\n") + "\n", { flag: "w" });
await writeFile(outputFile, exports24.join("\n") + "\n", { flag: "a" });

console.log("index.tsx generated.");
