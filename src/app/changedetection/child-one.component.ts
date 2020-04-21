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
    <div>OnPush
      <h4>{{ user.name }}</h4>
      <h5>{{ user.age }} years old</h5>
      {{ user.location }} <br />
      {{ user.email }} <br />
     
      <input type="text" value='纯html控件输入的dom事件不会唤起检测机制'/>
      <button (click)="update()">Internal update</button>
      <p>解释: {{state}}</p>
    </div>
  `
})
export class UserOneComponent {
  @Input() user;

  state: string;
  //Dom Click事件触发change detection
  update() {
    this.state = `Dom Click事件触发change detection，之前input属性变化，因为引用没变，
    父组件的click事件，到子组件里后，子组件是OnPush,
    没触发子组件的检测（若子组件自己及子组件的子，Dom Event就能触发检测了）`
    // this.user.name = 'user-two update name ';
  }

  ngDoCheck() {
    console.log('user one ngDoCheck');
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(`${this.constructor.name}: ${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }
}