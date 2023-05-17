import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IngestorRoutingModule } from './ingestor-routing.module';
import { IngestorComponent } from './ingestor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    IngestorComponent
  ],
  imports: [
    CommonModule,
    IngestorRoutingModule
  ],
  providers: [],
  bootstrap: [IngestorComponent]
})
export class IngestorModule { }
