import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

import { ShoppingApiService } from '../../services/shopping-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  imgURL =
    'https://images.unsplash.com/photo-1576072446584-4955dfe17b86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

  loginForm!: FormGroup;

  get emailControl() {
    return this.loginForm.get('email');
  }

  get passwordControl() {
    return this.loginForm.get('password');
  }

  loginApiSubscription:any;

  constructor(private fb: FormBuilder,private api:ShoppingApiService,private router:Router) {}

  ngOnInit(): void {
    this.initLoginForm();
    this.loginForm.patchValue({
      email: 'srini@gmail.com',
      password: '123SD',
    });
  }

  initLoginForm() {
    this.loginForm = this.fb.group({
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(10),
        ],
      ],
    });
  }

  login(){
    this.api.login(this.loginForm.value).pipe(take(1)).subscribe((data)=>{
      localStorage.setItem('my-app-token',data.token)
      if(data.token){
        this.router.navigate(['shopping','root'])
      }
    })
  }

  ngOnDestroy(){
    // if(this.loginApiSubscription) this.loginApiSubscription.unsubscribe()
  }
}
