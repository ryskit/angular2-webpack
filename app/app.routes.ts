import { provideRouter, RouterConfig } from '@angular/router';

import { FriendListComponent } from './friend-list.component';

const routes: RouterConfig = [
  { path: '',
    component: FriendListComponent },
  { path: 'friend-list',
    component: FriendListComponent }
];

export const AppRouterProviders = [
  provideRouter(routes)
];
