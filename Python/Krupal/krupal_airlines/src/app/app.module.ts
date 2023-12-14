
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';

import { KrupalAdminModule } from './krupal_airlines_admin/krupaladmin.module';
import { RouterModule } from '@angular/router';
import { KrupalComponent } from './krupal_airlines/krupal/krupal.component';
import { SeatComponent } from './krupal_airlines/seat/seat.component';
import { LoginComponent } from './krupal_airlines/login/login/login.component';
import { FormsModule } from '@angular/forms';
import { KrupalModule } from './krupal_airlines/krupal.module';
import { ScheduledFlightsComponent } from './krupal_airlines/scheduled-flights/scheduled-flights.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/airlinesintercepter/intercepter';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,KrupalModule,
    BrowserAnimationsModule, FormsModule,
    KrupalAdminModule,
    RouterModule.forRoot([
      { path: 'home', component: KrupalComponent },
      { path: 'login', component: LoginComponent },
      {  path: 'seat', component: SeatComponent},
      {
        path: "admin",
        loadChildren: () => import('./krupal_airlines_admin/krupaladmin.module').then(x => x.KrupalAdminModule)
      },
      {
        path: 'scheduleflight', component: ScheduledFlightsComponent
      },
      {
        path:'seat',component:SeatComponent
      },
      {
        path: "**", redirectTo: "home"
      },

    ])
  ],
  providers: [
    {
     provide:HTTP_INTERCEPTORS,
     useClass:TokenInterceptor,
     multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
