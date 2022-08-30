import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPageComponent } from './layout-page/layout-page.component';
import { ContentRoutingModule } from './content-projection-routing.module';



@NgModule({
  declarations: [
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule
  ],
  exports:[LayoutPageComponent]
})
export class ContentProjectionModule { }
