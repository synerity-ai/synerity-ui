import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'components',
    loadComponent: () => import('./pages/components/components.component').then(m => m.ComponentsComponent)
  },
  {
    path: 'components/:name',
    loadComponent: () => import('./pages/components/component-detail/component-detail.component').then(m => m.ComponentDetailComponent)
  },
  {
    path: 'getting-started',
    loadComponent: () => import('./pages/getting-started/getting-started.component').then(m => m.GettingStartedComponent)
  },
  {
    path: 'installation',
    loadComponent: () => import('./pages/installation/installation.component').then(m => m.InstallationComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
