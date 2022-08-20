import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shooping-root',
  templateUrl: './shooping-root.component.html',
  styleUrls: ['./shooping-root.component.scss']
})
export class ShoopingRootComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  naviagteTo(url:string){
    this.router.navigate(['shopping',url])
  }

}
