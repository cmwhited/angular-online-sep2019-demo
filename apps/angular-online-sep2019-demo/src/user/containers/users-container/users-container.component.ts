import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApolloQueryResult } from 'apollo-client';
import { GraphQLError } from 'graphql';

import { User } from '@angular-online-sep2019-demo/api-interfaces';
import { UsersQueryResponse, UsersQuery } from '../../services';

@Component({
  selector: 'angular-online-sep2019-demo-users-container',
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.scss'],
})
export class UsersContainerComponent implements OnInit {
  result$: Observable<ApolloQueryResult<UsersQueryResponse>>;
  users$: Observable<User[]>;
  errors$: Observable<ReadonlyArray<GraphQLError>>;
  loading$: Observable<boolean>;

  constructor(private readonly usersQuery: UsersQuery) {}

  ngOnInit() {
    this.result$ = this.usersQuery.watch({}, { fetchPolicy: 'network-only' }).valueChanges;
    this.users$ = this.result$.pipe(map((result: ApolloQueryResult<UsersQueryResponse>) => result.data.users));
    this.errors$ = this.result$.pipe(map((result: ApolloQueryResult<UsersQueryResponse>) => result.errors));
    this.loading$ = this.result$.pipe(map((result: ApolloQueryResult<UsersQueryResponse>) => result.loading));
  }
}
