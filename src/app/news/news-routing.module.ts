import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsPage } from './news.page';

const routes: Routes = [
  {
    path: 'news',
    component: NewsPage,
    children: [
      {
        path: 'newsinfo',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../newsinfo/newsinfo.module').then(m => m.NewsinfoPageModule)
          }
        ]
      }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsPageRoutingModule {}
