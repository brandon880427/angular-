import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { MessessageComponent } from './messessage/messessage.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { PreloadAllModules } from '@angular/router';
const routes: Routes = [
  {
    path: '**', 
    redirectTo: 'home', 
    pathMatch: 'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  { 
    path: '',
    component: LayoutComponent,
    children:[
      {path:'messessageComponent',component:MessessageComponent},
    {path:'todo-list',component:TodoListComponent},
    ]
  },
  {
    path:'feature',
    loadChildren:() =>import('./feature/feature.module').then(module => module.FeatureModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    // enableTracing:true,
    useHash:true,
    preloadingStrategy:PreloadAllModules
  })],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }
