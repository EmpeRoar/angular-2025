import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAuth0 } from '@auth0/auth0-angular';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideAuth0({
      domain: 'dev-aqpzdui6.auth0.com',
      clientId: 'spV2Tff0nDraucXKanjB5rp0HJHjhBCg',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ]
};
