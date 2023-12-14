import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BOOKINGSERVICE_API_PATH } from 'src/app/constants/IMPData';
import { bookinghistory } from 'src/app/model/bookinghistory';
import { Observable } from 'rxjs';


@Injectable({providedIn: 'root'})
export class BookingService {


  constructor(private http: HttpClient) { }

    getBookedFlightData() {
    // return of(this.bookedFlight);
    }

    getBookinHistory(id:any):Observable<bookinghistory[]>{
      return this.http.get<bookinghistory[]>(`${BOOKINGSERVICE_API_PATH}bookingupadateAndDeleteAndRetraiveByID/${id}/`)
    }







}







// import { Injectable } from '@angular/core';
// import { of, Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class FlightService {
//   flights: any[];
//   nextFlights: any[];
//   selectedFlight: any[];
//   bookedFlight: any[];
//   flightHistory: any[];

//

//   getFetchedFlights() {
//     return of(this.flights);
//   }

//   getAfterDepartureDateFlights() {
//     return of(this.nextFlights);
//   }

//   getFlights(filterObject: any) {
//     const jwt_token = localStorage.getItem('token');

//     return this.http.post(
//       `${API_PATH}/flight/getflights`,
//       {
//         filters: filterObject,
//       },
//       {
//         headers: {
//           authorization: `${TOKEN_PREFIX} ${jwt_token}`,
//         },
//       }
//     );
//   }

//   addNewFligt(flightData: any) {
//     const jwt_token = localStorage.getItem('token');

//     return this.http.post(
//       `${API_PATH}/flight/addFlight`,
//       { data: flightData },
//       {
//         headers: {
//           authorization: `${TOKEN_PREFIX} ${jwt_token}`,
//         },
//       }
//     );
//   }

//   // Selected Flights
//   setSelectedFlight(flightData: any) {
//     this.selectedFlight.splice(0, 1);
//     return this.selectedFlight.push(flightData);
//   }

//   getSelectedFlight() {
//     return of(this.selectedFlight);
//   }

//   // Book Flight
//   bookNewFlight(flightData: any) {
//     const jwt_token = localStorage.getItem('token');

//     return this.http.post(
//       `${API_PATH}/flight/booking/newbooking`,
//       {
//         data: flightData,
//       },
//       {
//         headers: {
//           authorization: `${TOKEN_PREFIX} ${jwt_token}`,
//         },
//       }
//     );
//   }



//   // Flight Booking
//   getFlightBookingHistory() {
//     const jwt_token = localStorage.getItem('token');

//     return this.http.post(
//       `${API_PATH}/flight/booking/getbookings`,
//       {},
//       {
//         headers: {
//           authorization: `${TOKEN_PREFIX} ${jwt_token}`,
//         },
//       }
//     );
//   }
// }
