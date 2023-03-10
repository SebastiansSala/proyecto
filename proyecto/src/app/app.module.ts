import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './index/login/login.component';
import { MaterialExampleModule } from 'src/material.module';
import { ReservacionesComponent } from './index/reservaciones/reservaciones.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AdminComponent,
    LoginComponent,
    ReservacionesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
