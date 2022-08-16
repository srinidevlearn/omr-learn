import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DummyComponent } from './components/dummy/dummy.component';
import { ShoppingRoutingModule } from './shopping-routing.module';



@NgModule({
  declarations: [
    
    DummyComponent
  ],
  imports: [
    CommonModule,ShoppingRoutingModule
  ]
})
export class ShoppingModule { }
