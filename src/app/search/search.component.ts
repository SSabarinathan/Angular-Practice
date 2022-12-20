import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  public style = {
    border: '10px solid black',
  };
  constructor() {}

  ngOnInit(): void {}

  searchValue: string = '';

  changeSearchValue(data: any) {
    this.searchValue = data.target.value;
  }
  //for ngstyle
  condition = true;
  //for ngModel
}
