import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SettingsComponent } from './settings/settings.component';
import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AdminGuard } from '../services/authguard/authguard/admin.guard';
import {MatButtonModule} from '@angular/material/button';

let routing=RouterModule.forChild(
  [
    {
      path:"admin",component:AdminComponent,/*data: { roles: ['admin']},*/
      children:[
        {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
        {path: 'dashboard', component: DashboardComponent,canActivate:[AdminGuard]},
        {path: 'statistics', component: StatisticsComponent},
        {
          path: 'coupons',
          loadChildren: () => import('../coupons/coupons.module').then(m => m.CouponsModule)
        },
        {path: 'settings', component: SettingsComponent},
        {
          path: 'airport',
          loadChildren: () => import('../airport/airport.module').then(m => m.AirportModule)
        },
        {
          path: 'flight',
          loadChildren: () => import('../flight/flight.module').then(m => m.FlightModule)
        },
        {
          path: 'schedule',
          loadChildren: () => import('../schedule/schedule.module').then(m => m.ScheduleModule)
        },
      ]
    }
  ]
)
@NgModule({
  imports: [routing,BrowserModule,HttpClientModule,MatButtonModule],
  exports: [SidenavComponent,AdminComponent,],
  declarations: [
    SublevelMenuComponent,SidenavComponent,AdminComponent,
  ],
  providers: [],
})

export class KrupalAdminModule { }
