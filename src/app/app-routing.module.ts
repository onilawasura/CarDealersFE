import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './user/login/login.component';
import {SignupComponent} from './user/signup/signup.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {path: 'Login', component:LoginComponent },
  {path: 'Signup', component:SignupComponent},
  {path: 'Home', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
