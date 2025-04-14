import { exec } from "child_process";
import { renameJsToTsx } from "./jsToTsx.mjs";
import { convertIcons } from "./generateTypes.mjs";
import { readdir } from "fs/promises";
import { convertPngToSvg } from "./pngToSvg.mjs";
import { promisify } from "util";

const execAsync = promisify(exec);
const path = "../tempIcons/";

async function main() {
  const files = await readdir(path);
  const pngs = files.filter((file) => file.endsWith(".png"));

  await Promise.all(
    pngs.map((png) =>
      convertPngToSvg(path + png, path + png.replace(/\.png$/, ".svg")),
    ),
  );

  await execAsync(`npx @svgr/cli ${path}/*.svg --out-dir ${path} --icon`);

  try {
    await renameJsToTsx(path);
    await convertIcons(path);
  } catch (err) {
    console.error(err);
  }
}

main();
