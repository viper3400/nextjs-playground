import { Meta, StoryObj } from "@storybook/react"
import { CoverThumb } from "./CoverThumb"
import picard from './assets/picard.jpg'

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
        altText: 'cover image'
    }
  }