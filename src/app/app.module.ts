import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BookapointmentComponent } from './features/bookapointment/bookapointment.component'
import { HomepageComponent } from './features/homepage/homepage.component';
import { LoginsingupComponent } from './features/loginsingup/loginsingup.component';
import { ModelsignupComponent } from './features/modelsignup/modelsignup.component';
import { ServicesComponent } from './features/services/services.component';
import { SignupComponent } from './features/signup/signup.component';
import { AboutusComponent } from './features/aboutus/aboutus.component';

import { AppointmentService } from './services//bookappointment.service';
import { ReviewComponent } from './features/review/review.component';
import { ReviewPopupComponent } from './review-popup/review-popup.component';


@NgModule({
  declarations: [
    AppComponent,
    BookapointmentComponent,
    LoginsingupComponent,
    SignupComponent,
    HomepageComponent,
    ModelsignupComponent,
    ServicesComponent,
    AboutusComponent,
    ReviewComponent,
    ReviewPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AppointmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }

