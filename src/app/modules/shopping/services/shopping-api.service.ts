import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ShoppingApiService {
  // private baseurl = 'http://localhost:3000/api/';
  private baseurl = '/api/';


  constructor(private http: HttpClient) {}

  login(body: { email: string; password: string }): Observable<any> {
    return this.http
      .post(this.baseurl + 'auth/login', body, {
        headers: { 'Access-Control-Allow-Origin': '*' },
      })
      .pipe(map(this.returnOnlyData), catchError(this.errorHandler));
  }

  getAllProducts(){
    let token = localStorage.getItem('my-app-token');
    return this.http.get(this.baseurl + 'product/get?all=true',{
      // headers:{'Authorization':`Bearer ${token}`}
    }).pipe(map(this.returnOnlyData),catchError(this.errorHandler));
  }

  getSingleProduct(pId:string){
    let token = localStorage.getItem('my-app-token');
    let params =  new HttpParams().set('id', pId)//.set('sort','DESC')
    return this.http.get(this.baseurl + 'product/get?',{
      params,
      // headers:{'Authorization':`Bearer ${token}`}
    }).pipe(map(this.returnOnlyData),catchError(this.errorHandler));
  }

  addNewProduct(product:any){
    let token = localStorage.getItem('my-app-token');
    return this.http
    .post(this.baseurl + 'product/new', product, {
      // headers:{'Authorization':`Bearer ${token}`}
    }).pipe(map(this.returnOnlyData),catchError(this.errorHandler));
  }

  updateNewProduct(product:any){
    let token = localStorage.getItem('my-app-token');
    return this.http
    .put(this.baseurl + 'product/update', product, {
      // headers:{'Authorization':`Bearer ${token}`}
    }).pipe(map(this.returnOnlyData),catchError(this.errorHandler));
  }

  getUserCartItems(userId:string){
    let token = localStorage.getItem('my-app-token');
    return this.http
    .get(this.baseurl + 'cart/getUserCart/'+userId, {
      // headers:{'Authorization':`Bearer ${token}`}
    }).pipe(map(this.returnOnlyData),catchError(this.errorHandler));
  }

  updateCart(body:any){
    let token = localStorage.getItem('my-app-token');
    return this.http.post(this.baseurl+'/cart/addToCart',body,{
      // headers: {'Authorization':'Bearer '+token}
    }).pipe(map(this.returnOnlyData),catchError(this.errorHandler));
  }

  deleteCart(cartId:string){
    let token = localStorage.getItem('my-app-token');
    return this.http.delete(this.baseurl+'cart/delete/'+cartId,{
      // headers: {'Authorization':'Bearer '+token}
    }).pipe(map(this.returnOnlyData),catchError(this.errorHandler));
  }
  returnOnlyData(res: any) {
    return res?.data ? res.data : null;
  }

  errorHandler(error: any) {
    console.error(error); // future snackbar or toaster
    return EMPTY;
  }
}
