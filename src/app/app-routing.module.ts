import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { TodoComponent } from './components/todo/todo.component';
const routes: Routes=[];
// const routes: Routes = [
//   {path:'todo',component:TodoComponent},
//   {path:'register',component:RegisterFormComponent}

// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
