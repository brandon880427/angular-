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
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { FeatureModule } from './feature/feature.module';
@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ExponentialStrengthPipe,
    UnlessDirective,
    HightDirective,
    MessessageComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TodoListModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
