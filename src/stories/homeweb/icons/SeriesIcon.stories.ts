import type { Meta, StoryObj } from '@storybook/react'
import { SeriesIcon } from '.'

/**
 * An icon as symbol that a disk or entry is a tv series.
 */
const meta: Meta<typeof SeriesIcon> = {
  title: 'HomeWeb/Icons/SeriesIcon',
  component: SeriesIcon,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof SeriesIcon>;

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