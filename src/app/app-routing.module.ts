import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookapointmentComponent } from './bookapointment/bookapointment.component'
import { HomepageComponent } from './homepage/homepage.component';
import { LoginsingupComponent } from './loginsingup/loginsingup.component';
import { ModelsignupComponent } from './modelsignup/modelsignup.component';
import { ServicesComponent } from './services/services.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
{path:'', component:HomepageComponent},
{path:'services', component:ServicesComponent},
{path:'login', component:LoginsingupComponent},
{path:'modelsignup', component:ModelsignupComponent},
{path:'signup', component:SignupComponent},
{path:'book', component:BookapointmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
