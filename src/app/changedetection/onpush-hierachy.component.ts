//our root app component
import { Component, NgModule, ChangeDetectionStrategy, ChangeDetectorRef, Input, VERSION } from '@angular/core'

//基于这个改来的例子 https://indepth.dev/if-you-think-ngdocheck-means-your-component-is-being-checked-read-this-article/
@Component({
  selector: 'onpushhierachychild',
  template: `<p>子组件The name is: {{o.name}}</p>
              <p>子组件o.id值为:  {{o.id}}</p>
              <p>子组件msg值为:  {{msg}}</p>
              <cite>如果Default 检测，不需要ngDoCheck手动触发自己写判断逻辑。OnPush需要</cite>
              <blockquote>msg传入新引用，触发整个组件更新检测~即便o没传入新引用。想想源码 调用的detectChange()方法，很合理</blockquote>
              `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnpushHierachyChildComponent {

  @Input() o;
  @Input() msg; //msg传入新引用，触发整个组件更新检测~即便o没传入新引用。想想源码 调用的detectChange()方法，很合理
  oldId;

  constructor(private cd: ChangeDetectorRef) { }

  //如果Default 检测，不需要这个手动触发。OnPush，自己写判断逻辑。
  // ngDoCheck() {
  //   console.log('child ngDoCheck');

  //   if (this.oldId !== this.o.id) {
  //     this.cd.markForCheck();//detectChanges也行
  //     this.oldId = this.o.id;
  //     console.log('child markForCheck');
  //   }
  // }

}



@Component({
  template: `
  <p>变更检测Top->down，所以子组件OnPush，不会阻拦其父组件被检测扫描到。只会影响子组件触发检测的情形。</p>
  <h1> {{msg}}</h1>
  <onpushhierachychild [o]="obj" [msg]="msg"></onpushhierachychild>
`,
  changeDetection: ChangeDetectionStrategy.Default//父组件改成OnPush 父组件自己的setinterval不会触发检测更新，UI不变

})
export class OnpushHierachyComponent {

  obj = { id: 1, name: 'John' };
  count: number = 0;
  msg: string;
  myVar: any;
  ngOnInit() {
    this.myVar = setInterval(() => {
      this.obj.id = this.obj.id + 1;
      this.obj.name = 'Jane' + new Date().toTimeString();

      this.msg = `父组件Interval执行${++this.count}次`//改变引用。父组件OnPush不更新 因为setInterval此模式下，不是@Input绑定的 无法触发检测。
      console.log(this.msg);

    }, 2000);
  }
  ngOnDestroy() {
    clearInterval(this.myVar);
  }
}



