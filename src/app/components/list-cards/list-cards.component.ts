import { Component } from '@angular/core';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.css']
})
export class ListCardsComponent {

  addTask(){
    alert("Add task - called")
  }

  more(){
    alert("more - called")
  }
}
