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
  { path: 'components/inputmask', loadComponent: () => import('./pages/inputmask/inputmask').then(m => m.Inputmask) },
  
  // High-Priority Components
  { path: 'components/table', loadComponent: () => import('./pages/table/table').then(m => m.Table) },
  { path: 'components/dialog', loadComponent: () => import('./pages/dialog/dialog').then(m => m.Dialog) },
  { path: 'components/tabs', loadComponent: () => import('./pages/tabs/tabs').then(m => m.TabsComponent) },
  { path: 'components/accordion', loadComponent: () => import('./pages/accordion/accordion').then(m => m.Accordion) },
  { path: 'components/tooltip', loadComponent: () => import('./pages/tooltip/tooltip').then(m => m.Tooltip) },
  { path: 'components/progressbar', loadComponent: () => import('./pages/progressbar/progressbar').then(m => m.Progressbar) },
  { path: 'components/badge', loadComponent: () => import('./pages/badge/badge').then(m => m.Badge) },
  { path: 'components/avatar', loadComponent: () => import('./pages/avatar/avatar').then(m => m.Avatar) },
  { path: 'components/chip', loadComponent: () => import('./pages/chip/chip').then(m => m.Chip) },
  { path: 'components/upload', loadComponent: () => import('./pages/upload/upload').then(m => m.Upload) },
  
  // Medium-Priority Components
  { path: 'components/panel', loadComponent: () => import('./pages/panel/panel').then(m => m.Panel) },
  { path: 'components/divider', loadComponent: () => import('./pages/divider/divider').then(m => m.Divider) },
  { path: 'components/fieldset', loadComponent: () => import('./pages/fieldset/fieldset').then(m => m.Fieldset) },
  { path: 'components/stepper', loadComponent: () => import('./pages/stepper/stepper').then(m => m.Stepper) },
  { path: 'components/toolbar', loadComponent: () => import('./pages/toolbar/toolbar').then(m => m.Toolbar) },
  { path: 'components/scrollpanel', loadComponent: () => import('./pages/scrollpanel/scrollpanel').then(m => m.ScrollPanel) },
  { path: 'components/splitter', loadComponent: () => import('./pages/splitter/splitter').then(m => m.Splitter) },
  { path: 'components/menu', loadComponent: () => import('./pages/menu/menu').then(m => m.Menu) }
];