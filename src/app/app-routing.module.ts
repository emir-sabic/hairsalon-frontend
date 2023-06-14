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


const routes: Routes = [
{path:'', component:HomepageComponent},
{path:'services', component:ServicesComponent},
{path:'login', component:LoginsingupComponent},
{path:'modelsignup', component:ModelsignupComponent},
{path:'signup', component:SignupComponent},
{path:'bookapointment', component:BookapointmentComponent},
{path:'aboutus', component:AboutusComponent},
{path:'review', component:ReviewComponent},
{path:'stylist', component:StylistComponent},
{path:'admin', component:AdminComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
