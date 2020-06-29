import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss']
})
export class ParentComponentComponent {

//在这里定义和获取要传递的值,例如：
public name = '我是发哥';

//接收子组件传值的方法(参数自定义:就是子组件传过来的值)
getDataFromChild (childData) { 
    alert(childData)
}

}
