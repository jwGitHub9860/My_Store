import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";

// TEMP: keep or Remove?
//import { FormsModule } from "@angular/forms";

// Gains Access to HTTP Client
import { HttpClientModule } from "@angular/common/http";

// TEMP: keep or Remove?
//import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app";

@NgModule({
  // Links All Components to App Module
  declarations: [],
  
  // CANNOT INPUT "App" Component into "declarations" Because it's Standalone & CANNOT be Declared in "@NgModule"
  // Causes "[ERROR] NG6008: Component App is standalone, and cannot be declared in an NgModule"
  // Causes "[ERROR] NG6002: 'HttpClient' does not appear to be an NgModule class"
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent,
    HttpClientModule,
    //NgbModule,
    //FormsModule
  ],
  providers: [],

  // Starting Component
  bootstrap: [AppComponent]
})
export class AppModule { }
