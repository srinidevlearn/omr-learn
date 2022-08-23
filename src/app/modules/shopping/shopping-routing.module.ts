import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { InventoryFormComponent } from './components/inventory-form/inventory-form.component';
import { InventoryViewComponent } from './components/inventory-view/inventory-view.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProductDescComponent } from './components/product-desc/product-desc.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ShoopingRootComponent } from './components/shooping-root/shooping-root.component';
import { CartdataResolver } from './services/cartdata.resolver';
import { InventoryGuard } from './services/inventory.guard';
import { ProductdescResolver } from './services/productdesc.resolver';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'root', component: ShoopingRootComponent },
  {
    path: 'inventory',
    component: InventoryComponent,
    canActivate: [InventoryGuard],
    children: [
      { path: '', component: InventoryViewComponent },
      { path: 'form', component: InventoryFormComponent },
      { path: 'form/:id', component: InventoryFormComponent },
      { path: 'view', component: InventoryViewComponent },
    ],
  },
  {
    path: 'product-detail/:id',
    component: ProductDescComponent,
    resolve: { product_desc: ProductdescResolver },
  },
  { path: 'menu', component: MenuComponent,resolve: { userCartItems: CartdataResolver }, },
  { path: 'profile', component: ProfileComponent },
  {
    path: 'cart',
    component: CartComponent,
    resolve: { userCartItems: CartdataResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingRoutingModule {}
