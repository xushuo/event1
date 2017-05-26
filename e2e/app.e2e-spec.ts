import { Event1Page } from './app.po';

describe('event1 App', () => {
  let page: Event1Page;

  beforeEach(() => {
    page = new Event1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
