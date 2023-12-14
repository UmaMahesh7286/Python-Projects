import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Airport } from 'src/app/model/airport';
import { Flight } from 'src/app/model/flight';
import { ScheduleService } from 'src/app/services/flight/schedule.service';

@Component({
  selector: 'app-editSchedule',
  templateUrl: './editSchedule.component.html',
  styleUrls: ['./editSchedule.component.css'],
  providers:[MessageService]
})
export class EditScheduleComponent implements OnInit {
  myForm: any = FormGroup;
  id?:any
  flights: Flight[] =[];
  airports:Airport[]=[]
  source_airport?:Airport=new Airport;
  destination_airport?:Airport=new Airport;
  flight?:Flight=new Flight;
  submitted=false;
  constructor(private scheduleservice: ScheduleService,private formbBuilder: FormBuilder,
    private route: ActivatedRoute, private messageService:MessageService) {
      this.myForm = this.formbBuilder.group({
        source_airport: ['', Validators.required],
        destination_airport: ['', Validators.required],
        arrival_time:['',Validators.required],
        departure_time:['',Validators.required],
        available_seats:['',Validators.required],
        base_price:['',Validators.required],
        flight:['',Validators.required],
      });
  }
  get f() {
    return this.myForm.controls;
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getAllFlights()
      this.getAllAirports()
    });
    console.log(this.id)
    this.getById()
  }
  editSchedule(){
    console.log('enter into edit method')
    this.scheduleservice.editSchedule(this.myForm.value,this.id).subscribe(data=>{
      console.log('edit Flight',data)
      this.show()
    },error =>{
      console.log("error",error);
      this.showError();
    })

  }
  getById(){
    console.log('enter into getbyId method')
    this.scheduleservice.getByIdSchedule(this.id).subscribe(data=>{
      console.log('getbyId Flight',data)
      data.arrival_time=data.arrival_time.replace(':00Z','')
      data.departure_time=data.departure_time.replace(':00Z','')
      this.myForm.patchValue({
        source_airport: data.source_airport,
        destination_airport: data.destination_airport,
        arrival_time: data.arrival_time,
        departure_time: data.departure_time,
        available_seats: data.available_seats,
        base_price: data.base_price,
        flight: data.flight,
      });
    })
  }
  getAllFlights(){
    console.log("get all Flights entered")
    this.scheduleservice.getAllFlights().subscribe(data=>{
      console.log('get all Flights',data)
      this.flights=data;
    })

  }
  getAllAirports(){
    console.log("get all airports entered")
    this.scheduleservice.getAllAirports().subscribe(data=>{
      console.log('get all airports',data)
      this.airports=data;
    })

  }
  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Added Schedule' });
  }
  showError() {
  this.messageService.add({ severity: 'error', summary: 'Error', detail: 'All Fields are required'});
  }
}
