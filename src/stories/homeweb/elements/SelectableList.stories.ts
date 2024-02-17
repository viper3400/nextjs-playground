import type { Meta, StoryObj } from '@storybook/react'
import { SelectableList } from './SelectableList'
import { ListButtonProperties } from './ListButton'

const meta: Meta<typeof SelectableList> = {
  title: 'HomeWeb/Elements/SelectableList',
  component: SelectableList,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
}

const singleLineListItems: ListButtonProperties[]= [
  { mainText: 'Entry One' },
  { mainText: 'Entry Two' },
  { mainText: 'Entry Three' },
  { mainText: 'Entry Four' }
]

export default meta
type Story = StoryObj<typeof SelectableList>;

export const Default: Story = {
  args: {
    listItems: singleLineListItems
  }
}
