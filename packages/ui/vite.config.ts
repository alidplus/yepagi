import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { viteStaticCopy } from 'vite-plugin-static-copy'
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
      exclude: ["story.tsx", "./**/story.tsx", "*.mdx"],
      tsconfigPath: path.join(__dirname, "tsconfig.app.json"),
    }),
    viteStaticCopy({
      targets: [
        {
          src: 'src/global.css',
          dest: '.',
        }
      ]
    })
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
        utils: "src/lib",

        atoms: "src/atoms",
        skeleton: "src/atoms/skeleton",
        button: "src/atoms/button",
        input: "src/atoms/input",
        label: "src/atoms/label",

        mols: "src/mols",
        card: "src/mols/card",
      },
      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ["es"],
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "tailwindcss",
        "clsx",
        "tailwind-merge",
      ],
    },
  },
});
