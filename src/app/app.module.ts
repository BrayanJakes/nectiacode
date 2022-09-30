import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './components/login/login.component';

import { AppComponent } from './app.component';

import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'dev-2yvwk7ce.us.auth0.com',
      clientId: 'frgKRSMj044tCF5bStacebz0HcqxJj8a',
      cacheLocation: 'localstorage',
      useRefreshTokens: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
