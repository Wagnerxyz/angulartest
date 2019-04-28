import { Component, OnInit, NgZone, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <h1>child value Config: {{config.position}}!</h1>
    <p>child value Config1 : {{config1.position}}!</p>
    state value:{{state}}
    <br>
    {{runChangeDetection}}
    <button (click)="onClick()">Empty ClickTrigger child change detection </button>
  `
  , changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelloComponent {
  @Input()
  config;

  @Input()
  state: number = 0;
  config1 = {
    position: 'top'
  };
  constructor(private zone: NgZone) { }
  ngOnInit() {
    // setInterval(() => {
    //   //still not work onpush
    //   this.config = { position: 'changeModelInZone' }

    //   //  this.config.position = 'left';
    //   //  this.config1.position = 'left';
    //   ++this.state;
    //   console.log('settimeout change value done');
    // }, 2000);
    console.log('child ngOnInit');
  }

  public changeModelInZone() {
    this.zone.run(() =>
      setTimeout(() => {
        console.log('changeModelInZone');
        this.config = { position: 'changeModelInZone' }
      }, 1000)
    )
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