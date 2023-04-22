import { Component } from '@angular/core';
import { task } from 'src/app/models/task';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.css']
})
export class ListCardsComponent {

  taskList: task[] = [];

  addTask(){
    alert("Add task - called")
  }

  more(){
    alert("more - called")
  }
}
