import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default

})
export class TwoWayBindingComponent implements OnInit {

  constructor() { }
  fontSizePx = 16;
  ngOnInit() {
  }


  //#region 看changedetect
  _username = 'wagner';

  public get username(): string {
    console.log('getter:' + this._username);

    return this._username;
  }

  public set username(v: string) {
    console.log('setter:' + v);

    this._username = v;
  }
  //#endregion


}
