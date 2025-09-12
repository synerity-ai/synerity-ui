import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
  { path: 'components/button', loadComponent: () => import('./pages/button/button').then(m => m.Button) },
  { path: 'components/input', loadComponent: () => import('./pages/input/input').then(m => m.Input) },
  { path: 'components/card', loadComponent: () => import('./pages/card/card').then(m => m.Card) },
  { path: 'components/forms', loadComponent: () => import('./pages/forms/forms').then(m => m.Forms) },
  { path: 'components/data', loadComponent: () => import('./pages/data/data').then(m => m.Data) },
  { path: 'components/panels', loadComponent: () => import('./pages/panels/panels').then(m => m.Panels) },
  { path: 'components/inputtext', loadComponent: () => import('./pages/inputtext/inputtext').then(m => m.Inputtext) },
  { path: 'components/checkbox', loadComponent: () => import('./pages/checkbox/checkbox').then(m => m.Checkbox) },
  { path: 'components/select', loadComponent: () => import('./pages/select/select').then(m => m.Select) },
  { path: 'components/textarea', loadComponent: () => import('./pages/textarea/textarea').then(m => m.Textarea) },
  { path: 'components/radiobutton', loadComponent: () => import('./pages/radiobutton/radiobutton').then(m => m.Radiobutton) },
  { path: '**', redirectTo: '/home' }
];
