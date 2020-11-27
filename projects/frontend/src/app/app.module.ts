import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import{ DestinationComponent } from './destination/destination.component';
import { ViewdestinationComponent } from './viewdestination/viewdestination.component';
import { ConfirmpackageComponent } from './confirmpackage/confirmpackage.component';
import { BookingComponent } from './booking/booking.component';
import { AddpackagesComponent } from './addpackages/addpackages.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, RegisterComponent, LoginComponent, DestinationComponent, ViewdestinationComponent, ConfirmpackageComponent, BookingComponent, AddpackagesComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
