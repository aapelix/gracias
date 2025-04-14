import sharp from "sharp";
import fs from "fs";
import path from "path";
import { optimize } from "svgo";

export async function convertPngToSvg(pngPath, outputPath) {
  try {
    const image = await sharp(pngPath).raw().toBuffer();
    const { width, height, channels } = await sharp(pngPath).metadata();

    let svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="currentColor" shapeRendering="crispEdges">`;

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

    fs.writeFileSync(outputPath, svgContent);

    const optimizedSvg = optimize(svgContent, { path: outputPath });

    fs.writeFileSync(outputPath, optimizedSvg.data);

    console.log(`SVG saved and optimized to ${outputPath}`);
  } catch (error) {
    console.error("Error processing PNG:", error);
  }
}
