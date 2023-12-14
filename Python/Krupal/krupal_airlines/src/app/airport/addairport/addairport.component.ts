import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Airport } from 'src/app/model/airport';
import { ScheduleService } from 'src/app/services/flight/schedule.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-addairport',
  templateUrl: './addairport.component.html',
  styleUrls: ['./addairport.component.css'],
  providers: [MessageService]
})
export class AddairportComponent implements OnInit {
  myForm: any = FormGroup;
  submitted = false;
  // airport:Airport = new Airport();
  constructor(
    private scheduleservice: ScheduleService,
    private formbBuilder: FormBuilder,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.myForm = this.formbBuilder.group({
      airport_name: ['', Validators.required],
      city: ['', Validators.required],
    });
  }
  get f() {
    return this.myForm.controls;
  }
  addAirport(){
    console.log('enter into add method')
    this.scheduleservice.addAirport(this.myForm.value).subscribe(data=>{
      console.log('added data',data)
      this.show()
    },error => {
      console.error('error', error);
      this.showError()
      // Handle the error here
    })
  }
  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Added Airport' });
  }
  showError() {
  this.messageService.add({ severity: 'error', summary: 'Error', detail: 'All Fields are required',  });
  }
}
