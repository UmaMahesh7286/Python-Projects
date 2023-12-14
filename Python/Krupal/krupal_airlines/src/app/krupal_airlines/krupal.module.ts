import { DropdownModule } from 'primeng/dropdown';
import { BookingComponent } from './booking/booking/booking.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './login/login/login.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutModule } from '@angular/cdk/layout';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { BrowserModule } from '@angular/platform-browser';
import { UserService } from '../services/user/user.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { SearchComponent } from './search/search.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBadgeModule } from '@angular/material/badge';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KrupalComponent } from './krupal/krupal.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SeatComponent } from './seat/seat.component';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ScheduledFlightsComponent } from './scheduled-flights/scheduled-flights.component';
import { CommonService } from '../services/common.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FlightLoaderComponent } from './flightloader/flightloader.component';
import { FlightSearchService } from '../services/scheduleSearch/ScheduleSearch.service';

@NgModule({
  imports: [FormsModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, BrowserModule,HttpClientModule,MatSnackBarModule,
    MatCardModule,CarouselModule,
    MatIconModule,
    MatTabsModule,
    MatCheckboxModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatStepperModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    ToastModule,
    MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule,
    MatAutocompleteModule,
    MatTooltipModule,
    MatBadgeModule,
    BrowserAnimationsModule,
    SelectButtonModule,
    DropdownModule,
    MatSnackBarModule,
    CarouselModule,
    BrowserAnimationsModule
  ],

  exports: [FlightLoaderComponent,LoginComponent, SearchComponent, KrupalComponent,FooterComponent,HeaderComponent,SeatComponent,BookingComponent],
  declarations: [FlightLoaderComponent,LoginComponent, SearchComponent, KrupalComponent, FooterComponent, HeaderComponent,HeaderComponent,SeatComponent, ScheduledFlightsComponent,BookingComponent],
  providers: [UserService,FlightSearchService,CommonService],
})
export class KrupalModule { }
