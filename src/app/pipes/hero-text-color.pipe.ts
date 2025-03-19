import { Pipe, PipeTransform } from '@angular/core';
import { HeroColor, HeroColorMap } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroTextColor'
})

export class HeroTextColorPipe implements PipeTransform {
  transform(value: HeroColor): string {
    return HeroColorMap[value];
  }
}
