import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  { path : '', redirectTo :'/home' , pathMatch: 'full' },
  {path :'home' ,component : HomeComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'about',component:AboutUsComponent}

];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
