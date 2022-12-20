import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div><br> <h3>""" It is the small data that have filled in template not in templateURL. """
    <div class="close"> <button class="btn" >X</button></div>
    </h3></div>`,
  styleUrls: ['./notification.component.css'],
  styles: [`h1{
    color: red
  },h2{

  }`]
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
