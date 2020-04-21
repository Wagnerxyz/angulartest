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
    
    <button (click)="update()">Internal update</button>
    <p>解释: {{state}}</p>
    </div>
  `
})
export class UserTwoComponent {
  @Input() user;

  state: string;

  //Dom Click事件触发change detection
  update() {
    this.state = '本身Default检测，并不只检查@input引用，所以能更新。';
   // this.user.name = 'user-two update name ';
  }

  ngDoCheck() {
    console.log('user two ngDoCheck');
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