import { Airport } from "./airport";
import { Flight } from "./flight";


export class Schedule{
  constructor(
    public id:number,
    public source_airport:Airport,
    public destination_airport:Airport,
    public arrival_time:string,
    public departure_time:string,
    public available_seats:number,
    public base_price:any,
    public flight:Flight,
    public status:string
  ){}
}
