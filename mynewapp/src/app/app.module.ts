import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BoardComponent } from './pages/board/board.component';
import { AuthenticationModule } from './authentication/authentication.module';

import { LayoutModule } from './layout/layout.module';
import { LayoutRoutingModule } from './layout/layoutRoutingModule';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    LayoutModule,
    LayoutRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
