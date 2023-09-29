import { Meta, StoryObj } from '@storybook/react'
import { CoverThumbProps } from './CoverThumb'
import picard from './assets/picard.jpg'
import mario from './assets/mario.jpg'
import avatar from './assets/avatar.jpg'
import { CoverGrid } from './CoverGrid'

const meta: Meta<typeof CoverGrid> = {
  title: 'HomeWeb/CoverGrid',
  component: CoverGrid,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
}

export default meta
  type Story = StoryObj<typeof CoverGrid>;


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

export const Default : Story = {
  args: { coverThumbs: data }
}

export const Loading: Story = {
  args: { coverThumbs: data, isLoading: true }
}