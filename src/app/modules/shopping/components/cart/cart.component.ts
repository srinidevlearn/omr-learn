import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { JwtService } from '../../services/jwt.service';
import { ShoppingApiService } from '../../services/shopping-api.service';
import { take, delay, tap } from 'rxjs/operators';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartCountValues = 0;
  cartItems: any = [];
  constructor(
    private actRoute: ActivatedRoute,
    private api: ShoppingApiService,
    private token: JwtService
  ) {
    let cartItems = this.actRoute.snapshot.data['userCartItems'];
    cartItems = cartItems.map((cartItem: any) => {
      cartItem['loading'] = false;
      return cartItem;
    });
    this.cartItems = [...cartItems];
    this.cartCountValues = cartItems.length;
  }

  ngOnInit(): void {}

  deleteItem(item: any) {
    let { quantity, loading } = item;
    if (quantity) {
      quantity = quantity - 1;
      quantity = quantity <= 0 ? 0 : quantity;
    }
    loading = true;
    this.updateActualCartValues({ ...item, loading });

    let { userId } = this.token?.tokenPayload;
    let cartData = { userId, productId: item.product.id, quantity };
    if (quantity === 0) {
      this.api
        .deleteCart(item.id)
        .pipe(take(1), delay(1000))
        .subscribe(
          (d) => {
            loading = false;

            this.updateActualCartValues({ ...item, quantity, loading });
            // this.toast.success(d);
            // this.initShoppingItems();
          },
          (e) => {
            // this.toast.error(e.toString());
          }
        );
    } else {
      this.api
        .updateCart(cartData)
        .pipe(
          take(1),
          delay(1000),
          tap((d) => {
            console.log(cartData, item);
          })
        )
        .subscribe(
          (d) => {
            loading = false;
            item = { ...item, quantity, loading };
            // console.log(d)
            // this.toast.success(d);
            // this.initShoppingItems();
            this.updateActualCartValues(item);
          },
          (e) => {
            // this.toast.error(e.toString());
          }
        );
    }
  }

  deletAllItem(item:any){
    let { userId } = this.token?.tokenPayload;
    let cartData = { userId, productId: item.product.id };
    this.api
    .deleteCart(item.id)
    .pipe(take(1), delay(1000))
    .subscribe(d=>{
      this.updateActualCartValues({...item,quantity:0});
    })
  }
  addToItem(item: any) {
    let { quantity, loading } = item;
    if (quantity) {
      quantity = quantity + 1;
      quantity = quantity >= 5 ? 5 : quantity;
    }
    loading = true;
    this.updateActualCartValues({ ...item, loading });

    // if (item.quantity !== quantity) {

    let { userId } = this.token?.tokenPayload;
    let cartData = { userId, productId: item.product.id, quantity };
    this.api
      .updateCart(cartData)
      .pipe(
        take(1),
        delay(1000),
        tap((d) => {
          console.log(cartData, item);
        })
      )
      .subscribe(
        (d) => {
          loading = false;
          item = { ...item, quantity, loading };
          // console.log(d)
          // this.toast.success(d);
          // this.initShoppingItems();
          this.updateActualCartValues(item);
        },
        (e) => {
          // this.toast.error(e.toString());
        }
      );
    // }
  }

  updateActualCartValues(item: any) {
    this.cartItems = this.cartItems
      .map((cartItem: any) => {
        if (item?.id && cartItem.id === item.id) {
          return item;
        }
        return cartItem;
      })
      .filter((cartItem: any) => {
        console.log(cartItem);
        if (cartItem.quantity !== 0) {
          return cartItem;
        }
        return;
      });
  }
}
