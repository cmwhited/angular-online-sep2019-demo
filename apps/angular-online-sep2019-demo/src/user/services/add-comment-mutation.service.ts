import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';

import { Comment, CommentInput } from '@angular-online-sep2019-demo/api-interfaces';

export interface AddCommentMutationVariables {
  comment: CommentInput;
}

export interface AddCommentMutationResponse {
  addComment: Comment;
}

@Injectable()
export class AddCommentMutation extends Mutation<AddCommentMutationResponse, AddCommentMutationVariables> {
  document = gql`
    mutation AddComment($comment: CommentInput!) {
      addComment(comment: $comment) {
        id
        userId
        comment
      }
    }
  `;
}
