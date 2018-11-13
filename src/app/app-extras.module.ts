import {
  NgModule
} from '@angular/core';

import {
  SkyListModule,
  SkyListToolbarModule,
  SkyListPagingModule
} from '@skyux/list-builder';

import {
  SkyListViewChecklistModule
} from './public';

@NgModule({
  imports: [
    SkyListModule,
    SkyListToolbarModule,
    SkyListViewChecklistModule,
    SkyListPagingModule
  ],
  exports: [
    SkyListModule,
    SkyListToolbarModule,
    SkyListViewChecklistModule,
    SkyListPagingModule
  ],
  providers: [],
  entryComponents: []
})
export class AppExtrasModule { }
