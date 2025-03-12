import { DatePipe, DecimalPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe,  } from '@angular/common';
import { Component, effect, signal } from '@angular/core';

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
}
