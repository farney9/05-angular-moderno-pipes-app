import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { LocationStrategy, HashLocationStrategy, registerLocaleData } from '@angular/common';

import localeEs from '@angular/common/locales/es-CO';
import localeFr from '@angular/common/locales/fr';
import { LocaleService } from './services/locale.service';

registerLocaleData(localeEs, 'es');
registerLocaleData(localeFr, 'fr');

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    //HashStrategy
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    {
      provide: LOCALE_ID,
      // useValue: 'es'
      // Sirve para cambiar el idioma de la aplicación de forma dinámica
      deps: [LocaleService],
      useFactory: (localeService: LocaleService) => localeService.getLocale
    },
  ]};
