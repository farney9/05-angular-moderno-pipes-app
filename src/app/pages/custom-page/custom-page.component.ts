import { Component, signal } from '@angular/core';
import { heroes } from '../../data/heroes.data';
import { CanFlyPipe, HeroColorPipe, ToggleCasePipe } from '../../pipes';

@Component({
  selector: 'app-custom-page',
  imports: [
    ToggleCasePipe,
    CanFlyPipe,
    HeroColorPipe,
  ],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {

  name = signal('fArNeY jImÉnEz');
  upperCase = signal(true);
  heroes = signal(heroes);

}
