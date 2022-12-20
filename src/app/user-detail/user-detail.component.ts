import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  // constructor(private userService: UserService) { }

  // user:{ name: string; job: string; age: string; photo: string }

  ngOnInit(): void {
    // this.userService.OnShowDetailsClicked.subscribe((data: { name: string; job: string; age: string; photo: string })=>{
    //   this.user= data;

    // })
  }

}
