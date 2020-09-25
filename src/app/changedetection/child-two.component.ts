import { Component, Input, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'child-two',
  changeDetection: ChangeDetectionStrategy.Default,
  styles: [`
    .example-two {
      font-size: 19px;
      margin-bottom: 10px;
    }
  `],
  template: `
    <div>ChangeDetectionStrategy.Default
    <h4>{{ user.name }}</h4>
    <h5>{{ user.age }} years old</h5>
    {{ user.location }} <br />
    {{ user.email }} <br />
    
    <button (click)="update()">子组件点击事件update()  this.state</button>
    <p>解释: {{user.state}}</p>
    </div>
  `
})
export class UserTwoComponent {
  @Input() user;

  state: string;

  //Dom Click事件触发change detection
  update() {
    this.user.state = '本身Default检测，并不只检查@input引用，所以能更新。';
    // this.user.name = 'user-two update name ';
  }

  ngDoCheck() {
    console.log('user two ngDoCheck');
  }
  //ngOnChanges仅当有@input binding才可能被调用，@Input绑定的直接引用变化，而不是子属性变化，才会被调用。
  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(`${this.constructor.name}: ${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }
}