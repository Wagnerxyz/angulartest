import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService, NewProductService } from './di-test/product.service';
import { URL_InjectionToken, SETTINGS_MENU, moduleOneMenu } from './di-test/ditestconst';
import { ChildComponentComponent } from './childtoparent/child-component/child-component.component';
import { ParentComponentComponent } from './childtoparent/parent-component/parent-component.component';
import { CustomEventComponent, NewsletterComponent } from './customEvent.component';
import { SizerComponent } from './two-way-binding/sizer/sizer.component';
import { SyntaxRoutingModule } from './syntax-routing.module';
import { ReactiveFormComponent } from './reactiveform/reactive-form.component';
import { TemplateFormValidateComponent } from './templateform/templateformvalidate.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { ShareReplayTestComponent } from './sharereplaytest.component';
import { DiTestComponent } from './di-test/di-test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ChildComponentComponent, ParentComponentComponent, NewsletterComponent, SizerComponent, DiTestComponent,
    ReactiveFormComponent, TemplateFormValidateComponent, TwoWayBindingComponent, CustomEventComponent, ShareReplayTestComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SyntaxRoutingModule
  ],
  // exports: [SyntaxModule],
  providers: [
    { provide: ProductService, useClass: ProductService },
    //  { provide: NewProductService, useClass: ProductService },
    { provide: NewProductService, useExisting: ProductService },
    { provide: URL_InjectionToken, useValue: 'http://SomeEndPoint.com/api' },
    { provide: SETTINGS_MENU, useValue: moduleOneMenu, multi: true },
    { provide: 'aaa', useValue: { a: 'a', b: 'bbb' } },// string tokenr容易被覆盖
    { provide: 'PRODUCT_SERVICE', useClass: ProductService },
  ]
})
export class SyntaxModule { }
