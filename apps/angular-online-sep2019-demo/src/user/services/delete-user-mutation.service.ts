import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';

export interface DeleteUserMutationVariables {
  id: number;
}

export interface DeleteUserMutationResponse {
  deleteUser: string;
}

@Injectable()
export class DeleteUserMutation extends Mutation<DeleteUserMutationResponse, DeleteUserMutationVariables> {
  document = gql`
    mutation DeleteUser($id: Int!) {
      deleteUser(id: $id) {
        message
      }
    }
  `;
}
