import { provideRouter, RouterConfig } from '@angular/router';

import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';

const routes: RouterConfig = [
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full' },
  { path: 'heroes',
    component: HeroesComponent },
  { path: 'detail/add',
    component: HeroDetailComponent },
  { path: 'detail/:id',
    component: HeroDetailComponent },
];

export const AppRouterProviders = [
  provideRouter(routes)
];
