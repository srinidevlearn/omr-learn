import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { BehaviorSubject, from, of, ReplaySubject, Subject } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  registrationForm!: FormGroup;
  makeRegisterValid: boolean = false;
  successMessage:boolean = false;
  constructor(public fb: FormBuilder, public api: ApiService) {}

  ngOnInit(): void {
    this.initForms();
    this.registrationForm.valueChanges.subscribe((d) => {
      // console.log(this.registrationForm);
    });

    this.registrationForm.patchValue({
      email:'eve.holt@reqres.in',
      password:'pistol',
      username:'Srini'
    })
  }

  initForms() {
    this.registrationForm = this.fb.group({
      email: '',
      password: '',
      username: '',
    });
    this.samplecoldObservable();
    this.sampleHotObservable();
    this.exampleForBehaviourSubject();
    this.exampleForReplaySubject()
  }
  register() {
    this.successMessage = false;
    let { email, password } = this.registrationForm.value;
    //  {email:email,password:password} // es 5 way
    //{email,password} //es 6 way
    this.api.registration({ email, password }).subscribe((d:any) => {
      console.log(d);
      if(d?.token) this.successMessage = true
    });
  }

  samplecoldObservable() {
    const data$ = of([1, 2, 3, 4, 5]);
    data$.subscribe((d) => {
      // console.log(d);
    });
  }

  sampleHotObservable() {
    let data$ = new Subject();

    // let data$ = data.asObservable();
    data$.next([1, 2, 3, 4]);
    data$.subscribe((d) => {
      console.log(d);
    });


  }
  exampleForBehaviourSubject() {
    let data$ = new BehaviorSubject<any>([]); // last value present;

    // let data$ = data.asObservable();
    data$.next([1, 2, 3, 4]);
    data$.subscribe((d) => {
      // console.log(d);
    });


  }

  exampleForReplaySubject() {
    let data$ = new ReplaySubject<any>(3); // till last  mentioned numbers we can access the stream;
    // let data$ = data.asObservable();
    data$.next([1, 2, 3, 4,'fromReplaySub 1']);
    data$.next([1, 2, 3,4,'fromReplaySub 2']);
    data$.next([1, 2, 3,4,'fromReplaySub 3']);
    data$.next([1, 2, 3,4,'fromReplaySub 4']);



    data$.subscribe((d) => {
      console.log(d);
    });


  }
}
