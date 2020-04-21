import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnChangeComponent } from './changedetection/onChange';
import { ChangeDetectionParentComponent } from './changedetection/changedetection-parent.component';
import { TwoWayBindingComponent, TemplateFormValidateComponent, ReactiveFormComponent } from './syntax';
import { NgrxComponent } from './ngrx/ngrx.component';
import { HelloParentComponent } from './hello/helloparent.component';
import { OnpushHierachyComponent } from './changedetection/onpush-hierachy.component';
import { CanDeactivateGuard } from './routeguard';
import { HomeComponent, ShareReplayTestComponent } from './syntax';
// import { CanvaspdfComponent } from './canvaspdf/canvaspdf.component';


const routes: Routes = [
  { path: 'changedetect', component: ChangeDetectionParentComponent },
  { path: 'OnpushHierachy', component: OnpushHierachyComponent },
  { path: 'ngmodel', component: TwoWayBindingComponent },
  { path: 'onchange', component: OnChangeComponent },
  { path: 'ngrx', component: NgrxComponent },
  { path: 'hello', component: HelloParentComponent, canDeactivate: [CanDeactivateGuard] },
  { path: 'sharereplay', component: ShareReplayTestComponent },
  { path: 'TemplateDrivenForm', component: TemplateFormValidateComponent },
  { path: 'ReactiveForm', component: ReactiveFormComponent },
  { path: 'test', component: HomeComponent },
  {
    path: 'pdf',
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
    //自定义加载策略https://angular.cn/guide/router#custom-preloading-strategy
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
