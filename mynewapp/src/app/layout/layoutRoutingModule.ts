import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from '../pages/login/login.component';

const routes: Routes=[{
    path:'app',
    children:[
        {
            path:'test',
            component:LayoutComponent
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
   })

export class LayoutRoutingModule {
}
