import { Component, Input, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'child-one',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    .example-one {
      font-size: 19px;
      margin-bottom: 10px;
    }
  `],
  template: `
    <div>ChangeDetectionStrategy.OnPush
      <h4>{{ user.name }}</h4>
      <h5>{{ user.age }} years old</h5>
      {{ user.location }} <br />
      {{ user.email }} <br />
     
      <input type="text" style="padding:0.5em" value='纯html控件输入的dom事件不经angular封装，不会唤起检测机制'/>
      <button (click)="update()">子组件点击事件update()  this.state</button>
      <p>解释: {{user.state}}</p>
    </div>
  `
})
export class UserOneComponent {
  @Input() user;

  state: string;
  //Dom Click事件触发change detection
  update() {
    this.user.state = `Dom Click事件触发change detection，之前input属性变化，因为引用没变，
    父组件的click事件，到子组件里后，子组件是OnPush,不触发子组件的检测（若子组件自己及子组件的子click，Dom Event就能触发检测了）
    但点这个按钮，父组件也更新，因为子组件事件冒泡到父组件了！触发其change detect`
    // this.user.name = 'user-one update name ';
  }

  ngDoCheck() {
    console.log('user one ngDoCheck');
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