import { Ensure, contain, not } from '@serenity-js/assertions'
import { MetaQuestionAdapter, Task } from '@serenity-js/core'
import { PageElement, By, CssClasses, isVisible } from '@serenity-js/web'

export class ListButtonSerenityHelper {
  private static primaryBackgroundColorClassName = 'bg-slate-100'
  private static  secondaryBackgroundColorClassName = 'bg-slate-200'
  static listButton = PageElement.located(By.css('[data-test="list-button"]').describedAs('list button'))

  static EnsurePrimaryBackgroundColorOf = (pageElement: MetaQuestionAdapter<PageElement<unknown>, PageElement<unknown>>) =>
    Task.where('#actor ensures that list item has primary background color',
      Ensure.that(CssClasses.of(pageElement), contain(this.primaryBackgroundColorClassName)),
      Ensure.that(CssClasses.of(pageElement), not(contain(this.secondaryBackgroundColorClassName))),
    )
  static EnsurePrimaryBackgroundColor = () =>
    this.EnsurePrimaryBackgroundColorOf(this.listButton)

  static EnsureSecondaryBackgroundColorOf = (pageElement: MetaQuestionAdapter<PageElement<unknown>, PageElement<unknown>>) =>
    Task.where('#actor ensures that list item has secondary background color',
      Ensure.that(CssClasses.of(pageElement), not(contain(this.primaryBackgroundColorClassName))),
      Ensure.that(CssClasses.of(pageElement), contain(this.secondaryBackgroundColorClassName)),
    )

  static EnsureSecondaryBackgroundColor = () =>
    this.EnsureSecondaryBackgroundColorOf(this.listButton)
}

