import { Flight } from './../model/flight';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduleService } from '../services/flight/schedule.service';
import { ConfirmationService, MessageService } from 'primeng/api';


@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class FlightComponent implements OnInit {
  flightId?:number;
  constructor(private route: Router,private scheduleservice: ScheduleService,
    private confirmationService: ConfirmationService, private messageService: MessageService
   ) { }
  flights:Flight[]=[]
  ngOnInit(): void {
    this.getAll()
  }

  loadEditFlightPage(id?:number){
    this.flightId=id;
    console.log('loadEditFlightPage',id)
    this.route.navigate(['admin/flight/edit',id])

  }
  loadDeleteFlightPage(id?:any){
    this.flightId=id;
    this.scheduleservice.deleteFlight(id).subscribe(data=>{
      console.log("deleted data Flight",data)
      this.ngOnInit()
    },error=>{
      console.log('error',error)
    this.showError()
    })
  }
  getAll(){
    console.log("get all Flight entered")
    this.scheduleservice.getAllFlights().subscribe(data=>{
      console.log('get all Flights',data)
      this.flights=data;
    })

  }
  confirm(event: Event,id?:any) {
    this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'Are you sure that you want to proceed?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
            this.loadDeleteFlightPage(id)
        },
        reject: () => {
            this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
        }
    });
}
getSerialNumber(flight: any): number {
  const index = this.flights.indexOf(flight);
  return index + 1;
}
showError() {
  this.messageService.add({ severity: 'error', summary: 'Error', detail: 'UnAuthorized',  });
  }
}
