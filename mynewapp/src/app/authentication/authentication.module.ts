import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[AuthenticationComponent],
  declarations: [AuthenticationComponent]

})
export class AuthenticationModule { }
