import { Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NgModel } from '@angular/forms';
import { TodoListService } from './todo-list.service';
import { Todo } from './todo.model';
import { TodoStatusType } from './todo-status-type';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  constructor(private todoListService: TodoListService, private elementRef: ElementRef) { }
  //使用ViewChild or Viewchilren 抓取頁面上節點  
  @ViewChildren("card")cardElement!: QueryList<Todo>;
  @ViewChild('secon') espan!: ElementRef;
  
  private status = TodoStatusType.All;
  todoStatusType = TodoStatusType;
  ngAfterViewInit() {
    // console.log(this.cardElement.first
    //   )
    // console.log(this.espan.nativeElement);
    // this.espan.nativeElement.style.color = 'red';
  }
  ngOnInit(): void {
  }
  addTodo(home: string): void {
    const todo = this.home.trim();
    if (todo) {
      this.todoListService.add(todo);
      this.home = "";
    }else{
      return;
    }
  }
  home = "";
  Todos = [new Todo('Title'),new Todo('bbb'),new Todo('cdcdcd')];
  test: Todo[] | undefined;
  getList():Todo[]{
    let list : Todo[];
    switch(this.status){
      case TodoStatusType.Active:list = this.getRemainingList();
      break;
      case TodoStatusType.Completed:list = this.getCompletedList();
      break
      default:
        list = this.todoListService.getList();
        console.log(list)
        break
    }
   return list
  }
  cancel(index: number): void {
    return this.todoListService.cancel(index);
  }
  edit(todo: Todo): void {
    console.log('查詢這個值',todo);
    todo.editable = true;
  }
  update(todo: Todo, newTitle: string): void {
    if (!todo.editing) {
      return;
    }
    const title = newTitle.trim();
    if (title) {
      todo.setTitle(title);
      todo.editable = false;
    } else {if(this.test){
      const index = this.test.indexOf(todo);
      if (index !== -1) {
        this.cancel(index);
      }
    }
    }
  }
  cancelEditing(todo: Todo): void {
    todo.editable = false;
  }
 getRemainingList():Todo[]{
return this.todoListService.getWithCompleted(false); 
}
getCompletedList():Todo[]{
  // console.log('vvv')
  return this.todoListService.getWithCompleted(true);
}
setStatus(status:number):void{
this.status = status;
console.log('active',status);
}
checkStatus(status:number):boolean{
  return this.status === status;
}
removeCompleted():void{
  this.todoListService.removeCompleted();
}
}
