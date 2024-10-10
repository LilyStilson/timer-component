import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    {
        name: 'storybook-addon-jsdoc-to-mdx',
        options: {
            folderPaths: ['./src/'], 
            extensions: ['ts', 'js', 'tsx', 'jsx']
        }
    }
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
