import { Logger, Inject } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Parent, ResolveProperty, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { User as UserType, UserInput, Comment as CommentType, ApiResponse } from '@angular-online-sep2019-demo/api-interfaces';
import { User } from './interfaces';
import { Comment } from '../comment/interfaces';
import { UserService } from './user.service';
import { CommentService } from '../comment/comment.service';

@Resolver('User')
export class UserResolver {
  private readonly logger: Logger = new Logger(UserResolver.name);

  constructor(
    private readonly userService: UserService,
    private readonly commentService: CommentService,
    @Inject('PUB_SUB') private readonly pubSub: PubSub,
  ) {}

  @Query('user')
  user(@Args('id') id: number): Observable<UserType> {
    this.logger.log(`user() - retrieve a user by its PK id ${id}`);
    return this.userService.find(id).pipe(map((user: User) => user as UserType));
  }

  @Query('users')
  users(): Observable<UserType[]> {
    this.logger.log('users() - retrieve a list of users');
    return this.userService.findAll().pipe(map((users: User[]) => users.map((user: User) => user as UserType)));
  }

  @Mutation('createUser')
  createUser(@Args('user') userInput: UserInput): Observable<UserType> {
    this.logger.log('createUser() - create a new user record');
    const user: User = userInput as User;
    return this.userService.create(user).pipe(map((created: User) => created as UserType));
  }

  @Mutation('updateUser')
  updateUser(@Args('user') userInput: UserInput): Observable<ApiResponse> {
    this.logger.log(`updateUser() - update user record with id ${userInput.id}`);
    const user: User = userInput as User;
    return this.userService.update(user).pipe(
      map((message: string) => {
        const resp: ApiResponse = { message };
        return resp;
      }),
      catchError(err => {
        const resp: ApiResponse = {
          message: err,
        };
        return of(resp);
      }),
    );
  }

  @Mutation('deleteUser')
  deleteUser(@Args('id') id: number): Observable<ApiResponse> {
    this.logger.log(`deleteUser() - delete user record with id ${id}`);
    return this.userService.delete(id).pipe(
      map((message: string) => {
        const resp: ApiResponse = { message };
        return resp;
      }),
      catchError(err => {
        const resp: ApiResponse = {
          message: err,
        };
        return of(resp);
      }),
    );
  }

  @ResolveProperty('comments')
  getUserComments(@Parent() user: UserType): Observable<CommentType[]> {
    const { id } = user;
    return this.commentService
      .findAllByUser(id)
      .pipe(map((comments: Comment[]) => comments.map((comment: Comment) => comment as CommentType)));
  }

  @Subscription('commentAdded', {
    filter: (payload, variables) => payload.commentAdded.userId === variables.userId,
  })
  commentAdded() {
    return this.pubSub.asyncIterator('commentAdded');
  }
}
