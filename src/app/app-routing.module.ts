import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './user/login/login.component';
import {SignupComponent} from './user/signup/signup.component';
import {HomeComponent} from './home/home.component';
import {CreateadComponent} from './createad/createad.component'
import { AdViewerComponent } from './ad-viewer/ad-viewer.component';
import { TestComponentComponent } from './test-component/test-component.component';


const routes: Routes = [
  {path: 'login', component:LoginComponent },
  {path: 'signup', component:SignupComponent},
  {path: 'home', component:HomeComponent},
  {path: 'postad', component:CreateadComponent},
  {path: 'ad/:id', component:AdViewerComponent},
  {path: 'test', component: TestComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
