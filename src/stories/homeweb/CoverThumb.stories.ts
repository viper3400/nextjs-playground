import { Meta, StoryObj } from '@storybook/react'
import { CoverThumb } from './CoverThumb'
import picard from './assets/picard.jpg'
import mario from './assets/mario.jpg'
import avatar from './assets/avatar.jpg'

const meta: Meta<typeof CoverThumb> = {
  title: 'HomeWeb/CoverThumb/CoverThumb',
  component: CoverThumb,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
}

export default meta
  type Story = StoryObj<typeof CoverThumb>;

export const Default : Story = {
  args: {
    imageSource: picard,
    altText: 'Star Trek Picard',
    bottomLabel: 'R01F2D01'
  }
}

export const Favorite : Story = {
  args: {
    imageSource: mario,
    altText: 'Super Mario Bros',
    isFavorite: true,
    bottomLabel: 'R12F2D01'
  }
}

export const Flagged : Story = {
  args: {
    imageSource: avatar,
    altText: 'Avatar: The Way of Water',
    isFlagged: true,
    bottomLabel: 'R01F7D04'
  }
}

/**
 * This example show all possible icons for a cover thumb.
 */
export const FullFlavoured : Story = {
  args: {
    imageSource: picard,
    altText: 'Start Trek Picard',
    isTvSeries: true,
    isFavorite: true,
    isFlagged: true,
    isSeen: true,
    hasDigitalCopy: true,
    bottomLabel: 'HDD'
  }
}