import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentProjectionDemoComponent } from './components/content-projection-demo/content-projection-demo.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { TodoComponent } from './components/todo/todo.component';
const routes: Routes = [
  { path: 'todo', component: TodoComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: 'content-projection-demo', component: ContentProjectionDemoComponent,children:[
    { path: 'todo', component: TodoComponent },
    { path: 'register', component: RegisterFormComponent },

  ] },


  {
    path: 'shopping',
    loadChildren: () =>
      import('./modules/shopping/shopping.module').then(
        (m) => m.ShoppingModule
      ),
  },
  {
    path: 'content-projection',
    loadChildren: () =>
      import('./modules/content-projection/content-projection.module').then(
        (m) => m.ContentProjectionModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
