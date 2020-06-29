import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit {
  @Input() getDataFromChild; //getDataFromChild方法
  public userInfo = "这是子组件的数据";

  constructor() { }

  ngOnInit() { }

  sendParent() {
    this.getDataFromChild(this.userInfo)
  }
}
