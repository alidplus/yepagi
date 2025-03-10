import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    include: ["src/**/*.ts?(x)"],
    coverage: {
      include: ['../../packages/utils/src/']
    }
  },
});
