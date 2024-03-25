import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
    "@storybook/addon-styling-webpack"
  ],
  core: {
    disableTelemetry: true,
  },
  framework: {
    name: "@storybook/nextjs",
    options: {}
  },
  docs: {
    autodocs: "tag"
  },
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../src'),
        '@/lib': path.resolve(__dirname, '../src/lib')
      };
    }
    return config;
  },
};
export default config;