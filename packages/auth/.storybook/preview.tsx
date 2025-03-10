import type { Preview } from "@storybook/react";
import "../src/global.css";

const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true
    },
    docs: {
      toc: true
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
