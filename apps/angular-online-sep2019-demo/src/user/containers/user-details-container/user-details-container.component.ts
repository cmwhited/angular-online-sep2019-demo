import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApolloQueryResult } from 'apollo-client';
import { GraphQLError } from 'graphql';

import { User, CommentInput } from '@angular-online-sep2019-demo/api-interfaces';
import { UserQueryResponse, UserQuery, AddCommentMutation } from '../../services';

@Component({
  selector: 'angular-online-sep2019-demo-user-details-container',
  templateUrl: './user-details-container.component.html',
  styleUrls: ['./user-details-container.component.scss'],
})
export class UserDetailsContainerComponent implements OnInit {
  result$: Observable<ApolloQueryResult<UserQueryResponse>>;
  user$: Observable<User>;
  errors$: Observable<ReadonlyArray<GraphQLError>>;
  loading$: Observable<boolean>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly snackBar: MatSnackBar,
    private readonly userQuery: UserQuery,
    private readonly addCommentMutation: AddCommentMutation,
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

  onAddComment(comment: CommentInput) {
    this.addCommentMutation.mutate({ comment }).subscribe(() => {
      this.snackBar.open('Comment Added', 'Yahtzee', {
        duration: 2000,
      });
    });
  }
}
