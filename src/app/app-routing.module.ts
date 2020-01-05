import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './user/login/login.component';
import {SignupComponent} from './user/signup/signup.component';
import {HomeComponent} from './home/home.component';
import {CreateadComponent} from './createad/createad.component'
import { AdViewerComponent } from './ad-viewer/ad-viewer.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { AuthGuard } from './auth/auth.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { MyprofileHomeComponent } from './myprofile-home/myprofile-home.component';
import { MyAccountComponent } from './myprofile-home/Components/my-account/my-account.component';
import { MyFavouriteComponent } from './myprofile-home/Components/myfavourite/my-favourite/my-favourite.component';
//import { Z_FULL_FLUSH } from 'zlib';


const routes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  {path: 'login', component:LoginComponent },
  {path: 'signup', component:SignupComponent},
  {path: 'home', component:HomeComponent},
  {path: 'postad', component:CreateadComponent, canActivate:[AuthGuard]},
  {path: 'ad/:id', component:AdViewerComponent},
  {path: 'test', component: TestComponentComponent},
  {path: 'forbidden', component: ForbiddenComponent},
  {path: 'adminpanel', component: AdminPanelComponent, canActivate:[AuthGuard], data: {permittedRoles:['Admin']}},
  {path: 'myprofile' , 
  component: MyprofileHomeComponent ,
  children: [
    {path: 'account', component: MyAccountComponent},
    {path: 'myfavourite', component: MyFavouriteComponent}
  ]
    
  },
  {path: '**', component: ForbiddenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
