import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { AsideMenuComponent } from './components/aside-menu/aside-menu.component';
import { LayoutComponent } from './components/layout/layout.component';
import { StartComponent } from './components/start/start.component';



@NgModule({
  declarations: [
    HeaderComponent,
    AsideMenuComponent,
    LayoutComponent,
    StartComponent
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
