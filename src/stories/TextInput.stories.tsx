import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './TextInput';

const meta: Meta<typeof TextInput> = {
  title: 'HomeWeb/TextInput',
  component: TextInput,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Text: Story = {
    args: {
        label: 'Username'
    }
};

/**
 * Des
 */
export const Password: Story = {
    args: {
        label: 'Password',
        password: true
    }
};
