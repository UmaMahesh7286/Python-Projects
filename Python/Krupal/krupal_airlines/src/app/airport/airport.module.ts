import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AirportRoutingModule } from './airport-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TableModule } from 'primeng/table';
import { AirportComponent } from './airport.component';
import { AddairportComponent } from './addairport/addairport.component';
import { EditAiportComponent } from './edit-aiport/edit-aiport.component';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
// import { ScheduleService } from '../services/flight/schedule.service';
@NgModule({
  declarations: [AirportComponent,
    AddairportComponent,
    EditAiportComponent

  ],
  imports: [
    CommonModule,
    AirportRoutingModule,MatFormFieldModule,MatCardModule,
    MatButtonModule,MatIconModule,TableModule,ConfirmPopupModule,
    ReactiveFormsModule,ToastModule,ButtonModule,CardModule
  ],
   providers:[]
})
export class AirportModule { }
