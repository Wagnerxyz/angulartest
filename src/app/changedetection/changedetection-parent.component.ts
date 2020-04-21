//our root app component
import { Component, ChangeDetectionStrategy, SimpleChanges } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
@Component({
  selector: 'app-changedetection',
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
    <div>
    <p>演示 OnPush ,@Input不改变引用时，不触发检测，但可通过其组件的DOM EVENT触发检测 </p>
      <button (click)="addProp()">Add property(不改变引用)</button>
      <button (click)="changeName()">Change name property(不改变引用)</button>
      <button (click)="changeUser()">Change user object(改变引用)</button>
      <hr>
      
      <p>两个组件引用同样的@Input</p>
      <div>
        <child-one [user]="user"></child-one>
        <hr>
        <child-two [user]="user"></child-two>
      </div>
    </div>
  `
})
export class ChangeDetectionParentComponent {
  user: any = {
    name: '父节点传入@Input的默认值',
    age: 31,
    location: 'New York'
  };
  ngDoCheck() {
    console.log('parent ngDoCheck');
  }
  addProp() {
    this.user.email = '新增加的属性，griffin@blink-182.net';
  }

  changeName() {
    this.user.name = '改变的属性，Steve Curry';
  }

  changeUser() {
    this.user = {
      name: 'James Harden',
      age: 30,
      location: 'Houston'
    };
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(`${this.constructor.name}:  ${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

}
