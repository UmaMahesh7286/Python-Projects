import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { error } from 'console';
import { MessageService } from 'primeng/api';
import { Airport } from 'src/app/model/airport';
import { ScheduleService } from 'src/app/services/flight/schedule.service';

@Component({
  selector: 'app-edit-aiport',
  templateUrl: './edit-aiport.component.html',
  styleUrls: ['./edit-aiport.component.css'],
  providers: [MessageService]
})
export class EditAiportComponent implements OnInit {
  myForm: any = FormGroup;
  submitted = false;
  airport:Airport = new Airport();
  id?:any
  constructor(private scheduleservice: ScheduleService,
    private formbBuilder: FormBuilder,
    private messageService: MessageService,
    private route: ActivatedRoute) { this.myForm = this.formbBuilder.group({
      airport_name: ['', Validators.required],
      city: ['', Validators.required],
    });}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    console.log(this.id)
    this.getById()

  }
  get f() {
    return this.myForm.controls;
  }
  editAirport(){
    console.log('enter into edit method')
    this.scheduleservice.editAirport(this.myForm.value,this.id).subscribe(data=>{
      console.log('edit airport',data)
      this.show()
    },error =>{
      console.log("error",error);
      this.showError();
    })

  }
  getById(){
    console.log('enter into getbyId method')
    this.scheduleservice.getByIdAirport(this.id).subscribe(data=>{
      console.log('getbyId',data)
      this.myForm.patchValue({
        airport_name: data.airport_name,
        city: data.city
      });
    })
  }
  show() {
    this.messageService.add({severity: 'success', summary: 'Success', detail: 'Updated Airport' });
}
showError() {
  this.messageService.add({ severity: 'error', summary: 'Error', detail: 'All Fields are required',  });
  }

}
