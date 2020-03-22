import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsinfoPage } from './newsinfo.page';

const routes: Routes = [
  {
    path: '',
    component: NewsinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsinfoPageRoutingModule {}
