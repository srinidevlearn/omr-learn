import { Pipe, PipeTransform } from '@angular/core';
import { IToDo } from '../interface/todo.interface';

@Pipe({
  name: 'todoSort',
})
export class TodoSortPipe implements PipeTransform {
  transform(value: any, sortBy?: 'complete' | 'created' | null): any {
    if (!sortBy) return this.sortByTimeDesc(value);
    if (sortBy === 'complete') return this.sortByComplete(value);
    if (sortBy === 'created') return this.sortByCreated(value);

    return;
  }

  sortByTimeDesc(arr: IToDo[]) {
    return arr.sort((a: IToDo, b: IToDo) => {
      return b.time - a.time;
    });
  }

  sortByComplete(arr: IToDo[]) {
    let completedCollections = [];
    let nonCompletedCollections = [];
    completedCollections = arr.filter((item: IToDo) => item.isCompleted);
    nonCompletedCollections = arr.filter((item: IToDo) => !item.isCompleted);

    return [...nonCompletedCollections,...completedCollections];
  }
  sortByCreated(arr:IToDo[]){
    return arr.sort((a: IToDo, b: IToDo) => {
      return a.time - b.time;
    });
  }
}
