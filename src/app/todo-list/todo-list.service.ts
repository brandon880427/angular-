import { Injectable } from '@angular/core';

import { Todo } from './todo.model';
@Injectable({
  providedIn: 'root'
})
//Angular 說：「請把我註冊在整個系統都是使用同一個實體的注射器裡」。


export class TodoListService {

  private list: Todo[] = [];
  constructor() { }
  add(title: string): void {
    if (title || title.trim()) {
      this.list.push(new Todo(title))
    }
  }
  getList(): Todo[] {
    return this.list;
  }
  cancel(index: number): void {
    this.list.splice(index, 1);
  }
}
