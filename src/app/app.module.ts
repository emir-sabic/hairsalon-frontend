import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BookapointmentComponent } from './bookapointment/bookapointment.component'
import { HomepageComponent } from './homepage/homepage.component';
import { LoginsingupComponent } from './loginsingup/loginsingup.component';
import { ModelsignupComponent } from './modelsignup/modelsignup.component';
import { ServicesComponent } from './services/services.component';
import { SignupComponent } from './signup/signup.component';


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

