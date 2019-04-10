import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <hello [config]="config"></hello>
    <button (click)="onClick()">Trigger change detection</button>
  `
})
export class HelloParentComponent {
  config = {
    position: 'top'
  };
  // ngOnInit() {
  //   setTimeout(() => {
  //    // this.config.position = 'left';
  //    this.config = {
  //     position: 'bottom'
  //   }
  //     console.log('done');
      
  //   },3000);
  //   console.log('ok');

  // }

  onClick() {
    this.config.position = 'bottom';
  }
}