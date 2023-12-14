import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduleService } from '../services/flight/schedule.service';
import { Airport } from '../model/airport';
import { ConfirmationService, MessageService } from 'primeng/api';
@Component({
  selector: 'app-airport',
  templateUrl: './airport.component.html',
  styleUrls: ['./airport.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class AirportComponent implements OnInit {
  airportId?:number;
  airports:Airport[]=[]
  airport:Airport=new Airport;
  constructor(private route: Router,private scheduleservice: ScheduleService,
    private confirmationService: ConfirmationService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getAll()
  }

  loadEditAirportPage(id?:number){
    this.airportId=id;
    console.log('loadEditAirportPage',id)
    this.route.navigate([`admin/airport/edit`,id])

  }
  loadDeleteAirportPage(id?:any){
    this.airportId=id;

    this.scheduleservice.deleteAirport(id).subscribe(data=>{
      console.log("deleted data airport",data)
      this.ngOnInit()
    },error=>{
      console.log('error',error)
    this.showError()
    })

  }
  getAll(){
    console.log("get all airports entered")
    this.scheduleservice.getAllAirports().subscribe(data=>{
      console.log('get all airports',data)
      this.airports=data;
    })

  }
  confirm(event: Event,id?:any) {
    this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'Are you sure that you want to proceed?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
            this.loadDeleteAirportPage(id)
        },
        reject: () => {
            this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
        }
    });
}
getSerialNumber(airport: any): number {
  const index = this.airports.indexOf(airport);
  return index + 1;
}
showError() {
  this.messageService.add({ severity: 'error', summary: 'Error', detail: 'UnAuthorized',  });
  }
}
