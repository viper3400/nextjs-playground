import type { Meta, StoryObj } from '@storybook/react'

import { AutoComplete } from './AutoComplete'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof AutoComplete> = {
  title: 'HomeWeb/Elements/AutoComplete',
  component: AutoComplete,
  tags: ['autodocs'],
}

export default meta
  type Story = StoryObj<typeof AutoComplete>

const suggestions = [
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Elderberry',
  'Fig',
  'Grape',
  'Honeydew',
  'Kiwi',
  'Lemon',
  'Mango',
  'Orange',
  'Peach',
  'Pear',
  'Quince',
  'Raspberry',
  'Strawberry',
  'Tomato',
  'Watermelon',
]

export const Default: Story = {
  args: {
    suggestions
  }
}