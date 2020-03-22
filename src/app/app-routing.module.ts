import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  }
  // ,         //注释此处，一级页面不直接访问
  // {
  //   path: 'xxx/news',
  //   loadChildren: () => import('./news/news.module').then( m => m.NewsPageModule)
  // },
  // {
  //   path: 'newsinfo',
  //   loadChildren: () => import('./newsinfo/newsinfo.module').then( m => m.NewsinfoPageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
