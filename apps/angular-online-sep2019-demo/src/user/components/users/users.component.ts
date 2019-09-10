import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { User } from '@angular-online-sep2019-demo/api-interfaces';

@Component({
  selector: 'angular-online-sep2019-demo-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent {
  private _usersTableDataSource: MatTableDataSource<User> = new MatTableDataSource<User>([]);

  @Input() set users(users: User[]) {
    this._usersTableDataSource.data = users || [];
  }

  get dataSource(): MatTableDataSource<User> {
    return this._usersTableDataSource;
  }
  get displayColumns(): string[] {
    return ['name', 'email', 'role', 'age', 'info'];
  }

  constructor() {}
}
