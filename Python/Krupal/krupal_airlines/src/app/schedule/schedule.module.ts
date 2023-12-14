import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule.component';
import { AddScheduleComponent } from './add-schedule/add-schedule.component';
import { EditScheduleComponent } from './editSchedule/editSchedule.component';
import { ScheduleRoutingModule } from './schedule-routing.module';
import { TableModule } from 'primeng/table';
import { MatIconModule } from '@angular/material/icon';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { CardModule } from 'primeng/card';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
@NgModule({
  imports: [
    CommonModule,ScheduleRoutingModule,TableModule, MatIconModule,DropdownModule,FormsModule,MatCardModule
    ,ReactiveFormsModule,ToastModule,ConfirmPopupModule,CardModule],
  declarations: [ScheduleComponent, AddScheduleComponent,EditScheduleComponent,BookingHistoryComponent]
})
export class ScheduleModule { }
