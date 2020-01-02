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


const routes: Routes = [
  {path: 'login', component:LoginComponent },
  {path: 'signup', component:SignupComponent},
  {path: 'home', component:HomeComponent},
  {path: 'postad', component:CreateadComponent, canActivate:[AuthGuard]},
  {path: 'ad/:id', component:AdViewerComponent},
  {path: 'test', component: TestComponentComponent},
  {path: 'forbidden', component: ForbiddenComponent},
  {path: 'adminpanel', component: AdminPanelComponent, canActivate:[AuthGuard], data: {permittedRoles:['Admin']}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
