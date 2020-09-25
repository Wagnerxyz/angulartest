//our root app component
import { Component, ChangeDetectionStrategy, SimpleChanges } from '@angular/core'

@Component({
  selector: 'app-changedetection',
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
    <div>
    <p>演示 OnPush ,@Input不改变引用时，不触发检测，但可通过其组件的DOM EVENT触发检测 </p>
    <p>都引用一个user对象通过@input传 </p>
    <p> 点父组件按钮不会触发子组件DOM Event，子组件如果onpush需要@Input引用改变才行(还有其他几种，省略。。。) </p>
   
      <button (click)="addProp()">Add property(不改变引用)</button>
      <button (click)="changeName()">Change name property(不改变引用)</button>
      <button (click)="changeUser()">Change user object(改变引用)</button><br>
      {{ user.name }}<br />
      {{ user.age }} years old<br />
      {{ user.location }} <br />
      {{ user.email }} <br />
      <p>解释: {{user.state}}</p>
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
    name: 'AAA',
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
}
