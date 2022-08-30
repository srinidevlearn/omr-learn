import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoSortPipe } from './pipes/todo-sort.pipe';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { ApiService } from './service/api.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { OpacityControllerDirective } from './directive/opacity-controller.directive';
import { TokenInterceptor } from './modules/shopping/services/token.interceptor';
import { HotToastModule } from '@ngneat/hot-toast';
import { ContentProjectionDemoComponent } from './components/content-projection-demo/content-projection-demo.component';
import { ContentProjectionModule } from './modules/content-projection/content-projection.module';

@NgModule({
  declarations: [
    //compnent&directives
    AppComponent,
    TodoComponent,
    TodoSortPipe,
    RegisterFormComponent,
    OpacityControllerDirective,
    ContentProjectionDemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ContentProjectionModule,
    HttpClientModule,
    HotToastModule.forRoot({
      position:'top-right',
      icon:'🛒'
    }),
  ],
  providers: [
    ApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor, // resolution modifiers
      multi:true
    },
  ],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
