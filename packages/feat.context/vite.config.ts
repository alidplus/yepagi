import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";
import * as path from "path";
// @ts-expect-error: @types/rollup-plugin-peer-deps-external is not installed
import peerDepsExternals from "rollup-plugin-peer-deps-external";
import nodeExternals from "rollup-plugin-node-externals";
import preserveDirectives from "rollup-preserve-directives";
import { analyzer } from 'vite-bundle-analyzer'

const popAnalyzer = process.argv.indexOf('analyzer') > -1

export default defineConfig({
  root: __dirname,
  cacheDir: "./node_modules/.vite/libs/atoms",
  plugins: [tsconfigPaths(), react()],
  build: {
    outDir: "./dist",
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    lib: {
      entry: {
        client: "src/lib/index.client.tsx",
        server: "src/lib/index.server.tsx"
      },
      formats: ["es"],
    },
    sourcemap: true,
    rollupOptions: {
      plugins: [
        dts({
          entryRoot: "src",
          exclude: ["./**/*.test.*"],
          tsconfigPath: path.join(__dirname, "tsconfig.json"),
        }),
        { enforce: "pre", ...nodeExternals() },
        { enforce: "pre", ...peerDepsExternals() },
        { enforce: "pre", ...preserveDirectives() },
        popAnalyzer ? analyzer() : {}
      ],
    },
  },
});
