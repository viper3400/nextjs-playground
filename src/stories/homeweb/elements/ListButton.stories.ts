import type { Meta, StoryObj } from '@storybook/react'
import { ListButton } from './ListButton'

const meta: Meta<typeof ListButton> = {
  title: 'HomeWeb/Elements/ListButton',
  component: ListButton,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof ListButton>;

export const Default: Story = {
  args: {
    mainText: 'Main list button text'

  }
}

export const Selected: Story = {
  args: {
    mainText: 'Selected list button text',
    selected: true

  }
}