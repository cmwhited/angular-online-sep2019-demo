import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { FetchResult } from 'apollo-link';

import { CreateUserMutation, CreateUserMutationResponse } from '../../services';
import { UserInput } from '@angular-online-sep2019-demo/api-interfaces';

@Component({
  selector: 'angular-online-sep2019-demo-create-user-container',
  templateUrl: './create-user-container.component.html',
  styleUrls: ['./create-user-container.component.scss'],
})
export class CreateUserContainerComponent {
  roles$: Observable<string[]> = of(['USER', 'ADMIN']);

  constructor(private readonly router: Router, private readonly createUserMutation: CreateUserMutation) {}

  onCreateUser(user: UserInput) {
    this.createUserMutation
      .mutate({ user })
      .pipe(map((result: FetchResult<CreateUserMutationResponse>) => result.data))
      .subscribe((response: CreateUserMutationResponse) => {
        this.router.navigate(['/users/details', response.createUser.id]);
      });
  }
}
