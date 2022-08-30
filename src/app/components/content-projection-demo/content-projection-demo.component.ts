import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-projection-demo',
  templateUrl: './content-projection-demo.component.html',
  styleUrls: ['./content-projection-demo.component.scss']
})
export class ContentProjectionDemoComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
  }

  // below mentioned two lifecycle in angular ties upto content projection
  ngAfterContentInit(){} 
  ngAfterContentChecked(){}

}
