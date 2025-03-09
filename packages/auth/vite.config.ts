import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import preserveDirectives from 'rollup-preserve-directives'
import tailwindcss from "@tailwindcss/vite";
import dts from "vite-plugin-dts";
import * as path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    preserveDirectives(),
    dts({
      entryRoot: "src",
      exclude: ["src/main.ts", "./**/story.tsx", "*.mdx"],
      tsconfigPath: path.join(__dirname, "tsconfig.app.json"),
    })
  ],
  publicDir: '../../public',
  build: {
    outDir: "./dist",
    emptyOutDir: true,
    reportCompressedSize: true,
    sourcemap: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    lib: {
      entry: 'src/index.ts',
      fileName: 'index',
      formats: ["es"],
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: ["react", "react-dom", "react/jsx-runtime", "@repo/ui", "@repo/utils"],
    },
  },
})
