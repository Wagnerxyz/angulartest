import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'user-two',
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
      {{ user.email }}
      {{state}}
      <button (click)="update()">Internal update</button>
      <p>* should update</p>
    </div>
  `
})
export class UserTwoComponent {
  @Input()
  user;
  state:number=0;
  update() {
    ++this.state;
   // this.user.name = 'Kevin Durant';
  }
}