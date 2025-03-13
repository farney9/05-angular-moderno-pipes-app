import { DatePipe, DecimalPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe,  } from '@angular/common';
import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { Locale, LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-basic-page',
  imports: [
    LowerCasePipe,
    UpperCasePipe,
    TitleCasePipe,
    DatePipe,
  ],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent {

  localeService = inject(LocaleService);
  currentLocale = signal(inject(LOCALE_ID));

  nameLower = signal('farney');
  nameUpper = signal('FARNEY');
  fullName = signal('fArNeY jImEnEz');

  customDate = signal(new Date());

  tickingDateEffect = effect((onCleanup) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
      console.log('Ticking date effect');
    }, 1000);

    onCleanup(() => {
      clearInterval(interval);
      console.log('Ticking date effect cleaned up');
    })
  });

  changeLanguage(locale: Locale) {

    console.log({locale});

    this.localeService.changeLocale(locale);
  }



}
