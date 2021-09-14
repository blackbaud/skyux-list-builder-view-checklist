import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListViewChecklistVisualComponent } from './visual/list-view-checklist/list-view-checklist-visual.component';
import { VisualComponent } from './visual/visual.component';

const routes: Routes = [
  {
  path: '',
  component: VisualComponent
  },
  {
  path: 'visual/list-view-checklist',
  component: ListViewChecklistVisualComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
