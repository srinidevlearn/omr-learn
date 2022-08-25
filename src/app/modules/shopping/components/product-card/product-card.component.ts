import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {  debounce, debounceTime } from 'rxjs/operators';

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

  updateCartQuantity$ = new BehaviorSubject<number>(this.defaultQty)

  canEmit = false;


  @Output() trackCart = new EventEmitter();  

  constructor() {}

  ngOnInit(): void {


    this.updateCartQuantity$.asObservable().pipe(debounceTime(1 *1000)).subscribe(d=>{
      if(this.canEmit)this.trackCart.emit({...this.productDesc,quantity:this.defaultQty})
    })
  }

  


  decreaseQty() {
    this.defaultQty = this.defaultQty - 1;
    if (this.defaultQty < 0) {
      this.defaultQty = 0;
    }
    this.updateCartQuantity$.next(this.defaultQty);
    this.canEmit = true;
  }
  increaseQty() {
    this.defaultQty = this.defaultQty + 1;
    if (this.defaultQty >= 5) {
      this.defaultQty = 5;
    }
    this.updateCartQuantity$.next(this.defaultQty);
    this.canEmit = true
  }
}
