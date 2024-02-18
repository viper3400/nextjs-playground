import { test as componentTest } from '@playwright/experimental-ct-react'
import { Ensure, equals } from '@serenity-js/assertions'
import { useBase } from '@serenity-js/playwright-test'
import { By, Hover, PageElement, PageElements, Text } from '@serenity-js/web'
import React from 'react'
import { ListButtonProperties } from './ListButton'
import { SelectableList as SelectableListComponent } from './SelectableList'
import { ListButton as ListButtonComponent } from './ListButton'
import { ListButtonSerenityHelper } from './ListButtonSerenityHelper'
import { SelectableListSerenityHelper } from './SelectableListSerenityHelper'


// eslint-disable-next-line react-hooks/rules-of-hooks
const { it, describe } = useBase(componentTest)

describe('SelectableList', () => {

  const singleLineListItems: ListButtonProperties[]= [
    { mainText: 'Entry One' },
    { mainText: 'Entry Two' },
    { mainText: 'Entry Three' },
    { mainText: 'Entry Four' }
  ]

  it('shows the text of all list item', async ({ mount, actor }) => {

    const x = PageElement.from(await mount(
      <SelectableListComponent listItems={ singleLineListItems } />
    )).describedAs('list')

    await actor.attemptsTo(
      Ensure.that(Text.of(SelectableListSerenityHelper.listItems.nth(0)), equals(singleLineListItems[0].mainText)),
      Ensure.that(Text.of(SelectableListSerenityHelper.listItems.nth(1)), equals(singleLineListItems[1].mainText)),
      Ensure.that(Text.of(SelectableListSerenityHelper.listItems.nth(2)), equals(singleLineListItems[2].mainText)),
      Ensure.that(Text.of(SelectableListSerenityHelper.listItems.nth(3)), equals(singleLineListItems[3].mainText)),
    )
  })

  it('highlights the hovered list item', async ({ mount, actor }) => {

    PageElement.from(await mount(
      <SelectableListComponent listItems={ singleLineListItems } />
    )).describedAs('selectable list under test')

    await actor.attemptsTo(
      ListButtonSerenityHelper.EnsurePrimaryBackgroundColorOf(SelectableListSerenityHelper.listItems.nth(0)),
      ListButtonSerenityHelper.EnsurePrimaryBackgroundColorOf(SelectableListSerenityHelper.listItems.nth(1)),
      ListButtonSerenityHelper.EnsurePrimaryBackgroundColorOf(SelectableListSerenityHelper.listItems.nth(2)),
      ListButtonSerenityHelper.EnsurePrimaryBackgroundColorOf(SelectableListSerenityHelper.listItems.nth(3)),

      Hover.over(SelectableListSerenityHelper.listItems.nth(2)),

      ListButtonSerenityHelper.EnsurePrimaryBackgroundColorOf(SelectableListSerenityHelper.listItems.nth(0)),
      ListButtonSerenityHelper.EnsurePrimaryBackgroundColorOf(SelectableListSerenityHelper.listItems.nth(1)),
      ListButtonSerenityHelper.EnsureSecondaryBackgroundColorOf(SelectableListSerenityHelper.listItems.nth(2)),
      ListButtonSerenityHelper.EnsurePrimaryBackgroundColorOf(SelectableListSerenityHelper.listItems.nth(3)),

      Hover.over(SelectableListSerenityHelper.listItems.nth(3)),

      ListButtonSerenityHelper.EnsurePrimaryBackgroundColorOf(SelectableListSerenityHelper.listItems.nth(0)),
      ListButtonSerenityHelper.EnsurePrimaryBackgroundColorOf(SelectableListSerenityHelper.listItems.nth(1)),
      ListButtonSerenityHelper.EnsurePrimaryBackgroundColorOf(SelectableListSerenityHelper.listItems.nth(2)),
      ListButtonSerenityHelper.EnsureSecondaryBackgroundColorOf(SelectableListSerenityHelper.listItems.nth(3)),
    )
  })
})