import type { Meta, StoryObj } from '@storybook/react';
import { SeriesIcon } from './SeriesIcon';

const meta: Meta<typeof SeriesIcon> = {
  title: 'HomeWeb/CoverThumb/SeriesIcon',
  component: SeriesIcon,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SeriesIcon>;

export const Default: Story = {
};