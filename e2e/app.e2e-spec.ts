import { PyrexAppPage } from './app.po';

describe('pyrex-app App', () => {
  let page: PyrexAppPage;

  beforeEach(() => {
    page = new PyrexAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
