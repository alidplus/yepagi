import type { StorybookConfig } from "@storybook/nextjs";
import { name } from "../package.json";
import path from "path";

const config: StorybookConfig = {
  stories: [
    // "../readme/**/*.mdx",
    "../src/**/docs.mdx",
    "../src/**/stories.@(ts|tsx)",
  ],
  staticDirs: ["../../../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-themes",
    "@storybook/addon-actions",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {
      nextConfigPath: path.resolve(__dirname, "./next.config.js"),
    },
  },
  managerHead: (headHtmlContent) => {
    const style = `
    <style>
    .sidebar-header { margin-bottom: 20px; }
    .sidebar-header::after {
      content: '${name}';
      position: absolute;
      top: 2rem;
      left: 2rem;
      font-size: 14px;
      color: #90a4b1;
      font-weight: normal;
    }
    </style>
    <meta name="referrer" content="no-referrer">
    `;
    return `${headHtmlContent}\n${style}`;
  },
};
export default config;
