import { NgMdlPrototypePage } from './app.po';

describe('ng-mdl-prototype App', function() {
  let page: NgMdlPrototypePage;

  beforeEach(() => {
    page = new NgMdlPrototypePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
