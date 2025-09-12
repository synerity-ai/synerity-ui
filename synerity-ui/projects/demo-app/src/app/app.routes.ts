import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
  { path: 'components/button', loadComponent: () => import('./pages/button/button').then(m => m.Button) },
  { path: 'components/input', loadComponent: () => import('./pages/input/input').then(m => m.Input) },
  { path: 'components/card', loadComponent: () => import('./pages/card/card').then(m => m.Card) },
  { path: 'components/forms', loadComponent: () => import('./pages/forms/forms').then(m => m.Forms) },
  { path: '**', redirectTo: '/home' }
];
