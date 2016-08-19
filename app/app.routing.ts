import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }  from './dashboard.component';
import { HeroesComponent }     from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroAddComponent }    from './hero-add.component';
import { HeroEditComponent }   from './hero-edit.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'detail',
    component: HeroDetailComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
  {
    path: 'add',
    component: HeroAddComponent
  },
  {
    path: 'edit/:id',
    component: HeroEditComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);
