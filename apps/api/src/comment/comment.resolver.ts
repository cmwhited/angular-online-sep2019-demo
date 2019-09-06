import { Logger } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Comment as CommentType, CommentInput } from '@angular-online-sep2019-demo/api-interfaces';
import { Comment } from './interfaces';
import { CommentService } from './comment.service';

@Resolver('Comment')
export class CommentResolver {
  private readonly logger: Logger = new Logger(CommentResolver.name);

  constructor(private readonly commentService: CommentService) {}

  @Mutation('addComment')
  addComment(@Args('comment') commentInput: CommentInput): Observable<CommentType> {
    this.logger.log('addComment() - add a new user comment');
    const comment: Comment = commentInput as Comment;
    return this.commentService.create(comment).pipe(map((created: Comment) => created as CommentType));
  }

  @Mutation('removeComment')
  removeComment(@Args('id') id: number): Observable<string> {
    this.logger.log(`removeComment() - delete comment record with id ${id}`);
    return this.commentService.delete(id).pipe(
      map(() => of('Success')),
      catchError(err => of(err)),
    );
  }
}
