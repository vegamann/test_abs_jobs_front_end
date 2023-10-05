import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from '../components/navbar/navbar.component';
import { Nav_barComponent } from './nav_bar/nav_bar.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Nav_barComponent,LayoutComponent]
})
export class LayoutModule { }
