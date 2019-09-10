import { UsersContainerComponent } from './users-container/users-container.component';
import { CreateUserContainerComponent } from './create-user-container/create-user-container.component';
import { UpdateUserContainerComponent } from './update-user-container/update-user-container.component';
import { UserDetailsContainerComponent } from './user-details-container/user-details-container.component';
import { DeleteUserContainerComponent } from './delete-user-container/delete-user-container.component';

export const containers: any[] = [
  UsersContainerComponent,
  CreateUserContainerComponent,
  UpdateUserContainerComponent,
  UserDetailsContainerComponent,
  DeleteUserContainerComponent,
];

export * from './users-container/users-container.component';
export * from './create-user-container/create-user-container.component';
export * from './update-user-container/update-user-container.component';
export * from './user-details-container/user-details-container.component';
export * from './delete-user-container/delete-user-container.component';
