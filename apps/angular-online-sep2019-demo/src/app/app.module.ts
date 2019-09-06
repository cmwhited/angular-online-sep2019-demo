import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { UiModule } from '@angular-online-sep2019-demo/ui';

import { AppComponent } from './app.component';
import { routes } from './app-routes';
import { GraphQLModule } from './graphql.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, UiModule, RouterModule.forRoot(routes), GraphQLModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
