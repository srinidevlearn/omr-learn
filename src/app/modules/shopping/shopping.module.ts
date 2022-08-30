import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingRoutingModule } from './shopping-routing.module';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShoppingApiService } from './services/shopping-api.service';
import { ShoopingRootComponent } from './components/shooping-root/shooping-root.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProfileComponent } from './components/profile/profile.component';
import { InventoryFormComponent } from './components/inventory-form/inventory-form.component';
import { InventoryViewComponent } from './components/inventory-view/inventory-view.component';
import { JwtService } from './services/jwt.service';
import { InventoryGuard } from './services/inventory.guard';
import { ProductDescComponent } from './components/product-desc/product-desc.component';
import { ProductdescResolver } from './services/productdesc.resolver';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CartComponent } from './components/cart/cart.component';
import { HeaderComponent } from './components/header/header.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/token.interceptor';
import { SumTotalPipe } from './pipes/sum-total.pipe';



// @Injectable()
// class A{
//   public fName; public lName;
//   constructor(fName:string,lName:string){
//     this.fName = fName;
//     this.lName = lName;

//   }
//   fullName(){
//     return `${this.fName} ${this.lName}`
//   }
// }
// @Injectable()
// class B{}

@NgModule({
  declarations: [
    LoginComponent,
    ShoopingRootComponent,
    InventoryComponent,
    MenuComponent,
    ProfileComponent,
    InventoryFormComponent,
    InventoryViewComponent,
    ProductDescComponent,
    ProductCardComponent,
    CartComponent,
    HeaderComponent,
    SumTotalPipe,
  ],
  imports: [CommonModule, ShoppingRoutingModule, ReactiveFormsModule],
  providers: [
    ShoppingApiService,
    JwtService,
    InventoryGuard,
    ProductdescResolver,
  ],
})
export class ShoppingModule {}