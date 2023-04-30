import type { Meta, StoryObj } from '@storybook/react'
import { LabeledIcon } from './LabeledIcon'

/**
 * An icon as symbol that a disk or entry is a tv series.
 */
const meta: Meta<typeof LabeledIcon> = {
  title: 'HomeWeb/Icons/LabeledIcon',
  component: LabeledIcon,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof LabeledIcon>;

export const Invert: Story = {
  args: {
    label: '2x'
  }
}
