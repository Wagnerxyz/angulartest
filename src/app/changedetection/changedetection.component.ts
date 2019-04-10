//our root app component
import { Component, ChangeDetectionStrategy, NgModule, VERSION } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
// import {UserOneComponent} from './user-one.component';
// import {UserTwoComponent} from './user-two.component';
@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.Default,

  template: `
    <div>
      <button (click)="addProp()">Add property</button>
      <button (click)="changeName()">Change name property</button>
      <button (click)="changeUser()">Change user object</button>
      <hr>
      <div>
        <user-one [user]="user"></user-one>
        <hr>
        <user-two [user]="user"></user-two>
      </div>
    </div>
  `
})
export class ChangedetectionComponent {
  user: any = {
    name: 'Jeremy Lin',
    age: 31,
    location: 'New York'
  };

  addProp() {
    this.user.email = 'griffin@blink-182.net';
  }

  changeName() {
    this.user.name = 'Steve Curry';
  }

  changeUser() {
    this.user = {
      name: 'James Harden',
      age: 30,
      location: 'Houston'
    };
  }
}

// @NgModule({
//   imports: [ BrowserModule ],
//   declarations: [ App, UserOneComponent, UserTwoComponent ],
//   bootstrap: [ App ]
// })
// export class changeDetectionComponent {}