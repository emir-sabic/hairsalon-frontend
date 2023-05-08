import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BookapointmentComponent } from './featuers/bookapointment/bookapointment.component'
import { HomepageComponent } from './featuers/homepage/homepage.component';
import { LoginsingupComponent } from './featuers/loginsingup/loginsingup.component';
import { ModelsignupComponent } from './featuers/modelsignup/modelsignup.component';
import { ServicesComponent } from './featuers/services/services.component';
import { SignupComponent } from './featuers/signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    BookapointmentComponent,
    LoginsingupComponent,
    SignupComponent,
    HomepageComponent,
    ModelsignupComponent,
    ServicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

