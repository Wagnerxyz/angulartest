import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class ProductService {

  value = 0;
  constructor() { }

  sayHello(): void {
    console.log(`From TestService --> Hello`);
  }
  getValue(): number {
    return ++this.value;
  }
}


export class NewProductService {
  value = 0;
  constructor() { }

  sayHello(): void {
    console.log(`From TestService --> Hello`);
  }
  getValue(): number {
    return ++this.value;
  }
}