import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingRoutingModule } from './shopping-routing.module';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShoppingApiService } from './services/shopping-api.service';



@NgModule({
  declarations: [  
    LoginComponent
  ],
  imports: [
    CommonModule,ShoppingRoutingModule,ReactiveFormsModule
  ],
  providers:[ShoppingApiService]
})
export class ShoppingModule { }
