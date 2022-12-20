import { Component, ViewEncapsulation } from '@angular/core';
import { UserService } from './Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService],
  // encapsulation:ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = '"It is the content added now!"';
  message =
    'Binding the data in HTML with Angular , Data Binding small example ';
  clicked: boolean = false;

  //////////////////////////////////////////////////////////////////////////////////////////////
  // property binding
  image =
    'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L2pvYjY4Ni0yODAtcC5wbmc.png?s=orLE2A6t9qZsN3PIPIuvo-8b4hZk0l2WZiNMqWHaN9o';

  //Event binding
  count = 0;
  increment() {
    this.count += 1;
  }
  //Two way binding

  vehicleType!: string;

  //attribute binding
  columnSpan: number = 2;

  firstName: string = 'Sabarinathan';
  lastName: string = 'Sivakumar';
  gender: string = 'Male';
////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //for component Interaction
  constructor(private userService: UserService) {}
  //data passing through parent to child @input
  data = 'Sabari..Name';

  //data passing through child to parent @output
  name: string = '';

  parentFunction(data: { name: string }) {
    // console.log(data);
    this.name = data.name;
    //doubt on this for transfering data
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////

  src_image =
    'https://media.istockphoto.com/id/1124567572/vector/cute-flat-sun-icon.jpg?s=612x612&w=0&k=20&c=_ekkRvw-dX-3Dt-jH3tG8wonvYJ1NrBHEAEDFm4cGVc=';

  ////////////////////////////////////////////////////////////////
  //template reference variable
  getVal(items: any) {
    console.log(items);
  }
}
