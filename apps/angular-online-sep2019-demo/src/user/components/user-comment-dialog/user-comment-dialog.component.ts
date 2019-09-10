import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { CommentInput, Comment } from '@angular-online-sep2019-demo/api-interfaces';

@Component({
  selector: 'angular-online-sep2019-demo-user-comment-dialog',
  templateUrl: './user-comment-dialog.component.html',
  styleUrls: ['./user-comment-dialog.component.scss'],
})
export class UserCommentDialogComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly dialog: MatDialogRef<UserCommentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private readonly data: Comment,
  ) {}

  ngOnInit() {
    this.formGroup = this.fb.group(
      {
        id: new FormControl(null, null),
        userId: new FormControl(this.data.userId, Validators.required),
        comment: new FormControl(null, Validators.required),
      },
      { updateOn: 'change' },
    );
  }

  onClose() {
    this.dialog.close();
  }

  onSaveComment(comment: CommentInput) {
    this.dialog.close(comment);
  }
}
