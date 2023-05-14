import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookapointmentComponent } from './features/bookapointment/bookapointment.component'
import { HomepageComponent } from './features/homepage/homepage.component';
import { LoginsingupComponent } from './features/loginsingup/loginsingup.component';
import { ModelsignupComponent } from './features/modelsignup/modelsignup.component';
import { ServicesComponent } from './features/services/services.component';
import { SignupComponent } from './features/signup/signup.component';
import { AppointmentService } from './services/bookappointment.service'

const routes: Routes = [
{path:'', component:HomepageComponent},
{path:'services', component:ServicesComponent},
{path:'login', component:LoginsingupComponent},
{path:'modelsignup', component:ModelsignupComponent},
{path:'signup', component:SignupComponent},
{path:'bookapointment', component:BookapointmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
