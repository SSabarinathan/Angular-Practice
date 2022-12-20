import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
// <!-- component interaction -->

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  constructor( private userService : UserService) { }

  users: { name: string; job: string; age: string; photo: string }[]=[];

  ngOnInit(): void {
    this.users= this.userService.users;
  }
  ShowDetails(user: { name: string; job: string; age: string; photo: string }){
    this.userService.ShowUserDetails(user);


  }

}
