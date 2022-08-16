import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DummyComponent } from './components/dummy/dummy.component';
import { LazyLoadingRoutingModule } from './lazy-loading-routing.module';



@NgModule({
  declarations: [
    
    DummyComponent
  ],
  imports: [
    CommonModule,LazyLoadingRoutingModule
  ]
})
export class LazyLoadingModule { }
