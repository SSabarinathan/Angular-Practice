import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  //date
  public day = new Date();
  //number type
  num = 12235.34;
  num1 = -12.23;
  per = 9.9;
  name = 'sabarinathan aspire systems';

  obj = {
    name: 'Sabari',
    age: '21',
    location: 'Chennai',
  };
  arr = [1, 2, 3, 4, 5];

  //<!-- creating own pipes by appending  
  public greet = 'welcome to';
}
