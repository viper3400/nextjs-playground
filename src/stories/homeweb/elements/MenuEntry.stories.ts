import type { Meta, StoryObj } from '@storybook/react'
import { MenuEntry } from './MenuEntry'

const meta: Meta<typeof MenuEntry> = {
  title: 'HomeWeb/Elements/MenuEntry',
  component: MenuEntry,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof MenuEntry>;

export const Text: Story = {
  args: {
    label: 'My Action'
  }
}
