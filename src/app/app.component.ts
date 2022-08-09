import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-learn';

  toggleTodoList:boolean = false;


  setCardTitle = 'My Todo 22';


  captureTodo(event: any) {
    console.log(event);
  }
  constructor() {
    console.log(this.title);
  }

  showAndHideTodo(){
    this.toggleTodoList = !this.toggleTodoList;   
  }
}
