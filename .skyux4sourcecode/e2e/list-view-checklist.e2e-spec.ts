import {
  by,
  element
} from 'protractor';

import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

describe('list-view-checklist component', () => {

  beforeEach(() => {
    SkyHostBrowser.get('visual/list-view-checklist');
  });

  describe('(lg screens)', () => {
    beforeEach(() => {
      SkyHostBrowser.setWindowBreakpoint('lg');
    });

    it('should display checklist view', (done) => {
      expect('#screenshot-list-view-checklist').toMatchBaselineScreenshot(done, {
        screenshotName: 'list-view-checklist-lg'
      });
    });

    it('should display checklist view with checked', (done) => {
      element(by.css('.sky-list-view-checklist sky-checkbox')).click();

      expect('#screenshot-list-view-checklist').toMatchBaselineScreenshot(done, {
        screenshotName: 'list-view-checklist-lg-checked'
      });
    });

    it('should display only checked items when "only show selected items" is checked', (done) => {
      element(by.css('.sky-list-view-checklist sky-checkbox')).click();
      element(by.css('.sky-list-multiselect-toolbar sky-checkbox')).click();

      expect('#screenshot-list-view-checklist').toMatchBaselineScreenshot(done, {
        screenshotName: 'list-view-checklist-lg-show-only-selected'
      });
    });

    it('should display checklist view single select', (done) => {
      element(by.css('.sky-btn.sky-btn-primary')).click();

      expect('#screenshot-list-view-checklist').toMatchBaselineScreenshot(done, {
        screenshotName: 'list-view-checklist-lg-single-select'
      });
    });
  });

  describe('(xs screens)', () => {
    beforeEach(() => {
      SkyHostBrowser.setWindowBreakpoint('xs');
    });

    it('should display checklist view', (done) => {
      expect('#screenshot-list-view-checklist').toMatchBaselineScreenshot(done, {
        screenshotName: 'list-view-checklist-xs'
      });
    });
  });
});
