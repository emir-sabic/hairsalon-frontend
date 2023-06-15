import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookapointmentComponent } from './features/bookapointment/bookapointment.component'
import { HomepageComponent } from './features/homepage/homepage.component';
import { LoginsingupComponent } from './features/loginsingup/loginsingup.component';
import { ModelsignupComponent } from './features/modelsignup/modelsignup.component';
import { ServicesComponent } from './features/services/services.component';
import { SignupComponent } from './features/signup/signup.component';
import { AppointmentService } from './services/bookappointment.service';
import { AboutusComponent } from './features/aboutus/aboutus.component';
import { ReviewComponent } from './features/review/review.component';
import { StylistComponent } from './features/stylist/stylist.component';
import { AdminComponent } from './features/admin/admin.component';
import {AuthGuard} from "./auth/auth-guard.service";
import {LoginComponent} from "./login/login.component";


const routes: Routes = [
  {path: '', redirectTo: 'homepage', pathMatch: 'full'},
{path:'homepage', component:HomepageComponent, canActivate: [AuthGuard], data: {role: 'MANAGER'}},
{path:'services', component:ServicesComponent, canActivate: [AuthGuard], data: {role: 'MANAGER'}},
{path:'login', component:LoginsingupComponent},
{path:'modelsignup', component:ModelsignupComponent, canActivate: [AuthGuard], data: {role: 'MANAGER'}},
{path:'signup', component:SignupComponent},
{path:'bookapointment', component:BookapointmentComponent, canActivate: [AuthGuard], data: {role: 'MANAGER'}},
{path:'aboutus', component:AboutusComponent},
{path:'review', component:ReviewComponent, canActivate: [AuthGuard], data: {role: 'MANAGER'}},
{path:'stylist', component:StylistComponent, canActivate: [AuthGuard], data: {role: 'MANAGER'}},
{path:'admin', component:AdminComponent, canActivate: [AuthGuard], data: {role: 'ADMIN'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
