import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  nav_data="Data given in nav ..and mentioned in HTML and it takes through app.component. ";



  constructor() { }

  ngOnInit(): void {
  }
  shop_name:string= "e-Shopping Store";


}
