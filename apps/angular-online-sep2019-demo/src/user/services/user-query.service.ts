import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';

import { User } from '@angular-online-sep2019-demo/api-interfaces';

export interface UserQueryResponse {
  user: User;
}

export interface UserQueryVariables {
  id: number;
}

@Injectable()
export class UserQuery extends Query<UserQueryResponse, UserQueryVariables> {
  document = gql`
    query User($id: Int!) {
      user(id: $id) {
        id
        name
        email
        role
        age
        profilePicUrl
        comments {
          id
          userId
          comment
        }
      }
    }
  `;
}
