import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css']
})
export class LifecycleHooksComponent implements OnInit {

  @Input() value!:string;
  constructor() { }

  ngOnInit():void {
    console.log('Component Initialized in Lifecycle Hooks-OnInit');

  }

}
