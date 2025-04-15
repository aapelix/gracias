import path from "path";
import fs from "fs/promises";
import {
  getCurrentDirPath,
  readPngDirectory,
} from "../tools/build-helpers/helpers.mjs";
import sharp from "sharp";
//import processSvg from "../render/processSvg.mjs";

const currentDir = getCurrentDirPath(import.meta.url);
const ICONS_DIR = path.resolve(currentDir, "../icons");
const PNGS_DIR = path.resolve(currentDir, "../pngs");

const pngFiles = await readPngDirectory(ICONS_DIR);
const iconNames = pngFiles.map((icon) => icon.split(".")[0]);

iconNames.forEach(async (iconName) => {
  await convertPngToSvg(path.join(ICONS_DIR, iconName), iconName);
});

async function convertPngToSvg(pathT, iconName) {
  try {
    const pngPath = pathT + ".png";
    const outputPath = pathT + ".svg";

    const image = await sharp(pngPath).raw().toBuffer();
    const { width, height, channels } = await sharp(pngPath).metadata();

    let svgContent = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="${width}"
      height="${height}"
      viewBox="0 0 ${width} ${height}"
      fill="currentColor"
      stroke="none"
      strokeWidth="2"
      shapeRendering="crispEdges"
      stroke-linecap="butt"
      stroke-linejoin="miter"
    >`;

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const idx = (y * width + x) * channels;
        const a = channels === 4 ? image[idx + 3] : 255;

        if (a > 0) {
          svgContent += `<rect x="${x}" y="${y}" width="1" height="1" />`;
        }
      }
    }

    svgContent += "</svg>";

    //const svg = await processSvg(svgContent, outputPath);

    fs.writeFile(outputPath, svgContent);
    fs.copyFile(pngPath, path.join(PNGS_DIR, iconName + ".png"));
    fs.rm(pngPath);

    console.log(`SVG saved and optimized to ${outputPath}`);
  } catch (error) {
    console.error("Error processing PNG:", error);
  }
}
