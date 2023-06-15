import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BookapointmentComponent } from './features/bookapointment/bookapointment.component'
import { HomepageComponent } from './features/homepage/homepage.component';
import { LoginsingupComponent } from './features/loginsingup/loginsingup.component';
import { ModelsignupComponent } from './features/modelsignup/modelsignup.component';
import { ServicesComponent } from './features/services/services.component';
import { SignupComponent } from './features/signup/signup.component';
import { AboutusComponent } from './features/aboutus/aboutus.component';
import { AppointmentService } from './services/bookappointment.service';
import { ModelSignupService } from './services/modelsignup.service';
import { NewsletterService } from './services/newsletter.service';
import { ReviewComponent } from './features/review/review.component';
import { ReviewPopupComponent } from './review-popup/review-popup.component';
import { FooterComponent } from './features/footer/footer.component';
import { StylistComponent } from './features/stylist/stylist.component';
import { UserService } from './services/user.service';
import { LoginService } from './services/login.service';
import { SignupService } from './services/signup.service';
import { ReviewService } from './services/review.service';
import { AdminComponent } from './features/admin/admin.component';
import {LoginComponent} from "./login/login.component";
import {AuthInterceptor} from "./auth/auth.interceptor";

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
    ReviewPopupComponent,
    FooterComponent,
    StylistComponent,
    AdminComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}, AppointmentService, ModelSignupService, NewsletterService, SignupService,UserService, LoginService, ReviewService],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
