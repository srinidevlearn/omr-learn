import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-learn';

  toggleTodoList: boolean = false;

  currentView: 'todo' | 'register' = 'todo';
  viewState:'open'|'close' = 'close'

  setCardTitle = 'My Todo 22';

  toggleMenuState(){
    this.viewState  = this.viewState === 'open' ? 'close' :'open'
  }
  captureTodo(event: any) {
    console.log(event);
  }
  constructor() {
    console.log(this.title);
  }

  showAndHideTodo() {
    this.toggleTodoList = !this.toggleTodoList;
  }

  loadTodo() {
    this.currentView = 'todo'
  }
  loadRegisterFrom() {
    this.currentView = 'register'
  }
}
