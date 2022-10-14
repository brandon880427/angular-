import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoListModule } from './todo-list/todo-list.module';
import { CalculatorComponent } from './calculator/calculator.component';
import { ExponentialStrengthPipe } from './ExponentialStrengthPipe';
import { UnlessDirective } from './UnlessDirective';
import { HightDirective } from './HighlightDirective';
import { MessessageComponent } from './messessage/messessage.component';
@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ExponentialStrengthPipe,
    UnlessDirective,
    HightDirective,
    MessessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TodoListModule,
    FormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
