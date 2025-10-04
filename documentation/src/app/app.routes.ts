import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'theme-test',
    loadComponent: () => import('./components/theme-test/theme-test-v2.component').then(m => m.ThemeTestV2Component)
  },
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
    path: 'theme-config',
    loadComponent: () => import('./pages/theme-config/theme-config').then(m => m.ThemeConfigComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
