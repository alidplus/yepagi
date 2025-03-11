import type { StorybookConfig } from "@storybook/experimental-nextjs-vite";
import { name } from "../package.json";

const config: StorybookConfig = {
  stories: [
    // "../readme/**/*.mdx",
    "../src/**/docs.mdx",
    "../src/**/stories.@(ts|tsx)"
  ],
  staticDirs: ['../../../public'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-themes",
    "@storybook/addon-actions",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/experimental-nextjs-vite",
    options: {
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
    `;
    return `${headHtmlContent}\n${style}`;
  },
};
export default config;