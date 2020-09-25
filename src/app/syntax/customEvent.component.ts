import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'home',
    template: `
    <newsletter [user]="this.user" (subscribe)="subscribe($event)"></newsletter>
    <button (click)="changeUserName()">Change User Name</button>
    <p>{{fromchild}}</p>
`})
export class CustomEventComponent {

    user: User = {
        firstName: 'Alice',
        lastName: 'Smith'
    };
    fromchild: string;
    constructor() {
    }

    subscribe(email: string) {
        this.fromchild = email;
    }

    changeUserName() {
        this.user.firstName = 'Bob';
    }
}

@Component({
    selector: 'newsletter',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
<fieldset class="newsletter">    
    <legend>Newsletter</legend>
    
    <h5>Hello {{user?.firstName}},
        enter your email below to subscribe:</h5>
    <form>
        
        <input #email type="email" name="email" placeholder="Enter your Email">
      
        <input  type="button" class="button button-primary" value="Subscribe"
                (click)="subscribeToNewsletter(email.value)">
    </form>
          
</fieldset>      
`})
export class NewsletterComponent {

    @Input()
    user: User;

    @Output()
    subscribe = new EventEmitter();

    subscribeToNewsletter(email: string) {
        this.subscribe.emit(email); console.log('www');
    }
}

export interface User {
    firstName: string;
    lastName: string;
}