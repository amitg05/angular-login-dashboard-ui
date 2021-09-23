import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonComponent } from './common/common.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: CommonComponent, children: [
    {path: 'dashboard', component: DashboardComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
