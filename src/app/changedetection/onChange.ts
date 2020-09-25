import { Component, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription, fromEvent } from 'rxjs';
import { debounceTime, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'onchange,oncheck',
  template: `<input type="text" [(ngModel)]="ttt" >
    <br>firstName:{{firstName}}
    <br>model.user:{{model.user}}
    <footer>Angular version: {{angularVersion}}</footer>`,
  changeDetection: ChangeDetectionStrategy.Default
})
export class OnChangeComponent implements OnChanges {
  angularVersion: number = 7;
  @Input() firstName = 'Name';
  @Input() aaa = { 'user': 'wagner' };
  firstNameControl = new FormControl();
  formCtrlSub: Subscription;
  resizeSub: Subscription;
  ttt:string ="wwwww";
  model = { 'user': 'wagner', 'sex': 'male' }

  constructor() { console.clear(); }

  ngOnInit() {
    // setInterval(() => {
    //  // this.firstName='wa'
    //   //this.aaa='wa'
    // }, 2000);

    // debounce keystroke events
    // this.formCtrlSub = this.firstNameControl.valueChanges
    //   .pipe(debounceTime(1000))
    //   .subscribe(newValue => this.firstName = newValue);

    // // throttle resize events
    // this.resizeSub = fromEvent(window, 'resize').pipe(throttleTime(200))
    //   .subscribe(e => {
    //     this.firstName = new Date().toDateString();
    //     this.angularVersion++;
    //     console.log(this.firstName);
    //     console.log('resize event', e);
    //     this.aaa = { 'user': new Date().toDateString() };
    //     this.model.user = 'aaaa'
    //   });
  }
  ngDoCheck() { console.log('ngDoCheck'); }
  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      const chng = changes[propName];
      const cur  = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      console.log('wwww');
      
    }
  }
  ngOnDestroy() {
    this.formCtrlSub.unsubscribe();
    this.resizeSub.unsubscribe();
  }
} 