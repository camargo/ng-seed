import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders }  from './app.routing';

import { AboutModule } from './about';
import { HomeModule } from './home';

import { AppApiService } from './shared';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AboutModule,
    HomeModule
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
