import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  defaultQty = 0;

  productDesc:any;
  @Input() set _productDesc(value:any){
    this.productDesc = value;
    this.defaultQty = value.quantity
  }

  constructor() {}

  ngOnInit(): void {}


  decreaseQty() {
    this.defaultQty = this.defaultQty - 1;
    if (this.defaultQty < 0) {
      this.defaultQty = 0;
    }
  }
  increaseQty() {
    this.defaultQty = this.defaultQty + 1;
    if (this.defaultQty >= 5) {
      this.defaultQty = 5;
    }
  }
}
