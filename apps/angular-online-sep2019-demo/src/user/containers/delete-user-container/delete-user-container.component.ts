import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApolloQueryResult } from 'apollo-client';
import { GraphQLError } from 'graphql';

import { User } from '@angular-online-sep2019-demo/api-interfaces';
import { UserQueryResponse, UserQuery, DeleteUserMutation } from '../../services';

@Component({
  selector: 'angular-online-sep2019-demo-delete-user-container',
  templateUrl: './delete-user-container.component.html',
  styleUrls: ['./delete-user-container.component.scss'],
})
export class DeleteUserContainerComponent implements OnInit {
  result$: Observable<ApolloQueryResult<UserQueryResponse>>;
  user$: Observable<User>;
  errors$: Observable<ReadonlyArray<GraphQLError>>;
  loading$: Observable<boolean>;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly snackbar: MatSnackBar,
    private readonly userQuery: UserQuery,
    private readonly deleteUserMutation: DeleteUserMutation,
  ) {}

  ngOnInit() {
    this.result$ = this.route.paramMap.pipe(
      map((params: ParamMap) => params.get('userId')),
      switchMap((userId: string) => this.userQuery.watch({ id: Number(userId) }, { fetchPolicy: 'network-only' }).valueChanges),
    );
    this.user$ = this.result$.pipe(map((result: ApolloQueryResult<UserQueryResponse>) => result.data.user));
    this.errors$ = this.result$.pipe(map((result: ApolloQueryResult<UserQueryResponse>) => result.errors));
    this.loading$ = this.result$.pipe(map((result: ApolloQueryResult<UserQueryResponse>) => result.loading));
  }

  onDeleteUser(user: User) {
    this.deleteUserMutation.mutate({ id: user.id }).subscribe(() => {
      this.snackbar.open(`User ${user.name} has been deleted`, 'Whomp', {
        duration: 2000,
      });
      this.router.navigate(['/users/list']);
    });
  }
}
