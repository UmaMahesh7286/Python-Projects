import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { error } from 'console';
import { MessageService } from 'primeng/api';
import { ScheduleService } from 'src/app/services/flight/schedule.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css'],
  providers: [MessageService]
})
export class AddFlightComponent implements OnInit {
  myForm: any = FormGroup;
  submitted = false;
  constructor(
    private route: ActivatedRoute,
    private scheduleservice: ScheduleService,
    private formbBuilder: FormBuilder,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.myForm = this.formbBuilder.group({
      flight_number: ['', Validators.required],
      seating_capacity: ['', Validators.required],
    });
  }
  get f() {
    return this.myForm.controls;
  }
  addFlight(){
    console.log('enter into add method')
    this.scheduleservice.addFlight(this.myForm.value).subscribe(data=>{
      console.log('added data',data)
      this.show()
    },error=>{
      console.log('error',error)
      this.showError()
    })
  }
  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Added Flight' });
  }
  showError() {
  this.messageService.add({ severity: 'error', summary: 'Error', detail: 'All Fields are required',  });
  }
}
