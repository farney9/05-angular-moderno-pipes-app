import { Component, signal } from '@angular/core';
import { heroes } from '../../data/heroes.data';
import { CanFlyPipe, HeroColorPipe, HeroCreatorPipe, HeroFilterPipe, HeroSortByPipe, HeroTextColorPipe, ToggleCasePipe } from '../../pipes';
import { TitleCasePipe } from '@angular/common';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-custom-page',
  imports: [
    ToggleCasePipe,
    CanFlyPipe,
    HeroColorPipe,
    HeroTextColorPipe,
    TitleCasePipe,
    HeroCreatorPipe,
    HeroSortByPipe,
    HeroFilterPipe,
  ],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {

  name = signal('fArNeY jImÉnEz');
  upperCase = signal(true);
  heroes = signal(heroes);
  sortBy = signal<keyof Hero | null>(null);
  searchQuery = signal('');

}
