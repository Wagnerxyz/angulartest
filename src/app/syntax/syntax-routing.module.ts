import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiTestComponent, CustomEventComponent, ReactiveFormComponent, ShareReplayTestComponent, TemplateFormValidateComponent, TwoWayBindingComponent } from '.';

const routes: Routes = [
    { path: 'test', component: CustomEventComponent },
    { path: 'twowaybinding', component: TwoWayBindingComponent },
    { path: 'TemplateDrivenForm', component: TemplateFormValidateComponent },
    { path: 'ReactiveForm', component: ReactiveFormComponent },
    { path: 'ditest', component: DiTestComponent }, 
    { path: 'sharereplay', component: ShareReplayTestComponent },
    { path: 'emitter', component: CustomEventComponent },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SyntaxRoutingModule { }
