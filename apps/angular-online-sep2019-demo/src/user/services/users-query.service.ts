import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';

import { User } from '@angular-online-sep2019-demo/api-interfaces';

export interface UsersQueryResponse {
  users: User[];
}

@Injectable()
export class UsersQuery extends Query<UsersQueryResponse> {
  document = gql`
    query Users {
      users {
        id
        name
        email
        role
        age
        profilePicUrl
      }
    }
  `;
}
