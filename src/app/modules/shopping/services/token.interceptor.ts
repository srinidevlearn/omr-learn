import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (localStorage.getItem('my-app-token')) {
      let token = localStorage.getItem('my-app-token');
      request = request.clone({
        setHeaders: { Authorization: 'Bearer ' + token },
      });
    }

    return next.handle(request);
  }
}
