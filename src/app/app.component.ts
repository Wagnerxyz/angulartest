import { Component, ChangeDetectionStrategy, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ParentComponentComponent } from './syntax/childtoparent/parent-component/parent-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'my test';
  @ViewChild('container', { static: true, read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) { }
  ngOnInit() {
    this.entry.clear();
    const factory = this.resolver.resolveComponentFactory(ParentComponentComponent);
    const componentRef = this.entry.createComponent(factory);
    // componentRef.instance.name = this.name;
  }
}
