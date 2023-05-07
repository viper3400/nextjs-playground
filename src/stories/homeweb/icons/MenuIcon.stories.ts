import type { Meta, StoryObj } from '@storybook/react'
import { MenuIcon } from '.'

/**
 * The icon for a menu.
 */
const meta: Meta<typeof MenuIcon> = {
  title: 'HomeWeb/Icons/MenuIcon',
  component: MenuIcon,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof MenuIcon>;

export const Invert: Story = {
  args: {
    invert: true
  }
}

export const Dark: Story = {
  args: {
    invert: false
  }
}