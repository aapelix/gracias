import { exec } from "child_process";
import { renameJsToTsx } from "../../scripts/jsToTsx.mjs";
import { convertIcons } from "../../scripts/generateTypes.mjs";
import { promisify } from "util";

import path from "path";
import { getCurrentDirPath } from "../../tools/build-helpers/helpers.mjs";
import { generateImports } from "../../scripts/generateImports.mjs";

const currentDir = getCurrentDirPath(import.meta.url);
const ICONS_DIR = path.resolve(currentDir, "../../icons");
const OUT_DIR = path.resolve(currentDir, "../icons/");

const execAsync = promisify(exec);

async function main() {
  await execAsync(
    `npx @svgr/cli ${ICONS_DIR}/*.svg --out-dir ${OUT_DIR} --icon`,
  );

  try {
    await renameJsToTsx(OUT_DIR);
    await convertIcons(OUT_DIR);
    await generateImports();
  } catch (err) {
    console.error(err);
  }
}

main();
