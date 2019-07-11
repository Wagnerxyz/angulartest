import { Component, OnInit } from '@angular/core';
import { DialogService } from '../services/dialog.service';
import { Observable } from 'rxjs';

@Component({
  template: `
    <p>parent:{{config.position}}</p>
 
    <button (click)="onClick()">Parent trigger change detection</button>
    <button (click)="change()">change value</button>
    
    <hello [config]="config" [state]="state"></hello>
  `
})
export class HelloParentComponent {
  constructor(public dialogService: DialogService){

  }
  //If it’s a boolean, then the navigation is going to be executed or aborted, straight away. 
  //If it’s an Observable then nothing is going to happen until the observable emits a value.
  // Then the navigation will either execute or abort. 
   canDeactivate(): Observable<boolean> | boolean {

    // if (!this.isUpdating && this.personForm.dirty) {
        return this.dialogService.confirm('Discard changes for Person?');
    // }
    return true;
}	
  config = {
    position: 'top'
  };
  state=6;
  ngOnInit() {
    setInterval(() => {
      //感觉onpush只对自组件@Input有效。父组件变更引用才行。子组件内部新对象赋值也不行
   // angular绑定机制毕竟死盯着Input啊，等他变了才刷新
      this.config.position = Date.now().toString();
      // ++this.state;
    //  this.config = {
    //   position: Date.now().toString()
    // }
    console.log('parent setinterval run');
    
    },1500);
  }

  change() {
    this.config = { position: 'changeModelInZone' }
    // this.config.position = 'bottom';
  }
  onClick() {

  }
}