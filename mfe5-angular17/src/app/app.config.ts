import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { MFE5_ROUTES } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(MFE5_ROUTES)],
};
