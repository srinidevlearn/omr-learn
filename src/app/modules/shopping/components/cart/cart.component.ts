import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartCountValues=0;
  cartItems:any = [];
  constructor( private actRoute: ActivatedRoute) {
    let cartItems = this.actRoute.snapshot.data['userCartItems'];
    this.cartItems = [...cartItems];
    this.cartCountValues = cartItems.length
   }

  ngOnInit(): void {
  }

  deleteItem(item:any){
    console.log(item);
  }
addToItem(item:any){
  console.log(item)
}
}
