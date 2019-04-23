import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'user-one',
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
      state: {{state}}
      <input type="text" />
      <button (click)="update()">Internal update</button>
      <p>should update because trigger dom event click</p>
    </div>
  `
})
export class UserOneComponent {
  @Input()
  user;

  state: number = 0;

  update() {
    ++this.state;
    // this.user.name = 'user-one update name';
  }
}