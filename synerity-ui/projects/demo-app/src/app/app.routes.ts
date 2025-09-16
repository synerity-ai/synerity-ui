import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
  { path: 'components/button', loadComponent: () => import('./pages/button/button').then(m => m.Button) },
  { path: 'components/inputtext', loadComponent: () => import('./pages/inputtext/inputtext').then(m => m.Inputtext) },
  { path: 'components/inputtextarea', loadComponent: () => import('./pages/inputtextarea/inputtextarea').then(m => m.Inputtextarea) },
  { path: 'components/card', loadComponent: () => import('./pages/card/card').then(m => m.Card) }
];