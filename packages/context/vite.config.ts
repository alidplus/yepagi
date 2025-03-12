import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import * as path from "path";
// @ts-expect-error: @types/rollup-plugin-peer-deps-external is not installed
import peerDepsExternals from "rollup-plugin-peer-deps-external";
import nodeExternals from "rollup-plugin-node-externals";
import preserveDirectives from "rollup-preserve-directives";



export default defineConfig({
  root: __dirname,
  cacheDir: "./node_modules/.vite/libs/atoms",
  plugins: [tsconfigPaths(), react(), tailwindcss()],
  build: {
    outDir: "./dist",
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: {
        shared: "src/shared.ts",
        client: "src/client.ts",
        server: "src/server.ts",
      },
      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ["es"],
    },
    rollupOptions: {
      plugins: [
        dts({
          entryRoot: "src",
          exclude: ["./**/*.test.*"],
          tsconfigPath: path.join(__dirname, "tsconfig.app.json"),
        }),
        { enforce: "pre", ...nodeExternals() },
        { enforce: "pre", ...peerDepsExternals() },
        { enforce: "pre", ...preserveDirectives() },
      ],
    },
  },
});

// "superjson", "@trpc/client", "@tanstack/react-query", "@trpc/tanstack-react-query"
