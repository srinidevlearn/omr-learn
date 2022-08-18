import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoSortPipe } from './pipes/todo-sort.pipe';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { ApiService } from './service/api.service';
import { HttpClientModule } from '@angular/common/http';
import { OpacityControllerDirective } from './directive/opacity-controller.directive';


@NgModule({
  declarations: [
    //compnent&directives
    AppComponent,
    TodoComponent,
    TodoSortPipe,
    RegisterFormComponent,
    OpacityControllerDirective,
  ],
  imports: [BrowserModule, AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule],
  providers: [ApiService],
  bootstrap: [AppComponent],
  exports:[],
})
export class AppModule {}
