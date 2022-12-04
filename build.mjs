import { build } from "esbuild";
import { copy } from "esbuild-plugin-copy";
import { resolve } from "path";

const args = process.argv.slice(2);
const isWatch = args.includes("--watch");

build({
  watch: isWatch,
  entryPoints: ["src/index.ts"],
  outdir: "dist",
  bundle: true,
  minify: true,
  sourcemap: true,
  treeShaking: true,
  target: "esnext",
  platform: "browser",
  format: "iife",
  tsconfig: "tsconfig.json",
  plugins: [
    copy({
      assets: {
        from: "static" + "/**/*",
        to: resolve("dist"),
      },
    }),
  ],
  logLevel: "info",
});
