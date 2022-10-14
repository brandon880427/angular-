import { Component, OnInit } from '@angular/core';
import { Message } from '../message';

@Component({
  selector: 'app-messessage',
  templateUrl: './messessage.component.html',
  styleUrls: ['./messessage.component.scss']
})
export class MessessageComponent implements OnInit {
  name = "";
  content="";
  messages:Message[] = [];

  addMessage():void{
    if(!this.name.trim() || !this.content.trim()
  ){
    return;
  }
  const message = new Message(this.name,this.content);
  this.messages.push(message);
  this.content = '';
  }
  constructor() { }
  ngOnInit(): void {
  }

}
