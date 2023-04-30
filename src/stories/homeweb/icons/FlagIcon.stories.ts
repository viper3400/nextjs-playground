import type { Meta, StoryObj } from '@storybook/react'
import { FlagIcon } from '.'

/**
 * An icon as symbol for a flagged movie.
 */
const meta: Meta<typeof FlagIcon> = {
  title: 'HomeWeb/Icons/FlagIcon',
  component: FlagIcon,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof FlagIcon>;

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