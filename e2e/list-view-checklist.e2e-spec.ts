import {
  by,
  element
} from 'protractor';

import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

describe('list-view-checklist component', () => {

  function validateScreenshot(done: DoneFn) {
    expect('#screenshot-list-view-checklist').toMatchBaselineScreenshot(done);
  }

  beforeEach(() => {
    SkyHostBrowser.get('visual/list-view-checklist');
  });

  it('should display checklist view', (done) => {
    validateScreenshot(done);
  });

  it('should display checklist view with checked', (done) => {
    element(by.css('.sky-list-view-checklist sky-checkbox')).click();

    validateScreenshot(done);
  });

  it('should display only checked items when "only show selected items" is checked', (done) => {
    element(by.css('.sky-list-view-checklist sky-checkbox')).click();
    element(by.css('#sky-list-view-checklist-show-selected')).click();

    validateScreenshot(done);
  });

  it('should display checklist view single select', (done) => {
    element(by.css('.sky-btn.sky-btn-primary')).click();

    validateScreenshot(done);
  });
});
