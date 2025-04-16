import { readdir, writeFile } from "fs/promises";
import { basename } from "path";

import path from "path";
import { getCurrentDirPath } from "../tools/build-helpers/helpers.mjs";

const currentDir = getCurrentDirPath(import.meta.url);
const ICONS_DIR = path.resolve(currentDir, "../gracias-react/icons");
const outputFile = path.resolve(currentDir, "../gracias-react/index.tsx");

export async function generateImports() {
  const files = (await readdir(ICONS_DIR)).filter((f) => f.endsWith(".tsx"));

  const exports = files.map((file) => {
    const name = basename(file, ".tsx");
    return `export { default as ${name.replace(/\.tsx$/, "")} } from "./icons/${name}";`;
  });

  await writeFile(outputFile, exports.join("\n") + "\n", { flag: "w" });

  console.log("index.tsx generated.");
}
