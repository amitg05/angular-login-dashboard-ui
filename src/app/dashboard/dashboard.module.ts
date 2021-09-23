import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonComponent } from './common/common.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    CommonComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
