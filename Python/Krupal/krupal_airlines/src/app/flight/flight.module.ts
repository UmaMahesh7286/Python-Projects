import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightRoutingModule } from './flight-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TableModule } from 'primeng/table';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { FlightComponent } from './flight.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { EditFlightComponent } from './edit-flight/edit-flight.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
// import { CommonService } from '../services/common.service';
@NgModule({
  declarations: [FlightComponent,
    AddFlightComponent,
    EditFlightComponent

  ],
  imports: [
    CommonModule,
    FlightRoutingModule,MatFormFieldModule,MatCardModule,
    MatButtonModule,MatIconModule,TableModule,ConfirmPopupModule,ReactiveFormsModule,ToastModule,
  ],
  // providers:[CommonService]
})
export class FlightModule { }
