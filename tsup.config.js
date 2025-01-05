import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/index.ts"],
    dts: true,
    outDir: "dist",
    clean: true,
    format: ["cjs", "esm"],
    splitting: true,
    minify: true,
    sourcemap: false,
    bundle: true,
    skipNodeModulesBundle: true,
});
