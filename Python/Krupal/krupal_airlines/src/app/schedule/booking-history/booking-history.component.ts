import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { bookinghistory } from 'src/app/model/bookinghistory';
import { BookingService } from 'src/app/services/booking/booking.service';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {
  id?:any
  bookinghistorys:bookinghistory[]=[]
  constructor(private bookingservice: BookingService,private route: ActivatedRoute,) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    console.log(this.id)
    this.getAllBookingHistoryById()
  }

getAllBookingHistoryById(){
this.bookingservice.getBookinHistory(this.id).subscribe(data=>{
  console.log('booking data',data)
  this.bookinghistorys=data;
  console.log('booking data',this.bookinghistorys)
})
}

}
