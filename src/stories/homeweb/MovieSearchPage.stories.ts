import type { Meta, StoryObj } from '@storybook/react'
import { MovieSearchPage } from './MovieSearchPage'
import { MenuEntryProperties } from './elements/MenuEntry'
import picard from './assets/picard.jpg'
import mario from './assets/mario.jpg'
import avatar from './assets/avatar.jpg'
import { CoverThumbProps } from './CoverThumb'

const meta: Meta<typeof MovieSearchPage> = {
  title: 'HomeWeb/MovieSearchPage',
  component: MovieSearchPage,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
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

const data : CoverThumbProps[] = []


for (let i = 0; i < 20; i++) {
  data.push({
    imageSource: picard,
    altText: 'Star Trek Picard',
    bottomLabel: 'R01F2D01',
    isFavorite: true,
    isSeen: false,
    timesSeen: '0',
    isFlagged: false,
    isTvSeries: true,
    hasDigitalCopy: false
  })
  data.push({
    imageSource: mario,
    altText: 'Mario',
    bottomLabel: 'R23F2D01',
    isFavorite: true,
    isSeen: false,
    timesSeen: '0',
    isFlagged: false,
    isTvSeries: true,
    hasDigitalCopy: false
  })
  data.push({
    imageSource: avatar,
    altText: 'Star Trek Picard',
    bottomLabel: 'R21F2D01',
    isFavorite: false,
    isSeen: false,
    timesSeen: '0',
    isFlagged: true,
    isTvSeries: false,
    hasDigitalCopy: false
  })

}

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

export default meta
type Story = StoryObj<typeof MovieSearchPage>;

export const Default: Story = {
  args: {
    headerProperties: {
      mainLabel: 'Filmdatenbank',
      leftMenuEntries: menuEntries,
      rightMenuEntries: rightMenuEntries,
      rightMenuLabel: 'JANE.DOE',
      onSelectMenuEntry: () => {
        console.log('Menu entry selected')
      }
    },
    coverThumbs: data,
    suggestions: suggestions
  }
}

export const WithoutResult: Story = {
  args: {
    headerProperties: {
      mainLabel: 'Filmdatenbank',
      leftMenuEntries: menuEntries,
      rightMenuEntries: rightMenuEntries,
      rightMenuLabel: 'JANE.DOE',
      onSelectMenuEntry: () => {
        console.log('Menu entry selected')
      }
    },
    coverThumbs: [],
    suggestions: suggestions
  }
}
