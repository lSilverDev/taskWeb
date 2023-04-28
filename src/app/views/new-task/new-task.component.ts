import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/service/tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
  name: string = '';
  board: string = '';
  status: string = '';

  constructor(
    private router: Router,
    private service: TasksService
  ){}

  info(){
    // this.service.save_new_deadline(this.name);
    alert(this.name);
    this.name = '';
    this.board  = '';
    this.status  = '';
  }

  return(){
    this.router.navigateByUrl("dashboard")
  }
}
