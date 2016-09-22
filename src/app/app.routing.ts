import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about';
import { HomeComponent } from './home';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
