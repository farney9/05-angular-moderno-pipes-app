import { DecimalPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe,  } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  imports: [
    LowerCasePipe,
    UpperCasePipe,
    TitleCasePipe,
    DecimalPipe,
  ],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent {
  nameLower = signal('farney');
  nameUpper = signal('FARNEY');
  fullName = signal('fArNeY jImEnEz');
}
