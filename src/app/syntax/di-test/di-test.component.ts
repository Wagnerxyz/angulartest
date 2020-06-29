import { Component, Inject } from '@angular/core';
import { ProductService, NewProductService } from './product.service';
import { SETTINGS_MENU, MenuItem } from './ditestconst';

@Component({
  selector: 'app-di-test',
  templateUrl: './di-test.component.html',
  styleUrls: ['./di-test.component.scss']
})
export class DiTestComponent {

  stringValue: number = 0;
  existingTokenValue: number;
  classValue: number;
  stringtokenusevalue: any;

  // //
  // constructor(private productService: ProductService) {

  // }

  // //useExisting配合使用
  // constructor(private productService: NewProductService) {

  // }


  constructor(
    @Inject('aaa') private objfromdi,
    private productService: ProductService,//没有@Inject默认会解析classprovider
    private newproductService: NewProductService,
    @Inject(SETTINGS_MENU) public items: MenuItem[]) {
    // this.value = productService.b;
  }

  classToken(): void {

    this.classValue = this.productService.getValue()
  }
  existingToken(): void {

    this.existingTokenValue = this.newproductService.getValue()
  }

  usevalue(): void {
    this.stringtokenusevalue = this.objfromdi.b;
  }

  usemulti(): void {
    this.stringtokenusevalue = this.objfromdi.b;
  }
}
