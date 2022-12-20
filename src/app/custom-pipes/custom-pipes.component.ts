import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

// @Component({
//   selector: 'app-custom-pipes',
//   templateUrl: './custom-pipes.component.html',
//   styleUrls: ['./custom-pipes.component.css']
// })
@Pipe({
  name: 'append',
})
export class CustomPipesComponent implements PipeTransform {
  transform(value: string) {
    return value + ' Chennai';
  }

  constructor() {}

  ngOnInit(): void {}
}
