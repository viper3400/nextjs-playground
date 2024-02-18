import { Ensure, contain, not } from '@serenity-js/assertions'
import { MetaQuestionAdapter, Task } from '@serenity-js/core'
import { PageElement, By, CssClasses, PageElements } from '@serenity-js/web'

export class SelectableListSerenityHelper {
  static selectableList = PageElement.located(By.css('[data-test="selectable-list"]')).describedAs('selectable list')
  static listItems = PageElements.located(By.css('[data-test="list-button"]'))
}
