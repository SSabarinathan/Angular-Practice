import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//eventemitter helpus to call parent from child
@Component({
  selector: 'app-user-parent',
  templateUrl: './user-parent.component.html',
  styleUrls: ['./user-parent.component.css'],
})
export class UserParentComponent implements OnInit {
  @Output() parentFunction: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  
  sendData() {
    this.parentFunction.emit({ name: ' Sabari nathan' });
  }
}
