import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { isNullOrUndefined } from 'util';

import { User, UserInput } from '@angular-online-sep2019-demo/api-interfaces';

@Component({
  selector: 'angular-online-sep2019-demo-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserFormComponent implements OnInit {
  private _message = 'Create User';
  private _user: User;
  private _roles: string[];

  formGroup: FormGroup;

  @Input() set message(msg: string) {
    if (!isNullOrUndefined(msg) && this._message !== msg) {
      this._message = msg;
    }
  }
  get message(): string {
    return this._message;
  }

  @Input() set user(user: User) {
    if (!isNullOrUndefined(user) && (isNullOrUndefined(this._user) || this._user !== user)) {
      this._user = user;
      this._hydrateFormGroup(user);
    }
  }
  get user(): User {
    return this._user;
  }

  @Input() set roles(roles: string[]) {
    this._roles = roles;
  }
  get roles(): string[] {
    return this._roles;
  }

  @Output() saveUser = new EventEmitter<UserInput>();

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.fb.group(
      {
        id: new FormControl(null, null),
        name: new FormControl(null, Validators.required),
        email: new FormControl(null, Validators.compose([Validators.required, Validators.email])),
        role: new FormControl(null, Validators.required),
        age: new FormControl(null, Validators.required),
        profilePicUrl: new FormControl(null, null),
      },
      { updateOn: 'blur' },
    );
  }

  onSubmit(user: UserInput) {
    this.saveUser.emit(user);
  }

  /**
   * Hydrate the user form group instance with the user information passed
   * into the component
   * @param user the user being updated
   */
  private _hydrateFormGroup(user: User) {
    if (!isNullOrUndefined(this.formGroup)) {
      const id: number = !isNullOrUndefined(user) ? user.id : null;
      const name: string = !isNullOrUndefined(user) ? user.name : null;
      const email: string = !isNullOrUndefined(user) ? user.email : null;
      const age: number = !isNullOrUndefined(user) ? user.age : null;
      const profilePicUrl: string = !isNullOrUndefined(user) ? user.profilePicUrl : null;
      const role: string = !isNullOrUndefined(user) ? user.role : null;
      this.formGroup.patchValue({
        id,
        name,
        email,
        age,
        profilePicUrl,
        role,
      });
    }
  }
}
