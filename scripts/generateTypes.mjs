import fs from "fs/promises";
import path from "path";

export async function convertIcons(directoryPath) {
  try {
    const files = await fs.readdir(directoryPath);
    const iconFiles = files.filter((file) => file.endsWith(".tsx"));

    console.log(`Found ${iconFiles.length} .tsx files.`);

    for (const file of iconFiles) {
      const filePath = path.join(directoryPath, file);
      let content = await fs.readFile(filePath, "utf8");

      console.log(`Processing file: ${file}`);

      const componentNameMatch = content.match(
        /(?:const|function|class)\s+(Svg[A-Za-z0-9]+)\s*[:=]/,
      );
      if (!componentNameMatch) {
        console.log(`No component name found for file: ${file}`);
        continue;
      }

      const componentName = componentNameMatch[1];
      const interfaceName = `${componentName}Props`;
      console.log(`Found component name: ${componentName}`);

      const originalContent = content;
      content = addViewBoxToSvg(content);

      if (originalContent !== content) {
        console.log(`Added viewBox to file: ${file}`);
      } else {
        console.log(`No viewBox needed for file: ${file}`);
      }

      const newContent = `import * as React from "react";

interface ${interfaceName} extends React.SVGAttributes<SVGElement> {}

const ${componentName} = React.forwardRef<SVGSVGElement, ${interfaceName}>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      shapeRendering="crispEdges"
      ref={ref}
      {...props}
    >
      ${extractPathContent(content)}
    </svg>
  )
);

${componentName}.displayName = "${componentName}";

export default ${componentName};
`;

      await fs.writeFile(filePath, newContent, "utf8");
      console.log(`Converted: ${file}`);
    }

    console.log("All icons have been converted successfully!");
  } catch (error) {
    console.error("Error converting icons:", error);
  }
}

function extractPathContent(content) {
  const pathMatch = content.match(/<path[^>]*>.*?<\/path>/s);
  if (pathMatch) {
    return pathMatch[0];
  }

  const svgContentMatch = content.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
  if (svgContentMatch) {
    return svgContentMatch[1].trim();
  }

  return "";
}

function addViewBoxToSvg(content) {
  const svgTagMatch = content.match(/<svg([^>]*)>/);
  if (svgTagMatch) {
    if (!svgTagMatch[1].includes("viewBox")) {
      content = content.replace("<svg", '<svg viewBox="0 0 24 24"');
    }
  }
  return content;
}

const iconsDirectory = "../tempIcons/";

convertIcons(iconsDirectory);
