import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})

export class CanFlyPipe implements PipeTransform {
  transform(flyValue: boolean): string {
    return flyValue ? 'Can Fly' : `Can't Fly`;
  }
}
