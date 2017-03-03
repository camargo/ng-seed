import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about.component';

const aboutRoutes: Routes = [
  {
    path: '',
    component: AboutComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(aboutRoutes);
