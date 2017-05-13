import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdCardModule, MdButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';

import { HomeModule } from './home';

import { AppApiService } from './shared';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    HomeModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    appRoutingProviders,
    AppApiService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
