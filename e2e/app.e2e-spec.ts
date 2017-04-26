import { ShruAppPage } from './app.po';

describe('shru-app App', () => {
  let page: ShruAppPage;

  beforeEach(() => {
    page = new ShruAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('shru works!');
  });
});
