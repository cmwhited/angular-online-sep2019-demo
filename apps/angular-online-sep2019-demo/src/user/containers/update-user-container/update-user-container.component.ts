import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApolloQueryResult } from 'apollo-client';
import { GraphQLError } from 'graphql';

import { User, UserInput } from '@angular-online-sep2019-demo/api-interfaces';
import { UserQueryResponse, UserQuery, UpdateUserMutation } from '../../services';

@Component({
  selector: 'angular-online-sep2019-demo-update-user-container',
  templateUrl: './update-user-container.component.html',
  styleUrls: ['./update-user-container.component.scss'],
})
export class UpdateUserContainerComponent implements OnInit {
  result$: Observable<ApolloQueryResult<UserQueryResponse>>;
  user$: Observable<User>;
  errors$: Observable<ReadonlyArray<GraphQLError>>;
  loading$: Observable<boolean>;
  roles$: Observable<string[]> = of(['USER', 'ADMIN']);

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly userQuery: UserQuery,
    private readonly updateUserMutation: UpdateUserMutation,
  ) {}

  ngOnInit() {
    this.result$ = this.route.paramMap.pipe(
      map((params: ParamMap) => params.get('userId')),
      switchMap((userId: string) => this.userQuery.watch({ id: Number(userId) }).valueChanges),
    );
    this.user$ = this.result$.pipe(map((result: ApolloQueryResult<UserQueryResponse>) => result.data.user));
    this.errors$ = this.result$.pipe(map((result: ApolloQueryResult<UserQueryResponse>) => result.errors));
    this.loading$ = this.result$.pipe(map((result: ApolloQueryResult<UserQueryResponse>) => result.loading));
  }

  onUpdateUser(user: UserInput) {
    this.updateUserMutation.mutate({ user }).subscribe(() => {
      this.router.navigate(['/users/details', user.id]);
    });
  }
}
