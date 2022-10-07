import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { TodoListService } from './todo-list.service';
import { Todo } from './todo.model';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  [x: string]: any;
  constructor(private todoListService: TodoListService, private elementRef: ElementRef) { }

  @ViewChild('secon') espan!: ElementRef;
  ngAfterViewInit() {
    console.log(this.elementRef.nativeElement)
    // this.espan.nativeElement.style.color = 'red';
  }
  ngOnInit(): void {
  }
  addTodo(home: string): void {
    const todo = this.home.trim();
    if (todo) {
      this.todoListService.add(todo);
      this.home = "";
    }
  }
  home = "";
  getList(): Todo[] {
    return this.todoListService.getList();
  }
  cancel(index: number): void {
    return this.todoListService.cancel(index);
  }
  edit(todo: Todo): void {
    todo.editable = true;
  }
  update(todo: Todo, newTitle: string): void {

    if (!todo.editing) {
      return;
    }
    const title = newTitle.trim();
    if (title) {
      todo.setTitle;
    } else {
      const index = this.getList().indexOf(todo);
      if (index !== -1) {
        // this.remove(index);
      }
    }
  }
  cancelEditing(todo: Todo): void {
    todo.editable = false;
  }
}
