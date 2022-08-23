import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingApiService } from '../../services/shopping-api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit, OnDestroy {
  products = [];
  cartItems:any = {};
  loader: boolean = true;
  ecomsitelogo =
    'https://ouch-cdn2.icons8.com/v9tQerukt_ZRIn_4wqPGcLmlPCQway9C3MUD1AKfn10/rs:fit:485:456/wm:1:re:0:0:0.8/wmid:ouch/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNi9k/MDU5NDhhMS1hNjUw/LTRjZDMtYTVmNC02/MmNiNTgzZWRjYzUu/c3Zn.png';
  constructor(private api: ShoppingApiService, private router: Router,private actRoute:ActivatedRoute) {
    this.modifyCartItem();
    console.log(this.cartItems)

  }
  productsubscription: any;
  ngOnInit(): void {
    this.getProducts();
    
  }

  logout() {}

  modifyCartItem(){
    let data = this.actRoute.snapshot.data['userCartItems'];
    data.forEach((item:any) => {
      let pId = item.product.id;
        this.cartItems[pId] = item;
    });
  }

  getProducts() {
    this.loader = true;
    this.productsubscription = this.api
      .getAllProducts()
      .pipe()
      .subscribe((d) => {
        this.loader = false;
        if(d && d.length>0){

          this.products = d.map((i:any)=>{
            i.quantity = 0;
            if(this.cartItems[i.id]){
              i.quantity = this.cartItems[i.id]['quantity']
            }
            return i;
          })
        }
      });
  }

  ngOnDestroy(): void {
    if (this.productsubscription) this.productsubscription.unsubscribe();
  }
}
