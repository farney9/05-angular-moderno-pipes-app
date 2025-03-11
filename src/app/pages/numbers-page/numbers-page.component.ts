import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
    imports: [
      CurrencyPipe,
      DecimalPipe,
      PercentPipe,
    ],
  templateUrl: './numbers-page.component.html',
})
export default class NumbersPageComponent {

  totalSells = signal(2433232.5567);
  percent = signal(0.4856);
}
