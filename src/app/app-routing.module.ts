import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnChangeComponent } from './changedetection/onChange';
import { ChangeDetectionParentComponent } from './changedetection/changedetection-parent.component';
import { NgrxComponent } from './ngrx/ngrx.component';
import { OnpushHierachyComponent } from './changedetection/onpush-hierachy.component';
import { CanDeactivateGuard } from './routeguard';
import { RefValueObjParentComponent } from './changedetection/RefValueObj/RefValueObj-parent.component';
// import { CanvaspdfComponent } from './canvaspdf/canvaspdf.component';


const routes: Routes = [
  { path: 'changedetect', component: ChangeDetectionParentComponent },
  { path: 'OnpushHierachy', component: OnpushHierachyComponent },
  { path: 'onchange', component: OnChangeComponent },
  { path: 'ngrx', component: NgrxComponent },
  { path: 'RefValueObj', component: RefValueObjParentComponent, canDeactivate: [CanDeactivateGuard] },

  {
    path: 'canvaspdf',
    loadChildren: () => import('./canvaspdf/canvaspdf.module').then(m => m.CanvaspdfModule)
  },
  // { path: 'ngdocheck', component: NgdocheckComponent },
  {
    path: 'toh',
    loadChildren: () => import('./tour-of-heroes/tour-of-heroes.module').then(m => m.TourOfHeroesModule)
  },

  // { path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: AppComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true, // <-- debugging purposes only
    // preloadingStrategy: PreloadAllModules //普通module加载完后，预加载所有惰性加载的特性区。
    //自定义加载策略https://angular.cn/guide/router#custom-preloading-strategy 实现PreloadingStrategy类preload方法，给路由添加属性比如 data:true,代码里自己判断加载
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
