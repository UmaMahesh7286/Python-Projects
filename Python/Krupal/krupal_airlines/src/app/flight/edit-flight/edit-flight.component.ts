import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ScheduleService } from 'src/app/services/flight/schedule.service';

@Component({
  selector: 'app-edit-aiport',
  templateUrl: './edit-flight.component.html',
  styleUrls: ['./edit-flight.component.css'],
  providers: [MessageService]
})
export class EditFlightComponent implements OnInit {
  myForm: any = FormGroup;
  id?:any
  submitted = false;
  constructor(private scheduleservice: ScheduleService,private formbBuilder: FormBuilder,
    private route: ActivatedRoute, private messageService: MessageService) {
    this.myForm = this.formbBuilder.group({
      flight_number: ['', Validators.required],
      seating_capacity: ['', Validators.required],
    });
  }
  get f() {
    return this.myForm.controls;
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    console.log(this.id)
    this.getById()
  }
  editFlight(){
    console.log('enter into edit method')
    this.scheduleservice.editFlight(this.myForm.value,this.id).subscribe(data=>{
      console.log('edit Flight',data)
      this.show()
    },error =>{
      console.log("error",error);
      this.showError();
    })

  }
  getById(){
    console.log('enter into getbyId method')
    this.scheduleservice.getByIdFlight(this.id).subscribe(data=>{
      console.log('getbyId Flight',data)
      this.myForm.patchValue({
        flight_number: data.flight_number,
        seating_capacity: data.seating_capacity
      });
    })
  }
  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Updated Flight' });
  }
  showError() {
  this.messageService.add({ severity: 'error', summary: 'Error', detail: 'All Fields are required',  });
  }
}
