import { Pipe, PipeTransform } from '@angular/core';
import { HeroColor } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroColor'
})

export class HeroColorPipe implements PipeTransform {
  transform(value: HeroColor): string {
    return HeroColor[value];
  }
}
