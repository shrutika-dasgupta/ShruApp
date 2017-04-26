import { browser, element, by } from 'protractor';

export class ShruAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('shru-root h1')).getText();
  }
}
