import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'users/list',
  },
  {
    path: 'users',
    loadChildren: () => import('../user/user.module').then(m => m.UserModule),
  },
];
