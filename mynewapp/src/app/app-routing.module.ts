import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { BoardComponent } from './pages/board/board.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { AuthenticationComponent } from './authentication/authentication.component';

const routes: Routes = [
  {
    path:'',
    component: AuthenticationComponent
  },
  {
    path:'app',
    component: LayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
