import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';

import { UserInput, ApiResponse } from '@angular-online-sep2019-demo/api-interfaces';

export interface UpdateUserMutationVariables {
  user: UserInput;
}

export interface UpdateUserMutationResponse {
  updateUser: ApiResponse;
}

@Injectable()
export class UpdateUserMutation extends Mutation<UpdateUserMutationResponse, UpdateUserMutationVariables> {
  document = gql`
    mutation UpdateUser($user: UserInput!) {
      updateUser(user: $user) {
        message
      }
    }
  `;
}
