import { Routes } from '@angular/router';

import {
  UsersContainerComponent,
  CreateUserContainerComponent,
  UpdateUserContainerComponent,
  UserDetailsContainerComponent,
  DeleteUserContainerComponent,
} from './containers';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list',
  },
  {
    path: 'list',
    pathMatch: 'full',
    component: UsersContainerComponent,
  },
  {
    path: 'create',
    pathMatch: 'full',
    component: CreateUserContainerComponent,
  },
  {
    path: 'update/:userId',
    pathMatch: 'full',
    component: UpdateUserContainerComponent,
  },
  {
    path: 'details/:userId',
    pathMatch: 'full',
    component: UserDetailsContainerComponent,
  },
  {
    path: 'delete/:userId',
    pathMatch: 'full',
    component: DeleteUserContainerComponent,
  },
];
