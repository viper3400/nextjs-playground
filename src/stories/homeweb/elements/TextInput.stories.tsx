import type { Meta, StoryObj } from '@storybook/react'
import { TextInput } from './TextInput'

const meta: Meta<typeof TextInput> = {
  title: 'HomeWeb/Elements/TextInput',
  component: TextInput,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof TextInput>;

export const Text: Story = {
  args: {
    classNames: 'p-4',
    inputName: 'Username',
    label: 'Username'
  }
}

/**
 * Use a password field so that user input is masked
 */
export const Password: Story = {
  args: {
    inputName: 'Password',
    label: 'Password',
    password: true
  }
}

/**
 * Invalidate the text input and provide a validation message.
 */
export const InvalidWithValidationMessage: Story = {
  args: {
    inputName: 'Password',
    label: 'Password',
    password: true,
    invalid: true,
    validationMessage: 'Please enter correct password'
  }
}

/**
 * Invalidate the text input and do not provide a validation message.
 */
export const InvalidWithoutValidationMessage: Story = {
  args: {
    inputName: 'Password',
    label: 'Username',
    invalid: true
  }
}