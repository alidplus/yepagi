// tsup.config.ts
import { defineConfig } from "tsup";

// package.json
var package_default = {
  name: "@repo/utils",
  version: "0.0.0",
  private: true,
  type: "module",
  main: "./dist/index.js",
  types: "./dist/index.d.ts",
  files: [
    "dist/**"
  ],
  scripts: {
    lint: "eslint . --fix",
    build: "tsup",
    "build:live": "turbo watch build",
    test: "vitest run --silent",
    dev: "vitest --ui --coverage"
  },
  devDependencies: {
    "@eslint/js": "^9.22.0",
    "@jest/globals": "^29.7.0",
    "@repo/typescript": "*",
    "@testing-library/jest-dom": "^6.6.3",
    "@types/node": "^22.13.4",
    eslint: "^9.22.0",
    "eslint-config-prettier": "^10.1.1",
    "eslint-plugin-prettier": "^5.2.3",
    globals: "^16.0.0",
    tsup: "^8.3.6",
    typescript: "^5.7.3",
    "typescript-eslint": "^8.26.1",
    vitest: "^3.0.8"
  },
  dependencies: {
    "class-variance-authority": "^0.7.1",
    clsx: "^2.1.1",
    "es-toolkit": "^1.33.0",
    superjson: "^2.2.2",
    "tailwind-merge": "^3.0.2"
  }
};

// tsup.config.ts
var tsup_config_default = defineConfig((options) => ({
  entryPoints: ["src/index.ts"],
  clean: true,
  dts: true,
  format: ["esm"],
  // noExternal: [
  //   ...Object.keys(pkg.dependencies),
  // ],
  external: [
    ...Object.keys(package_default["peerDependencies"] || {})
  ],
  ...options
}));
export {
  tsup_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidHN1cC5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX2luamVjdGVkX2ZpbGVuYW1lX18gPSBcIi9ob21lL2V1ZGFpbW9uaWEvd3d3L3llcGFnaS9wYWNrYWdlcy91dGlscy90c3VwLmNvbmZpZy50c1wiO2NvbnN0IF9faW5qZWN0ZWRfZGlybmFtZV9fID0gXCIvaG9tZS9ldWRhaW1vbmlhL3d3dy95ZXBhZ2kvcGFja2FnZXMvdXRpbHNcIjtjb25zdCBfX2luamVjdGVkX2ltcG9ydF9tZXRhX3VybF9fID0gXCJmaWxlOi8vL2hvbWUvZXVkYWltb25pYS93d3cveWVwYWdpL3BhY2thZ2VzL3V0aWxzL3RzdXAuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCB0eXBlIE9wdGlvbnMgfSBmcm9tIFwidHN1cFwiO1xuaW1wb3J0IHBrZyBmcm9tIFwiLi9wYWNrYWdlLmpzb25cIlxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKG9wdGlvbnM6IE9wdGlvbnMpID0+ICh7XG4gIGVudHJ5UG9pbnRzOiBbXCJzcmMvaW5kZXgudHNcIl0sXG4gIGNsZWFuOiB0cnVlLFxuICBkdHM6IHRydWUsXG4gIGZvcm1hdDogW1wiZXNtXCJdLFxuICAvLyBub0V4dGVybmFsOiBbXG4gIC8vICAgLi4uT2JqZWN0LmtleXMocGtnLmRlcGVuZGVuY2llcyksXG4gIC8vIF0sXG4gIGV4dGVybmFsOiBbXG4gICAgLi4uT2JqZWN0LmtleXMocGtnWydwZWVyRGVwZW5kZW5jaWVzJ10gfHwge30pXG4gIF0sXG4gIC4uLm9wdGlvbnMsXG59KSk7XG4iLCAie1xuICBcIm5hbWVcIjogXCJAcmVwby91dGlsc1wiLFxuICBcInZlcnNpb25cIjogXCIwLjAuMFwiLFxuICBcInByaXZhdGVcIjogdHJ1ZSxcbiAgXCJ0eXBlXCI6IFwibW9kdWxlXCIsXG4gIFwibWFpblwiOiBcIi4vZGlzdC9pbmRleC5qc1wiLFxuICBcInR5cGVzXCI6IFwiLi9kaXN0L2luZGV4LmQudHNcIixcbiAgXCJmaWxlc1wiOiBbXG4gICAgXCJkaXN0LyoqXCJcbiAgXSxcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcImxpbnRcIjogXCJlc2xpbnQgLiAtLWZpeFwiLFxuICAgIFwiYnVpbGRcIjogXCJ0c3VwXCIsXG4gICAgXCJidWlsZDpsaXZlXCI6IFwidHVyYm8gd2F0Y2ggYnVpbGRcIixcbiAgICBcInRlc3RcIjogXCJ2aXRlc3QgcnVuIC0tc2lsZW50XCIsXG4gICAgXCJkZXZcIjogXCJ2aXRlc3QgLS11aSAtLWNvdmVyYWdlXCJcbiAgfSxcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQGVzbGludC9qc1wiOiBcIl45LjIyLjBcIixcbiAgICBcIkBqZXN0L2dsb2JhbHNcIjogXCJeMjkuNy4wXCIsXG4gICAgXCJAcmVwby90eXBlc2NyaXB0XCI6IFwiKlwiLFxuICAgIFwiQHRlc3RpbmctbGlicmFyeS9qZXN0LWRvbVwiOiBcIl42LjYuM1wiLFxuICAgIFwiQHR5cGVzL25vZGVcIjogXCJeMjIuMTMuNFwiLFxuICAgIFwiZXNsaW50XCI6IFwiXjkuMjIuMFwiLFxuICAgIFwiZXNsaW50LWNvbmZpZy1wcmV0dGllclwiOiBcIl4xMC4xLjFcIixcbiAgICBcImVzbGludC1wbHVnaW4tcHJldHRpZXJcIjogXCJeNS4yLjNcIixcbiAgICBcImdsb2JhbHNcIjogXCJeMTYuMC4wXCIsXG4gICAgXCJ0c3VwXCI6IFwiXjguMy42XCIsXG4gICAgXCJ0eXBlc2NyaXB0XCI6IFwiXjUuNy4zXCIsXG4gICAgXCJ0eXBlc2NyaXB0LWVzbGludFwiOiBcIl44LjI2LjFcIixcbiAgICBcInZpdGVzdFwiOiBcIl4zLjAuOFwiXG4gIH0sXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcImNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eVwiOiBcIl4wLjcuMVwiLFxuICAgIFwiY2xzeFwiOiBcIl4yLjEuMVwiLFxuICAgIFwiZXMtdG9vbGtpdFwiOiBcIl4xLjMzLjBcIixcbiAgICBcInN1cGVyanNvblwiOiBcIl4yLjIuMlwiLFxuICAgIFwidGFpbHdpbmQtbWVyZ2VcIjogXCJeMy4wLjJcIlxuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTRRLFNBQVMsb0JBQWtDOzs7QUNBdlQ7QUFBQSxFQUNFLE1BQVE7QUFBQSxFQUNSLFNBQVc7QUFBQSxFQUNYLFNBQVc7QUFBQSxFQUNYLE1BQVE7QUFBQSxFQUNSLE1BQVE7QUFBQSxFQUNSLE9BQVM7QUFBQSxFQUNULE9BQVM7QUFBQSxJQUNQO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBVztBQUFBLElBQ1QsTUFBUTtBQUFBLElBQ1IsT0FBUztBQUFBLElBQ1QsY0FBYztBQUFBLElBQ2QsTUFBUTtBQUFBLElBQ1IsS0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLGlCQUFtQjtBQUFBLElBQ2pCLGNBQWM7QUFBQSxJQUNkLGlCQUFpQjtBQUFBLElBQ2pCLG9CQUFvQjtBQUFBLElBQ3BCLDZCQUE2QjtBQUFBLElBQzdCLGVBQWU7QUFBQSxJQUNmLFFBQVU7QUFBQSxJQUNWLDBCQUEwQjtBQUFBLElBQzFCLDBCQUEwQjtBQUFBLElBQzFCLFNBQVc7QUFBQSxJQUNYLE1BQVE7QUFBQSxJQUNSLFlBQWM7QUFBQSxJQUNkLHFCQUFxQjtBQUFBLElBQ3JCLFFBQVU7QUFBQSxFQUNaO0FBQUEsRUFDQSxjQUFnQjtBQUFBLElBQ2QsNEJBQTRCO0FBQUEsSUFDNUIsTUFBUTtBQUFBLElBQ1IsY0FBYztBQUFBLElBQ2QsV0FBYTtBQUFBLElBQ2Isa0JBQWtCO0FBQUEsRUFDcEI7QUFDRjs7O0FEcENBLElBQU8sc0JBQVEsYUFBYSxDQUFDLGFBQXNCO0FBQUEsRUFDakQsYUFBYSxDQUFDLGNBQWM7QUFBQSxFQUM1QixPQUFPO0FBQUEsRUFDUCxLQUFLO0FBQUEsRUFDTCxRQUFRLENBQUMsS0FBSztBQUFBO0FBQUE7QUFBQTtBQUFBLEVBSWQsVUFBVTtBQUFBLElBQ1IsR0FBRyxPQUFPLEtBQUssZ0JBQUksa0JBQWtCLEtBQUssQ0FBQyxDQUFDO0FBQUEsRUFDOUM7QUFBQSxFQUNBLEdBQUc7QUFDTCxFQUFFOyIsCiAgIm5hbWVzIjogW10KfQo=
