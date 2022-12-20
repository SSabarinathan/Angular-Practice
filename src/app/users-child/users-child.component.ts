import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-users-child',
  templateUrl: './users-child.component.html',
  styleUrls: ['./users-child.component.css']
})
export class UsersChildComponent implements OnInit {
//data passes through parent to child
  @Input() hero: string='';

  constructor() { }

  ngOnInit(): void {
  }

}
