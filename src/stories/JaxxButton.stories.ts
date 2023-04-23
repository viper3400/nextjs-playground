import type { Meta, StoryObj } from '@storybook/react';

import { JaxxButton } from './JaxxButton';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof JaxxButton> = {
  title: 'HomeWeb/Elements/JaxxButton',
  component: JaxxButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof JaxxButton>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};
