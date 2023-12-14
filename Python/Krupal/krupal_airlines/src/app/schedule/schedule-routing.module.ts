import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddScheduleComponent } from './add-schedule/add-schedule.component';
import { ScheduleComponent } from './schedule.component';
import { EditScheduleComponent } from './editSchedule/editSchedule.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';




const routes: Routes = [
  {
    path: 'create',
    component: AddScheduleComponent
  },
  {
    path: 'list',
    component: ScheduleComponent
  },
  {
    path:'edit/:id',
    component:EditScheduleComponent
  },
  {
    path:'bookinghistory/:id',
    component:BookingHistoryComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleRoutingModule { }
