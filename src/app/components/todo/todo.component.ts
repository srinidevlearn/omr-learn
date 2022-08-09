import { Component, Input, OnChanges, OnInit, Output, EventEmitter, SimpleChanges, OnDestroy } from '@angular/core';

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

  addTask:string='srini asdadsasd'

  todo:string[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log('initialized','ngOnInit')
  }
  ngOnChanges(change:SimpleChanges){
    console.log('onChange',change);
  }

  ngOnDestroy(){
    this.todo = [];
    this.addTask = ''
    console.log('ngOnDestroy')
  }
  addNewTask(){
    this.todo.push(this.addTask);
    this.addTask = '';
    this.sendToDoList.emit(this.todo)
  }

  deleteTask(index:number){
    this.todo.splice(index,1)
  }

}
