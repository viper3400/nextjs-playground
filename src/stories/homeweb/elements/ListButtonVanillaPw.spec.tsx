import { test, expect } from '@playwright/experimental-ct-react'
import { ListButton as ListButtonComponent } from './ListButton'

test('should change background color on hover', async ({ mount }) => {

  const buttonText = 'Famous button'

  const component = await mount(
    <div>
      <ListButtonComponent mainText={ buttonText } />
    </div>
  )

  const button = component.getByText(buttonText)
  await expect(button).toBeVisible()
  await expect(button).toHaveClass('p-4 w-full text-left bg-slate-100')
  await button.hover()
  await expect(button).toHaveClass('p-4 w-full text-left bg-slate-200')
})
