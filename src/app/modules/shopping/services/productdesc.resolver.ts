import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ShoppingApiService } from './shopping-api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductdescResolver implements Resolve<any> {
  constructor(private api:ShoppingApiService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    let productId = route.params['id']
    return this.api.getSingleProduct(productId);
  }
}
