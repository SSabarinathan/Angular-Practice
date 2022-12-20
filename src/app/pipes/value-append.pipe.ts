import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'append',
})
export class ValueAppendPipe implements PipeTransform {
  transform(value: string) {
    return value + ' Chennai';
  }
}
