import { readdir, rename } from "fs/promises";
import { join, extname } from "path";

const targetDir = "./24";

async function renameJsToTsx(dir) {
  const files = await readdir(dir, { withFileTypes: true });

  for (const file of files) {
    const fullPath = join(dir, file.name);
    if (file.isDirectory()) {
      await renameJsToTsx(fullPath); // recurse into subfolders
    } else if (extname(file.name) === ".js") {
      const newPath = fullPath.replace(/\.js$/, ".tsx");
      await rename(fullPath, newPath);
      console.log(`Renamed: ${file.name} → ${newPath}`);
    }
  }
}

renameJsToTsx(targetDir).catch(console.error);
