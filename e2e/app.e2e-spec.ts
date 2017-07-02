import { CartripPage } from './app.po';

describe('cartrip App', () => {
  let page: CartripPage;

  beforeEach(() => {
    page = new CartripPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
