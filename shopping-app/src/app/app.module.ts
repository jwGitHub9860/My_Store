import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from '@angular/core';

// Gains Access to HTTP Client
import { HttpClientModule } from "@angular/common/http";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { App } from "./app";

@NgModule({
  // CANNOT INPUT Components into "declarations" Because they're standalones & CANNOT be Declared in "@NgModule"
  // Causes "[ERROR] NG6008: Component App is standalone, and cannot be declared in an NgModule"
  // Causes "[ERROR] NG6002: 'HttpClient' does not appear to be an NgModule class"
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
