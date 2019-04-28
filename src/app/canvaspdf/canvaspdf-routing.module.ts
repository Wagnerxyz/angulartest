import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanvaspdfComponent } from './canvaspdf.component'

const routes: Routes = [{
  path: '',
  component: CanvaspdfComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CanvaspdfRoutingModule { }
