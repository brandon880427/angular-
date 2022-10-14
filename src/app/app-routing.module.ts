import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessessageComponent } from './messessage/messessage.component';
import { TodoListComponent } from './todo-list/todo-list.component';
const routes: Routes = [
{path:'messessageComponent',component:MessessageComponent},
{path:'todo-list',component:TodoListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    enableTracing:true,
    useHash:true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
