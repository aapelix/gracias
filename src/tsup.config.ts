import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["index.tsx"],
  outDir: "dist",
  format: ["esm"],
  loader: {
    ".tsx": "tsx",
  },
  dts: true,
  clean: true,
});
