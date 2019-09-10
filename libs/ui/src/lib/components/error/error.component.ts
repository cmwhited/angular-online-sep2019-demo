import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'angular-online-sep2019-demo-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorComponent {
  private _message: string;
  private _err: any | Error | string;
  private _errors: any[];

  @Input() set message(msg: string) {
    this._message = msg;
  }
  get message(): string {
    return this._message;
  }

  @Input() set error(err: any | Error | string) {
    this._err = err;
  }
  get error(): any | Error | string {
    return this._err;
  }

  @Input() set errors(errors: any[]) {
    this._errors = errors;
  }
  get errors(): any[] {
    return this._errors;
  }

  constructor() {}
}
