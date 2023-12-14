import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddairportComponent } from './addairport/addairport.component';
import { AirportComponent } from './airport.component';
import { EditAiportComponent } from './edit-aiport/edit-aiport.component';


const routes: Routes = [
  {
    path: 'create',
    component: AddairportComponent
  },
  {
    path: 'list',
    component: AirportComponent
  },
  {
    path:`edit/:id`,
    component:EditAiportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AirportRoutingModule { }
