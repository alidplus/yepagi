import { Providers } from "@repo/context";
import type { Preview } from "@storybook/react";
import "../src/global.css";
import React, { ComponentType } from "react";

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
  decorators: [
    (Story: ComponentType) => <Providers><Story /></Providers>
  ]
};

export default preview;
