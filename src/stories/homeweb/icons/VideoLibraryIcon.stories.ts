import type { Meta, StoryObj } from '@storybook/react'
import { VideoLibraryIcon } from '.'


/**
 * An icon as symbol that a disk or entry is available as digital copy.
 */
const meta: Meta<typeof VideoLibraryIcon> = {
  title: 'HomeWeb/Icons/VideoLibraryIcon',
  component: VideoLibraryIcon,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof VideoLibraryIcon>;

export const Invert: Story = {
  args: {
    invert: true
  }
}

export const Dark: Story = {
  args: {
    invert: false
  }
}