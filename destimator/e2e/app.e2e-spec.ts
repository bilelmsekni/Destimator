import { DestimatorPage } from './app.po';

describe('destimator App', () => {
  let page: DestimatorPage;

  beforeEach(() => {
    page = new DestimatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
