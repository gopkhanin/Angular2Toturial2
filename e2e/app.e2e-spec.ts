import { Kt002Page } from './app.po';

describe('kt002 App', () => {
  let page: Kt002Page;

  beforeEach(() => {
    page = new Kt002Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
