import { Component, Input, Output, EventEmitter } from '@angular/core';
import { isNullOrUndefined } from 'util';

import { User } from '@angular-online-sep2019-demo/api-interfaces';

@Component({
  selector: 'angular-online-sep2019-demo-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss'],
})
export class DeleteUserComponent {
  private _user: User;

  @Input() set user(user: User) {
    if (!isNullOrUndefined(user)) {
      this._user = user;
    }
  }
  get user(): User {
    return this._user;
  }

  @Output() deleteUser = new EventEmitter<User>();

  constructor() {}

  onDeleteUser() {
    this.deleteUser.emit(this.user);
  }
}
