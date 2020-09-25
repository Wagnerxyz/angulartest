import { Component, OnInit, NgZone, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { date } from 'faker';

@Component({
  selector: 'RefValueObj-child',
  template: `
    <p>child value Config: {{config.position}}!</p>
    <p>child value Config1 : {{config1.position}}!</p>
    state value:{{state}}
    <br>
    {{runChangeDetection}}
    <button (click)="onClick()">child 空点击触发检测 change detection  </button>
    <button (click)="changeModelInZone()">changeModelInZone</button>
  `
  , changeDetection: ChangeDetectionStrategy.Default
})
export class RefValueObjChildComponent {
  @Input() config;

  @Input() state: number = 0;
  config1 = {
    position: 'top'
  };

  interval: any;
  constructor(private zone: NgZone, private cd: ChangeDetectorRef) { }
  ngOnInit() {
    //setInterval在 onpush 不会触发检测
    this.interval = setInterval(() => {
      this.cantModifyParent();
      this.config1 = {
        position: 'top'
      };;
      this.config = {
        position: 'top'
      };;
      console.log('setInterval change value done');
       this.cd.markForCheck();
    }, 1500);
    console.log('child ngOnInit');
  }

  //因为这是新对象了，怎么变都不是父对象绑定的那个obj了
  private cantModifyParent() {
    this.config = { position: Date.now().toString() };
    ++this.state;
  }

  //改的就是父对象绑定的obj
  private canModifyParent() {
    this.config.position =new Date().toTimeString();
  }
  //runOutsideAngular() 使你的上下文不会触发Angular跟踪变化。 如果你想继续跟踪变化，使用run()方法即可让Angular重新跟踪变化
  //Onpush时这么弄，可以触发检测
  public changeModelInZone() {
    this.zone.run(() =>
      setTimeout(() => {
        console.log('zone.run changeModelInZone');
        this.config.position = 'changeModelInZone';
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

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}