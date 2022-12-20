import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  slogan: string="This data is stored by using 'String Interpolation' method. "

  newSlogan(){
    return 'This is new data that have stored by using Method(). '

  }

  image:string="https://previews.123rf.com/images/vectorpouch/vectorpouch1809/vectorpouch180900189/110754664-couple-riding-supermarket-shopping-cart-illustration-flat-cartoon-design-of-young-man-and-woman-or-g.jpg"


}
