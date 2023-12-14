import { MessageService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Airport } from 'src/app/model/airport';
import { Flight } from 'src/app/model/flight';
import { ScheduleService } from 'src/app/services/flight/schedule.service';

@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.css'],
  providers:[MessageService]
})
export class AddScheduleComponent implements OnInit {
  myForm: any = FormGroup;
  submitted=false;
  constructor(private scheduleservice: ScheduleService,
    private formbBuilder: FormBuilder,
    private messageService:MessageService) { }

  flights: Flight[] =[];
  airports:Airport[]=[]
  source_airport?:Airport=new Airport;
  destination_airport?:Airport=new Airport;
  flight?:Flight=new Flight;
  ngOnInit() {
    this.myForm = this.formbBuilder.group({
      source_airport: ['', Validators.required],
      destination_airport: ['', Validators.required],
      arrival_time:['',Validators.required],
      departure_time:['',Validators.required],
      available_seats:['',Validators.required],
      base_price:['',Validators.required],
      flight:['',Validators.required],
    });
      this.getAllFlights()
      this.getAllAirports()
  }

  get f() {
    return this.myForm.controls;
  }
  get selectedSourceAirport() {
    return this.myForm.get('source_airport').value;
  }
  get selectedDestinationAirport() {
    return this.myForm.get('destination_airport').value;
  }
  addSchedule(){
    console.log('enter into add method')
    console.log()
    this.scheduleservice.addSchedule(this.myForm.value).subscribe(data=>{

      console.log('added data',data)
      this.patchFlight(data.flight.id)
      this.show()
    },error =>{
      console.log("error",error);
      this.showError();
    })
  }
  getAllFlights(){
    console.log("get all Flights entered")
    this.scheduleservice.getAllFlights().subscribe(data=>{
      console.log('get all Flights',data)
      const activeFlights=data.filter(x=>x.status=='Active')
      console.log('get Active Flights',activeFlights)
      this.flights=activeFlights;
    })

  }
  getAllAirports(){
    console.log("get all airports entered")
    this.scheduleservice.getAllAirports().subscribe(data=>{
      console.log('get all airports',data)
      const activeAirports=data.filter(x=>x.status=='Active')
      console.log('get Active Flights',activeAirports)
      this.airports=activeAirports;
    })

  }
  patchFlight(id:number){
  this.scheduleservice.patchFlight(id).subscribe(data =>{
  console.log('patch method Flights',data)
  })
  }
  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Added Schedule' });
  }
  showError() {
  this.messageService.add({ severity: 'error', summary: 'Error', detail: 'All Fields are required'});
  }
}
