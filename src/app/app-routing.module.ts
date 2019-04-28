import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnChangeComponent } from './changedetection/onChange';
import { ChangedetectionComponent } from './changedetection/changedetection.component';
import { NgrxComponent } from './ngrx/ngrx.component';
import { AppComponent } from './app.component';
import { HelloParentComponent } from './hello/helloparent.component';
import { SharereplaytestComponent } from './sharereplaytest/sharereplaytest.component';
import { FormvalidateComponent } from './formvalidate/formvalidate.component';
import { CanvaspdfComponent } from './canvaspdf/canvaspdf.component';


const routes: Routes = [
  { path: 'changedetect', component: ChangedetectionComponent },
  { path: 'onchange', component: OnChangeComponent },
  { path: 'ngrx', component: NgrxComponent },
  { path: 'hello', component: HelloParentComponent },
  { path: 'sharereplay', component: SharereplaytestComponent },
  { path: 'formvalidate', component: FormvalidateComponent },
  {
    path: 'pdf',
    loadChildren: './canvaspdf/canvaspdf.module#CanvaspdfModule'
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
