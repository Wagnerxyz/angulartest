//our root app component
import { Component, NgModule, ChangeDetectionStrategy, ChangeDetectorRef, Input, VERSION } from '@angular/core'


@Component({
  selector: 'a-comp',
  template: `<h2>The name is: {{o.name}}</h2><p>o.id:  {{o.id}}</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AComponent {
  @Input()
  o;
  id;

  constructor(private cd: ChangeDetectorRef) { }

  ngDoCheck() {
    console.log('docheck');

    if (this.id !== this.o.id) {
        this.cd.markForCheck();
      this.id = this.o.id;
    }
  }
}



@Component({
  selector: 'app-ngdocheck',
  template: `
  <h1>Hello {{name}}</h1>
  <a-comp [o]="o"></a-comp>
`,
})
export class NgdocheckComponent {

  name = `Angular! v${VERSION.full}`;
  o = { id: 1, name: 'John' };

  ngOnInit() {
    setTimeout(() => {
      this.o.id = 2;
      this.o.name = 'Jane';
    }, 2000);
  }
}



