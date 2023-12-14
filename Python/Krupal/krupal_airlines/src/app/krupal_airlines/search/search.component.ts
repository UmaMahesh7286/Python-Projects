import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { Airport } from 'src/app/model/airport';
import { SearchFlight } from 'src/app/model/booking.model';
import { ScheduleService } from 'src/app/services/flight/schedule.service';
import { FlightSearchService } from 'src/app/services/scheduleSearch/ScheduleSearch.service';

@Component({
    selector: 'search-krupal',
    templateUrl: 'search.component.html',
    styleUrls: ['search.component.css'],
})

export class SearchComponent implements OnInit, DoCheck {
    isChecked: boolean = true
    selected = '1';
    searchFlight:SearchFlight = new SearchFlight();
    selectedCountry: string | undefined;
    length?: number;
    minDate: Date = new Date();
    maxDate: Date = new Date(this.minDate.getFullYear(), this.minDate.getMonth() + 3, this.minDate.getDate())
    searchForm: any= FormGroup;
    airport_list : Airport[]=[]


    constructor(private formBuilder: FormBuilder, private scheduleservice :ScheduleService,private flightsearchService: FlightSearchService) {
        this.getAllAirports()
        this.searchForm = this.formBuilder.group({
            fromLocation: ['', Validators.required],
            toLocation: ['', Validators.required],
            departureDate: ['', Validators.required],
            returnDate:!this.isChecked ? ['',Validators.required] :[''],
            passengers: ['', Validators.required]
          });



    }
    getAllAirports() {
        console.log("get all Flights entered")
        this.scheduleservice.getAllAirports().subscribe(data => {
            console.log('get all Flights', data)
            const activeAirports = data.filter(x => x.status == 'Active')
            console.log('get Active Flights', activeAirports)
            this.airport_list = activeAirports
        })
    }
    get selectedSourceAirport(){
        return this.searchForm.get('fromLocation').value;
    }

    ngDoCheck(): void {
        returnDate:!this.isChecked ? ['',Validators.required] :['']
    }

    ngOnInit() {
    }

    radioChange(flag: boolean) {
        this.isChecked = flag;
    }

    submit() {
        if(this.searchForm.valid){
        let num=  this.searchForm.value.passengers;
          localStorage.setItem("noofpassenger",num)
            console.log(this.searchFlight);
            this.getData();
        }


      }
      getData() {
        this.flightsearchService.gettingdata(this.searchFlight);
    }
}
