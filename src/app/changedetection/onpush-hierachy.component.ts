//our root app component
import { Component, NgModule, ChangeDetectionStrategy, ChangeDetectorRef, Input, VERSION } from '@angular/core'


@Component({
  selector: 'onpushhierachychild',
  template: `<h2>The name is: {{o.name}}</h2>
              <p>o.id值为:  {{o.id}}</p>
              `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnpushHierachyChildComponent {

  @Input() o;
  //普通属性 绑定的是这个
  id;

  constructor(private cd: ChangeDetectorRef) { }

  //如果Default 检测，不需要这个手动触发。
  ngDoCheck() {
    console.log('child ngDoCheck');

    if (this.id !== this.o.id) {
      this.cd.markForCheck();//detectChanges也行
      this.id = this.o.id;
      console.log('child markForCheck');

    }
  }
}



@Component({
  template: `
  <p>OnPush不会阻拦这个组件被检测扫描到。只会改变这个组件触发检测的情形。</p>
  <h1> {{msg}}</h1>
  <onpushhierachychild [o]="o"></onpushhierachychild>
`,
  changeDetection: ChangeDetectionStrategy.Default//父组件改成OnPush setinterval就失效了

})
export class OnpushHierachyComponent {

  o = { id: 1, name: 'John' };
  count: number = 0;
  msg: string;

  ngOnInit() {
    setInterval(() => {
      this.o.id = this.o.id + 1;
      this.o.name = 'Jane';
      this.msg = `父组件Interval执行${++this.count}次`//OnPush不更新 因为setInterval此模式下，无法触发检测
      console.log(this.msg);

    }, 2000);
  }
}



