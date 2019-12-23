import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {ReactiveFormsModule, FormsModule } from "@angular/forms";

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { ToastrModule } from 'ngx-toastr';
import { CreateadComponent } from './createad/createad.component';
import { HomeServiceService } from './home/Shared/home-service.service';
import { AdViewerComponent } from './ad-viewer/ad-viewer.component';
import { AdViewerService } from './ad-viewer/ad-viewer.service';

import { NgImageSliderModule } from 'ng-image-slider';
import { CreateAdService } from './createad/create-ad.service';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    NavigationBarComponent,
    CreateadComponent,
    AdViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgImageSliderModule
  ],
  providers: [HomeServiceService, AdViewerService, CreateAdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
