import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>import('./home/home').then((m) => m.Home),
  },
  {
    path: 'products',
    loadComponent: () =>import('./products/products').then((m) => m.Products),    
  },
  {
    path:'**',
    loadComponent: () =>import('./error/error').then((m) => m.Error),
  
  }
];