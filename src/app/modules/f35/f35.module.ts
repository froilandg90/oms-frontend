import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { F35RoutingModule } from './f35-routing.module';
import { F35Component } from './f35.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    F35Component
  ],
  imports: [
    CommonModule,
    F35RoutingModule
  ],
  providers: [],
  bootstrap: [F35Component]
})
export class F35Module { }
