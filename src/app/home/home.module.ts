import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { AsideMenuComponent } from './components/aside-menu/aside-menu.component';
import { LayoutComponent } from './components/layout/layout.component';



@NgModule({
  declarations: [
    HeaderComponent,
    AsideMenuComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    AsideMenuComponent,
    LayoutComponent
  ]
})
export class HomeModule { }
