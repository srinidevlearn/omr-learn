import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  ecomsitelogo =
    'https://ouch-cdn2.icons8.com/v9tQerukt_ZRIn_4wqPGcLmlPCQway9C3MUD1AKfn10/rs:fit:485:456/wm:1:re:0:0:0.8/wmid:ouch/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNi9k/MDU5NDhhMS1hNjUw/LTRjZDMtYTVmNC02/MmNiNTgzZWRjYzUu/c3Zn.png';
  constructor() { }
@Input() cartCount:number|string = 0;
  ngOnInit(): void {
  }

  logout() {}

}
