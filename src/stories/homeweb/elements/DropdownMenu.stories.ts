import type { Meta, StoryObj } from '@storybook/react'

import { DropdownMenu } from './DropdownMenu'
import { MenuEntryProperties } from './MenuEntry'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof DropdownMenu> = {
  title: 'HomeWeb/Elements/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
}
const data : MenuEntryProperties[] = [
  {
    label: 'My Action One'
  },
  {
    label: 'My Action Two wit longer text'
  }
]
export default meta
type Story = StoryObj<typeof DropdownMenu>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    entries: data
  },
}