import { NghelloPage } from './app.po';

describe('nghello App', () => {
  let page: NghelloPage;

  beforeEach(() => {
    page = new NghelloPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
