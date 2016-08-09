import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRouterProviders } from './app.routes';

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  AppRouterProviders,
])
.catch(err => console.log(err));
