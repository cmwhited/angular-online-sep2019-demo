import { UsersQuery } from './users-query.service';
import { UserQuery } from './user-query.service';
import { CreateUserMutation } from './create-user-mutation.service';
import { UpdateUserMutation } from './update-user-mutation.service';
import { DeleteUserMutation } from './delete-user-mutation.service';
import { AddCommentMutation } from './add-comment-mutation.service';

export const services: any[] = [UsersQuery, UserQuery, CreateUserMutation, UpdateUserMutation, DeleteUserMutation, AddCommentMutation];

export * from './users-query.service';
export * from './user-query.service';
export * from './create-user-mutation.service';
export * from './update-user-mutation.service';
export * from './delete-user-mutation.service';
export * from './add-comment-mutation.service';
