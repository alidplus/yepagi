import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import * as path from "path";

export default defineConfig({
  root: __dirname,
  cacheDir: "./node_modules/.vite/libs/atoms",
  plugins: [
    tsconfigPaths(),
    react(),
    tailwindcss(),
    dts({
      entryRoot: "src",
      exclude: ["./**/*.test.*"],
      tsconfigPath: path.join(__dirname, "tsconfig.app.json"),
    }),
  ],
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
        AppContext: "src/AppContext",
      },
      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ["es"],
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: ["react", "react-dom", "react/jsx-runtime"],
    },
  },
});
