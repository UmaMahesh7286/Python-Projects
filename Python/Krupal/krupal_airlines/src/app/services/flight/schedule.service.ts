import { Airport } from './../../model/airport';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SCHEDULESERVICE_API_PATH } from 'src/app/constants/IMPData';
import { Observable } from 'rxjs';
import { Flight } from 'src/app/model/flight';
import { Schedule } from 'src/app/model/schedule';

@Injectable({providedIn: 'root'})
export class ScheduleService {


  constructor(private http: HttpClient) { }

  // Airport repository

  addAirport(airport:Airport):Observable<Airport>{
      return this.http.post<Airport>(`${SCHEDULESERVICE_API_PATH}AirportInsertandGettingall/`,airport)
  }

  getAllAirports():Observable<Airport[]>{
    return this.http.get<Airport[]>(`${SCHEDULESERVICE_API_PATH}AirportInsertandGettingall/`)
  }

  editAirport(airport:Airport,id:number):Observable<Airport>{
    return this.http.put<Airport>(`${SCHEDULESERVICE_API_PATH}updateAndDeleteAndRetraiveByID/${id}/`,airport)
  }
  getByIdAirport(id:number):Observable<Airport>{
    return this.http.get<Airport>(`${SCHEDULESERVICE_API_PATH}updateAndDeleteAndRetraiveByID/${id}/`)
  }
  deleteAirport(id:number):Observable<Airport>{
    return this.http.delete<Airport>(`${SCHEDULESERVICE_API_PATH}updateAndDeleteAndRetraiveByID/${id}/`)
  }

  // Flight datarepository

addFlight(flight:Flight):Observable<Flight>{
    return this.http.post<Flight>(`${SCHEDULESERVICE_API_PATH}FlightInsertandGettingall/`,flight)
  }

getAllFlights():Observable<Flight[]>{
  return this.http.get<Flight[]>(`${SCHEDULESERVICE_API_PATH}FlightInsertandGettingall/`)
}

editFlight(flight:Flight,id:number):Observable<Flight>{
  return this.http.put<Flight>(`${SCHEDULESERVICE_API_PATH}FlightupdateAndDeleteAndRetraiveByID/${id}/`,flight)
}
getByIdFlight(id:number):Observable<Flight>{
  return this.http.get<Flight>(`${SCHEDULESERVICE_API_PATH}FlightupdateAndDeleteAndRetraiveByID/${id}/`)
}
deleteFlight(id:number):Observable<Flight>{
  return this.http.delete<Flight>(`${SCHEDULESERVICE_API_PATH}FlightupdateAndDeleteAndRetraiveByID/${id}/`)
}
patchFlight(id:number):Observable<Flight>{
  return this.http.patch<Flight>(`${SCHEDULESERVICE_API_PATH}patchFlight/${id}/`,id)
}

// Schedule Repository

addSchedule(schedule:Schedule):Observable<Schedule>{
  return this.http.post<Schedule>(`${SCHEDULESERVICE_API_PATH}inserting/`,schedule)
}

getAllSchedules():Observable<Schedule[]>{
return this.http.get<Schedule[]>(`${SCHEDULESERVICE_API_PATH}gettingData/`)
}

editSchedule(schedule:Schedule,id:number):Observable<Schedule>{
return this.http.put<Schedule>(`${SCHEDULESERVICE_API_PATH}updateSchedule/${id}/`,schedule)
}
getByIdSchedule(id:number):Observable<Schedule>{
return this.http.get<Schedule>(`${SCHEDULESERVICE_API_PATH}getById/${id}/`)
}
deleteSchedule(id:number):Observable<Schedule>{
return this.http.delete<Schedule>(`${SCHEDULESERVICE_API_PATH}deleteSchedule/${id}/`)
}
patchSchedule(id:number):Observable<Schedule>{
  return this.http.patch<Schedule>(`${SCHEDULESERVICE_API_PATH}patchSchedule/${id}/`,id)
}
patchScheduleByTime(id:number):Observable<Schedule>{
  return this.http.patch<Schedule>(`${SCHEDULESERVICE_API_PATH}patchScheduleByTime/${id}/`,id)
}
}
