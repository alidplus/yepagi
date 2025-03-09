import type { StorybookConfig } from "@storybook/react-vite";
import { join, dirname } from "path";
import { name } from "../package.json";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, "package.json")));
}
const config: StorybookConfig = {
  stories: [
    "../src/**/docs.mdx",
    "../src/**/stories.@(ts|tsx)"
  ],
  addons: [
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-themes"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
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
