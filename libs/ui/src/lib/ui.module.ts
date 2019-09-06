import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const themeModules: any[] = [MatToolbarModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule];

@NgModule({
  imports: [...themeModules],
  exports: [...themeModules],
})
export class UiModule {}
