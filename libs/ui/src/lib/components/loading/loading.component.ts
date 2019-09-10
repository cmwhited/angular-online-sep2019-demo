import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'angular-online-sep2019-demo-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingComponent {
  private _message = 'Loading...';
  private _color = 'primary';

  @Input() set message(msg: string) {
    if (!isNullOrUndefined(msg) && this._message !== msg) {
      this._message = msg;
    }
  }
  get message(): string {
    return this._message;
  }

  @Input() set color(color: string) {
    if (!isNullOrUndefined(color) && this._color !== color) {
      this._color = color;
    }
  }
  get color(): string {
    return this._color;
  }

  constructor() {}
}
