import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService, NewProductService } from './di-test/product.service';
import { URL_InjectionToken, SETTINGS_MENU, moduleOneMenu } from './di-test/ditestconst';
import { ChildComponentComponent } from './childtoparent/child-component/child-component.component';
import { ParentComponentComponent } from './childtoparent/parent-component/parent-component.component';



@NgModule({
  declarations: [ChildComponentComponent, ParentComponentComponent],
  imports: [
    CommonModule
  ],
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
