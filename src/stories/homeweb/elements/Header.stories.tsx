import type { Meta, StoryObj } from '@storybook/react'

import { Header } from './Header'
import { MenuEntryProperties } from './MenuEntry'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Header> = {
  title: 'HomeWeb/Elements/Header',
  component: Header,
  tags: ['autodocs'],
}
const menuEntries : MenuEntryProperties[] = [
  {
    label: 'Filmsuche'
  },
  {
    label: 'Gesehene Filme'
  },
  {
    label: 'Metadatensuche'
  }
]

const rightMenuEntries : MenuEntryProperties[] = [
  {
    label: 'Abmelden'
  },
  {
    label: 'Passwort ändern'
  }
]

export default meta
type Story = StoryObj<typeof Header>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    mainLabel: 'Filmdatenbank',
    leftMenuEntries: menuEntries,
    rightMenuEntries: rightMenuEntries,
    rightMenuLabel: 'JANE.DOE'
  }
}
