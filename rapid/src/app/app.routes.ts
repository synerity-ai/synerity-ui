import { Routes } from '@angular/router';
import { ComponentViewerComponent } from './components/component-viewer/component-viewer';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/components/button',
    pathMatch: 'full'
  },
  {
    path: 'components/:component',
    component: ComponentViewerComponent
  },
  {
    path: '**',
    redirectTo: '/components/button'
  }
];