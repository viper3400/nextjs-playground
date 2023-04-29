import type { Meta, StoryObj } from '@storybook/react';
import { FavoriteIcon } from './FavoriteIcon';

/**
 * An icon as symbol for a favorite movie.
 */
const meta: Meta<typeof FavoriteIcon> = {
  title: 'HomeWeb/Icons/FavoriteIcon',
  component: FavoriteIcon,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof FavoriteIcon>;

export const Invert: Story = {
  args: {
    invert: true
  }
};

export const Dark: Story = {
  args: {
    invert: false
  }
}