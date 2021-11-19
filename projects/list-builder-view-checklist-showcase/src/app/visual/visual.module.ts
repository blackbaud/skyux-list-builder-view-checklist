import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisualComponent } from './visual.component';
import { SkyListViewChecklistModule } from 'projects/list-builder-view-checklist/src/public-api';
import { RouterModule } from '@angular/router';
import { SkyListModule, SkyListToolbarModule } from '@skyux/list-builder';
import { ListViewChecklistVisualComponent } from './list-view-checklist/list-view-checklist-visual.component';

@NgModule({
  declarations: [VisualComponent, ListViewChecklistVisualComponent],
  imports: [
    CommonModule,
    RouterModule,
    SkyListViewChecklistModule,
    SkyListModule,
    SkyListToolbarModule,
  ],
})
export class VisualModule {}
