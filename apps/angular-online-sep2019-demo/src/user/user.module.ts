import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { UiModule } from '@angular-online-sep2019-demo/ui';

import { services } from './services';
import { containers } from './containers';
import { components, entryComponents } from './components';
import { routes } from './user-routes';

@NgModule({
  declarations: [...containers, ...components],
  entryComponents: [...entryComponents],
  imports: [CommonModule, ReactiveFormsModule, UiModule, RouterModule.forChild(routes)],
  providers: [...services],
})
export class UserModule {}
