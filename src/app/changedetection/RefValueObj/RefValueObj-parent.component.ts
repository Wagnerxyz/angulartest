import { Component, OnInit } from '@angular/core';
import { DialogService } from '../../services/dialog.service';
import { Observable } from 'rxjs';

@Component({
  template: `
    <p>展示引用，值类型对象引用变化，child 对 parent组件的影响，本质是是不是引用的一个对象</p>
    <p>parent 引用类型:{{this.config.position}}</p>
    <p>state int值类型:{{this.state}}</p>
 
    <button (click)="onClick()">Parent 空点击触发检测 change detection</button>
    <button (click)="change()">赋值新对象</button>
    
    <RefValueObj-child [config]="config" [state]="state"></RefValueObj-child>
  `
})
export class RefValueObjParentComponent {
  constructor(public dialogService: DialogService) {

  }
  //If it’s a boolean, then the navigation is going to be executed or aborted, straight away. 
  //If it’s an Observable then nothing is going to happen until the observable emits a value.
  // Then the navigation will either execute or abort. 
  canDeactivate(): Observable<boolean> | boolean {

    // if (!this.isUpdating && this.personForm.dirty) {
    return this.dialogService.confirm('Leave this page?');
    // }
    return true;
  }
  config = {
    position: 'top'
  };
  state = 6;

  interval: any;
  ngOnInit() {
    //this.interval= setInterval(() => {

    //   this.config.position = Date.now().toString();
    //    ++this.state; //值类型每次变化都是新引用，子组件也会变
    //   //  this.config = {
    //   //   position: Date.now().toString()
    //   // }
    //   console.log('parent setinterval run');

    // }, 1500);
  }

  change() {
    this.config = { position: 'changeModelInZone' }
    // this.config.position = 'bottom';
  }
  onClick() {

  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}