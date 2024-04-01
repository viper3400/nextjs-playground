import type { Preview } from "@storybook/react";
import '../src/app/globals.css';
import { initialize, mswDecorator } from 'msw-storybook-addon';

initialize({ onUnhandledRequest: 'warn' });

const preview: Preview = {
  decorators: [mswDecorator],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
};

export default preview;
