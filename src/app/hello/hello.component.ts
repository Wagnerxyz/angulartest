import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <h1>Hello {{config.position}}!</h1>
    <p>Config1 {{config1.position}}!</p>
    stat:{{state}}
    {{runChangeDetection}}
    <button (click)="onClick()">Trigger change detection child</button>
  `
  // , changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelloComponent {
  @Input()
  config;

  state: number = 0;
  config1 = {
    position: 'top'
  };

  ngOnInit() {
    setTimeout(() => {
       this.config.position = 'left';
       this.config1.position = 'left';
      ++this.state;
      // this.config = { position: 'wwww' }
      // this.config1 = { position: 'wwww' }
      console.log('done');

    }, 3000);
    console.log('ok');

  }

  get runChangeDetection() {
    console.log('Checking the view');
    return true;
  }

  onClick() {
    // this.config.position = 'bottom';
    // this.config = {
    //   position: 'wwww'
    // }
  }
}