import { Component } from '@angular/core';
import { of, BehaviorSubject, interval } from 'rxjs';
import { refCount, publishReplay, share, shareReplay, map } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  template: `
    <h2>Stream with an initial value (not shared)</h2>  
    <p>
      catName$ is not shared, this means that for every async pipe, 
      the functionality to calculate catname will get executed again
    </p>
    <ul>
      <li>First catName = {{catName$|async}}</li>
      <li>Second catName = {{catName$|async}}</li>
    </ul>
    <p>As we can see, both expressions get rendered correctly</p>

    <h2>Stream with an initial value (shared)</h2>  
    <p>
      dogName$ is shared, this means that for all async pipes, 
      the functionality will only get executed once
    </p>
    <ul>
      <li>First dogName = {{dogName$|async}}</li>
      <li>Second dogName = {{dogName$|async}}</li>
    </ul>
    <p>As we can see, only the first expression gets rendered correctly</p>
    <p>
      Here is why: the share() will publish the first value on the first subscription.
      The first async pipe wil subscribe and get the value 'Pluto'. The second async pipe however will subscribe after
      that value has <b>already been emitted</b> and therefore miss that value.
    </p>
    
    <h2>Solution: shareReplay()</h2>
    <p>
      horseName$ is shared, this means that for all async pipes, 
      the functionality will only get executed once
    </p>
    <ul>
      <li>First horseName = {{horseName$|async}}</li>
      <li>Second horseName = {{horseName$|async}}</li>
    </ul>
    <p>
      As we can see, both expressions get rendered correctly and the functionality is only executed once
    </p>
    <p>
      Here is why:shareReplay() will do a publishReplay().refcount() behind the scenes which keeps track of the last
      element in the stream. That way all async pipes have access to it.
    </p>
    <button (click)='sharelost()'>Share有可能漏消息，ShareReplay不会</button>
  `
})
export class ShareReplayTestComponent {

  cat$ = new BehaviorSubject({ name: 'Felix' });
  catName$ = this.cat$.pipe(map(item => item.name))

  dog$ = new BehaviorSubject({ name: 'Pluto' });
  dogName$ = this.dog$.pipe(map(item => item.name), share());

  horse$ = new BehaviorSubject({ name: 'Pegasus' });
  horseName$ = this.horse$.pipe(map(item => item.name), shareReplay(1));

  //https://www.sitepoint.com/delay-sleep-pause-wait/ 
  //js sleep helper method
  sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async sharelost(ms: any) {
    let a$ = interval(1000).pipe(share())
    a$.subscribe({ next: (v) => console.log('第一个订阅', v) });
    //这样很危险，如果订阅时间有差异那后面的订阅就拿不到前面的emit，所以要用shareReplay
    console.log('Taking a break...');
    await this.sleep(2000);
    console.log('2 seconds later');
    a$.subscribe({ next: (v) => console.log('第二个订阅', v) });
  }


  async  ngOnInit() {

    //#region publishReplay
    let a$ = of(1, 2, 3, 4, 5).pipe(
      publishReplay(3)
      , refCount())
    a$.subscribe({ next: (v) => console.log('observerA: ' + v) });
    console.log('Taking a break...');
    await this.sleep(3000);
    console.log('3 seconds later');

    //都打印3，4，5，因为publishReplay(3) 存三个结果
    a$.subscribe({ next: (v) => console.log('observerB: ' + v) });
    a$.subscribe({ next: (v) => console.log('observerC: ' + v) });



    //#region   share

  }

}
