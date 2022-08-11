import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseURL = 'https://reqres.in/api/';

  constructor(public http: HttpClient) {}

  registration(data: { email: string; password: string }) {
    return this.http.post(this.baseURL + 'register',data); // always return as an observable (type cold observable)
  }
}
