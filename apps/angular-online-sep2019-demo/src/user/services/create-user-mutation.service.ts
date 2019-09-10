import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';

import { User, UserInput } from '@angular-online-sep2019-demo/api-interfaces';

export interface CreateUserMutationVariables {
  user: UserInput;
}

export interface CreateUserMutationResponse {
  createUser: User;
}

@Injectable()
export class CreateUserMutation extends Mutation<CreateUserMutationResponse, CreateUserMutationVariables> {
  document = gql`
    mutation CreateUser($user: UserInput!) {
      createUser(user: $user) {
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
