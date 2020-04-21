import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription, fromEvent } from 'rxjs';
import { debounceTime, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'onchange,oncheck',
  template: `<input type=text [value]="firstName" [formControl]="firstNameControl">
    <br>{{firstName}}
    <br>{{model.user}}
    <footer>Angular version: {{angularVersion}}</footer>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnChangeComponent {
  angularVersion = '7';
  firstName = 'Name';
  @Input() aaa = { 'user': 'wagner', 'sex': 'male' };
  firstNameControl = new FormControl();
  formCtrlSub: Subscription;
  resizeSub: Subscription;
  model = { 'user': 'wagner', 'sex': 'male' }

  constructor() { console.clear(); }

  ngOnInit() {
    // setInterval(() => {
    //  // this.firstName='wa'
    //   //this.aaa='wa'
    // }, 2000);
    // debounce keystroke events
    this.formCtrlSub = this.firstNameControl.valueChanges
      // .pipe(debounceTime(1000))
      .subscribe(newValue => this.firstName = newValue);
    // throttle resize events
    this.resizeSub = fromEvent(window, 'resize').pipe(throttleTime(200))
      .subscribe(e => {
        console.log('resize event', e);
        this.firstName += '*';

        this.model.user = 'aaaa'
      });
  }
  // ngDoCheck() { console.log('change detection'); }
  ngOnChanges() { console.log('onchange'); }
  ngOnDestroy() {
    this.formCtrlSub.unsubscribe();
    this.resizeSub.unsubscribe();
  }
} 