import { by, element } from 'protractor';

import { expect, SkyHostBrowser } from '@skyux-sdk/e2e';

describe('list-view-checklist component', () => {
  beforeEach(async () => {
    await SkyHostBrowser.get('visual/list-view-checklist');
  });

  describe('(lg screens)', () => {
    beforeEach(async () => {
      await SkyHostBrowser.setWindowBreakpoint('lg');
    });

    it('should display checklist view', (done) => {
      expect('#screenshot-list-view-checklist').toMatchBaselineScreenshot(
        done,
        {
          screenshotName: 'list-view-checklist-lg',
        }
      );
    });

    it('should display checklist view with checked', async (done) => {
      await element(by.css('.sky-list-view-checklist sky-checkbox')).click();

      expect('#screenshot-list-view-checklist').toMatchBaselineScreenshot(
        done,
        {
          screenshotName: 'list-view-checklist-lg-checked',
        }
      );
    });

    it('should display only checked items when "only show selected items" is checked', async (done) => {
      await element(by.css('.sky-list-view-checklist sky-checkbox')).click();
      await element(
        by.css('.sky-list-multiselect-toolbar sky-checkbox')
      ).click();

      expect('#screenshot-list-view-checklist').toMatchBaselineScreenshot(
        done,
        {
          screenshotName: 'list-view-checklist-lg-show-only-selected',
        }
      );
    });

    it('should display checklist view single select', async (done) => {
      await element(by.css('.sky-btn.sky-btn-primary')).click();

      expect('#screenshot-list-view-checklist').toMatchBaselineScreenshot(
        done,
        {
          screenshotName: 'list-view-checklist-lg-single-select',
        }
      );
    });
  });

  describe('(xs screens)', () => {
    beforeEach(async () => {
      await SkyHostBrowser.setWindowBreakpoint('xs');
    });

    it('should display checklist view', (done) => {
      expect('#screenshot-list-view-checklist').toMatchBaselineScreenshot(
        done,
        {
          screenshotName: 'list-view-checklist-xs',
        }
      );
    });
  });
});
