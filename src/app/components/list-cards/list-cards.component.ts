import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { task } from 'src/app/models/task';
import { TasksService } from 'src/app/service/tasks.service';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.css']
})
export class ListCardsComponent {

  taskList: task[] = [];

  constructor(
    private service: TasksService,
    private router: Router
  ){}

  ngOnInit(){
    this.getTasks();
  }

  async getTasks(){
    let tasks = await this.service.getTaskList();

    tasks.forEach(element => {
      this.taskList.push(element);
    })
  }

  addTask(){
    alert("Add task - called")
  }

  more(){
    alert("more - called")
  }

  return() {
    this.router.navigate(["/"])
  }
}
