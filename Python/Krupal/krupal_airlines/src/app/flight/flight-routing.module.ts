import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { FlightComponent } from './flight.component';
import { EditFlightComponent } from './edit-flight/edit-flight.component';



const routes: Routes = [
  {
    path: 'create',
    component: AddFlightComponent
  },
  {
    path: 'list',
    component: FlightComponent
  },
  {
    path:'edit/:id',
    component:EditFlightComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightRoutingModule { }
