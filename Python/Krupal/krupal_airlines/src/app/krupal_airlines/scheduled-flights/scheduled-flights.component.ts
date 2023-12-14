import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Schedule } from 'src/app/model/schedule';
import { ScheduleService } from 'src/app/services/flight/schedule.service';
import { FlightSearchService } from 'src/app/services/scheduleSearch/ScheduleSearch.service';

@Component({
  selector: 'app-scheduled-flights',
  templateUrl: './scheduled-flights.component.html',
  styleUrls: ['./scheduled-flights.component.css']
})
export class ScheduledFlightsComponent implements OnInit {
  schedule:Schedule[]=[];
  showSearchComponent: boolean = false;
  constructor(
    private scheduleService: ScheduleService,
    private flightsearchservice: FlightSearchService,
    private router:Router
  ) {
    this.schedule= flightsearchservice.getfilterdetails();
  }

  ngOnInit() {

    setTimeout(() => {
      this.showSearchComponent = true;
    }, 4000);
    }

routeit(){
  console.log("router")
  this.router.navigateByUrl("seat")
    }

get flights():Schedule[]{
  return this.schedule;
}
calculateTimeDifference(departureTime: string, arrivalTime: string): string {
  let date1 = new Date(departureTime)
  let date2 = new Date(arrivalTime)
  const timeDifference = date2.getTime() - date1.getTime();
  const hours = Math.floor(timeDifference / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
  const final=`${hours}:${minutes < 10 ? '0' : ''}${minutes}`
  return `${Math.abs(parseInt(final))}`;
}
}
