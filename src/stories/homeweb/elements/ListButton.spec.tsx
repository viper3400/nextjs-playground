import { test as componentTest } from '@playwright/experimental-ct-react'
import { Ensure, contain, equals, not } from '@serenity-js/assertions'
import { useBase } from '@serenity-js/playwright-test'
import { By, Click, CssClasses, Hover, PageElement, PageElements, Text, isVisible } from '@serenity-js/web'
import React from 'react'

import { Duration, Log, Wait } from '@serenity-js/core'
import { ListButton as ListButtonComponent } from './ListButton'

// eslint-disable-next-line react-hooks/rules-of-hooks
const { it, describe } = useBase(componentTest)

describe('ListButton', () => {

  const listButton = PageElement.located(By.css('[data-test="list-button"]').describedAs('list button'))
  const buttonText = 'Famous button'
  const primaryBackgroundColorClassName = 'bg-slate-100'
  const secondaryBackgroundColorClassName = 'bg-slate-200'

  it('shows the text of the list button', async ({ mount, actor }) => {

    PageElement.from(await mount(
      <ListButtonComponent mainText={ buttonText } />
    )).describedAs('default list button')

    await actor.attemptsTo(
      Ensure.eventually(Text.of(listButton), equals(buttonText))
    )
  })

  it('changes background color on hover', async ({ mount, actor }) => {

    PageElement.from(await mount(
      <ListButtonComponent mainText={ buttonText } />
    )).describedAs('default list button')

    await actor.attemptsTo(
      Ensure.that(listButton, isVisible()),
      Ensure.that(CssClasses.of(listButton), contain(primaryBackgroundColorClassName)),
      Ensure.that(CssClasses.of(listButton), not(contain(secondaryBackgroundColorClassName))),
      Hover.over(listButton),
      Wait.until(CssClasses.of(listButton), contain(secondaryBackgroundColorClassName)),
      Ensure.that(CssClasses.of(listButton), not(contain(primaryBackgroundColorClassName)))
    )
  })

  it('changes background color when selected', async ({ mount, actor }) => {

    PageElement.from(await mount(
      <ListButtonComponent mainText={ buttonText } selected />
    )).describedAs('selected list button')

    await actor.attemptsTo(
      Ensure.that(listButton, isVisible()),
      Wait.until(CssClasses.of(listButton), contain(secondaryBackgroundColorClassName)),
      Ensure.that(CssClasses.of(listButton), not(contain(primaryBackgroundColorClassName)))
    )
  })

})