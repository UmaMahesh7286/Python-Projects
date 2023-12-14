import { Component } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-flight-loader',
  templateUrl: 'flightloader.component.html',
  styleUrls: ['flightloader.component.css'],
  animations: [
    trigger('flyAnimation', [
      transition(':enter', [
        style({ transform: 'translate(-50%, 100%)' }),
        animate('2s linear', style({ transform: 'translate(-50%, -100%)' }))
      ])
    ])
  ]
})
export class FlightLoaderComponent { }
