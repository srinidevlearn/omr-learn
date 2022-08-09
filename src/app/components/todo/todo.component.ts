import { Component, Input, OnChanges, OnInit, Output, EventEmitter, SimpleChanges, OnDestroy } from '@angular/core';
import { IToDo } from 'src/app/interface/todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit, OnChanges,OnDestroy{
// Todo requirement
  // input box
  // add button
  // each item should be displayed along with delete icon


  // pipes
  // service
  // change todo datastructure

  @Input() cardTitle:string = '';
  @Output() sendToDoList = new EventEmitter<any>();

  task:string=''

  todo:IToDo[] = [];

  sortBy:'complete'|'created'|null = null

  constructor() { }

  ngOnInit(): void {
    console.log('initialized','ngOnInit');
    this.getStorage();
  }
  ngOnChanges(change:SimpleChanges){
    console.log('onChange',change);
  }

  ngOnDestroy(){
    this.todo = [];
    this.task = ''
    console.log('ngOnDestroy')
  }
  addNewTask(){
    // this.todo.push(this.task);

    let todoItem:IToDo = {
      task:this.task,
      time:Date.now(), // 1660010554
      isCompleted:false,
    }
    this.task = '';
    // this.todo.push(todoItem);
    this.todo = [...this.todo,todoItem];
    this.updateStorage();
  }

  markComplete(item:IToDo){
    this.todo = this.todo.map(todoItem=>{
      if(item.time === todoItem.time){
        todoItem.isCompleted = !todoItem.isCompleted
      }
      return todoItem;
    });
    this.updateStorage()
  }

  deleteTask(item:IToDo){
    this.todo = this.todo.filter((todoItem:IToDo)=>{
      if(item.time !== todoItem.time) return todoItem;
      return;
    });
    this.updateStorage();
  }

  refresh(){
    this.sortBy= null
  }
  sortByCompleteAction(){
    this.sortBy = 'complete'
  }
  sortByCreatedAction(){
    this.sortBy = 'created'
  }

  getStorage(){
    try {
      let storageData:any = localStorage.getItem('my-todo')
      this.todo = storageData ? JSON.parse(storageData) :[]
    } catch (error) {
      
    }
  }
  updateStorage(){
    localStorage.setItem('my-todo',JSON.stringify(this.todo))
  }

}
