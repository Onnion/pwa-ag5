import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders  } from '@angular/core';
import { HomeComponent        } from './components/home/home.component';

const APP_ROUTES: Routes = [
  
  {path: '',    component: HomeComponent},
  {path: '**',  redirectTo: ''}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

