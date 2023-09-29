import { Meta, StoryObj } from '@storybook/react'
import { Spinner } from './Spinner'

/**
 * A spinner is a simple element that indicates the user that some content is loaded
 * in the background.
 */
const meta: Meta<typeof Spinner> = {
  title: 'HomeWeb/Elements/Spinner',
  component: Spinner,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
}

export default meta
  type Story = StoryObj<typeof Spinner>

export const Default: Story = {}