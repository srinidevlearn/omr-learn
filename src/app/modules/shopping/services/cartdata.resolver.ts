import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { JwtService } from './jwt.service';
import { ShoppingApiService } from './shopping-api.service';

@Injectable({
  providedIn: 'root'
})
export class CartdataResolver implements Resolve<boolean> {
  constructor(private api:ShoppingApiService,private token:JwtService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    let uId = this.token?.tokenPayload?.userId;
    return uId ? this.api.getUserCartItems(uId) : of([])
  }
}
