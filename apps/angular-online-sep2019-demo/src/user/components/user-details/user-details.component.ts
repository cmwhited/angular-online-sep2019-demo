import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { isNullOrUndefined } from 'util';

import { User, CommentInput, Comment } from '@angular-online-sep2019-demo/api-interfaces';
import { UserCommentDialogComponent } from '../user-comment-dialog/user-comment-dialog.component';

@Component({
  selector: 'angular-online-sep2019-demo-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsComponent {
  private _user: User;

  @Input() set user(user: User) {
    this._user = user;
  }
  get user(): User {
    return this._user;
  }

  @Output() addComment = new EventEmitter<CommentInput>();

  constructor(private readonly dialog: MatDialog) {}

  onAddComment() {
    const data: Comment = {
      id: null,
      userId: this.user.id,
      comment: null,
    };
    this.dialog
      .open(UserCommentDialogComponent, {
        width: '55%',
        data,
      })
      .afterClosed()
      .subscribe((result: CommentInput | undefined) => {
        if (!isNullOrUndefined(result)) {
          this.addComment.emit(result);
        }
      });
  }
}
