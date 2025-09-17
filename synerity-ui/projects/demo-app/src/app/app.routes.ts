import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
  { path: 'components/button', loadComponent: () => import('./pages/button/button').then(m => m.Button) },
  { path: 'components/inputtext', loadComponent: () => import('./pages/inputtext/inputtext').then(m => m.Inputtext) },
  { path: 'components/inputtextarea', loadComponent: () => import('./pages/inputtextarea/inputtextarea').then(m => m.Inputtextarea) },
  { path: 'components/card', loadComponent: () => import('./pages/card/card').then(m => m.Card) },
  { path: 'components/checkbox', loadComponent: () => import('./pages/checkbox/checkbox').then(m => m.Checkbox) },
  { path: 'components/radiobutton', loadComponent: () => import('./pages/radiobutton/radiobutton').then(m => m.Radiobutton) },
  { path: 'components/colorpicker', loadComponent: () => import('./pages/colorpicker/colorpicker').then(m => m.Colorpicker) },
  { path: 'components/select', loadComponent: () => import('./pages/select/select').then(m => m.Select) },
  { path: 'components/password', loadComponent: () => import('./pages/password/password').then(m => m.Password) },
  { path: 'components/inputnumber', loadComponent: () => import('./pages/inputnumber/inputnumber').then(m => m.Inputnumber) },
  { path: 'components/datepicker', loadComponent: () => import('./pages/datepicker/datepicker').then(m => m.Datepicker) },
  { path: 'components/slider', loadComponent: () => import('./pages/slider/slider').then(m => m.Slider) },
  { path: 'components/rating', loadComponent: () => import('./pages/rating/rating').then(m => m.Rating) },
  { path: 'components/toggleswitch', loadComponent: () => import('./pages/toggleswitch/toggleswitch').then(m => m.Toggleswitch) },
  { path: 'components/cascadeselect', loadComponent: () => import('./pages/cascadeselect/cascadeselect').then(m => m.Cascadeselect) },
  { path: 'components/floatlabel', loadComponent: () => import('./pages/floatlabel/floatlabel').then(m => m.Floatlabel) },
  { path: 'components/autocomplete', loadComponent: () => import('./pages/autocomplete/autocomplete').then(m => m.Autocomplete) },
  { path: 'components/inputmask', loadComponent: () => import('./pages/inputmask/inputmask').then(m => m.Inputmask) }
];