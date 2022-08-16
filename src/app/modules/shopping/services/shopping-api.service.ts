import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ShoppingApiService {
  private baseurl = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) {}

  login(body: { email: string; password: string }): Observable<any> {
    return this.http
      .post(this.baseurl + 'auth/login', body, {
        headers: { 'Access-Control-Allow-Origin': '*' },
      })
      .pipe(map(this.returnOnlyData), catchError(this.errorHandler));
  }

  returnOnlyData(res: any) {
    return res?.data ? res.data : null;
  }

  errorHandler(error: any) {
    console.error(error); // future snackbar or toaster
    return EMPTY;
  }
}
