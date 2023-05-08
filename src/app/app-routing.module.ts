import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookapointmentComponent } from './featuers/bookapointment/bookapointment.component'
import { HomepageComponent } from './featuers/homepage/homepage.component';
import { LoginsingupComponent } from './featuers/loginsingup/loginsingup.component';
import { ModelsignupComponent } from './featuers/modelsignup/modelsignup.component';
import { ServicesComponent } from './featuers/services/services.component';
import { SignupComponent } from './featuers/signup/signup.component';

const routes: Routes = [
{path:'', component:HomepageComponent},
{path:'services', component:ServicesComponent},
{path:'login', component:LoginsingupComponent},
{path:'modelsignup', component:ModelsignupComponent},
{path:'signup', component:SignupComponent},
{path:'appointment', component:BookapointmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
