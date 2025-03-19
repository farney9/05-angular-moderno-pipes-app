import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase' // 'farney' | toggleCase
})
export class ToggleCasePipe implements PipeTransform {
  transform(value: string, upper: boolean = true): string {
    return upper ? value.toUpperCase() : this.toTitleCase(value);
  }

  private toTitleCase(value: string): string {
    return value.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
    });
  }
}
