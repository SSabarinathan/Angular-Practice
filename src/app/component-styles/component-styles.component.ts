import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-styles',
  templateUrl: './component-styles.component.html',
  styleUrls: ['./component-styles.component.css'],
  styles: [
    `
      h1 {
        color: red;
      }
    `,
  ],
})
export class ComponentStylesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
