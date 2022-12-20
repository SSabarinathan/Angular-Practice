import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.css'],
})
export class SvgComponent implements OnInit {
  fillColor = 'rgb(255, 0, 0)';
  public name = 'Sabari';
 public name1='Nathan'
  changeColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.fillColor = `rgb(${r}, ${g}, ${b})`;
  }

  changeValue(){
    console.log("Change event");
  }
  inputData(){
    console.log("Input event got triggered!!");
  }

  constructor() {}

  ngOnInit(): void {}
}
