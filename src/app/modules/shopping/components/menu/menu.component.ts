import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtService } from '../../services/jwt.service';
import { ShoppingApiService } from '../../services/shopping-api.service';
import { take, switchMap,delay } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit, OnDestroy {
  products = [];
  cartItems: any = {};
  loader: boolean = true;
  cartCountValues = 0;

  constructor(
    private api: ShoppingApiService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private token: JwtService
  ) {
    this.modifyCartItem();
  }
  productsubscription: any;
  ngOnInit(): void {
    this.getProducts();
  }

  initShoppingItems() {
    let { userId } = this.token?.tokenPayload;
    this.api
      .getUserCartItems(userId)
      .pipe(
        switchMap((d) => {
          this.modifyCartItem(d);
          console.log(this.cartItems);
          return this.api.getAllProducts().pipe(take(1));
        }),
        take(1)
      )
      .subscribe((d) => {
        this.loader = false;
        if (d && d.length > 0) {
          this.products = d.map((i: any) => {
            i.quantity = 0;
            if (this.cartItems[i.id]) {
              i.quantity = this.cartItems[i.id]['quantity'];
              if (this.cartItems[i.id]['id'])
                i.cartId = this.cartItems[i.id]['id'];
            }
            return i;
          });
        }
      });
  }

  modifyCartItem(cartData?: any) {
    let data = cartData
      ? cartData
      : this.actRoute.snapshot.data['userCartItems'];
    this.cartCountValues = data.length;
    data.forEach((item: any) => {
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
        if (d && d.length > 0) {
          this.products = d.map((i: any) => {
            i.quantity = 0;
            if (this.cartItems[i.id]) {
              i.quantity = this.cartItems[i.id]['quantity'];
              if (this.cartItems[i.id]['id'])
                i.cartId = this.cartItems[i.id]['id'];
            }
            return i;
          });
        }
      });
  }
  handleCartItems(e: any) {
    let { userId } = this.token?.tokenPayload;
    let cartData = { userId, productId: e.id, quantity: e.quantity };

    if (e && e?.quantity && e.quantity > 0)
      this.api
        .updateCart(cartData)
        .pipe(take(1),delay(1000))
        .subscribe((d) => {
          // this.initShoppingItems();
        });

    if (e && e.quantity === 0 && e?.cartId)
      this.api
        .deleteCart(e.cartId)
        .pipe(take(1),delay(1000))
        .subscribe((d) => {
          // this.initShoppingItems();
        });
  }

  ngOnDestroy(): void {
    if (this.productsubscription) this.productsubscription.unsubscribe();
  }
}
