import { provideRouter, RouterConfig } from '@angular/router';

import { HeroesComponent } from './heroes.component';

const routes: RouterConfig = [
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full' },
  { path: 'heroes',
    component: HeroesComponent }
];

export const AppRouterProviders = [
  provideRouter(routes)
];
