import { Component, Input } from '@angular/core';
import { NgFor,NgIf } from '@angular/common';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NgFor, NewTaskComponent,NgIf,],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input ({required:true}) userId!:string;
  @Input({required:true}) name!:string;
  isAddingTask = false;
  button = 'Add Task';
  constructor(private tasksService: TasksService){

  }
  // private tasksService = new TasksService();
  

  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTask(id:string){
    // this.tasks = this.tasks.filter((task)=> task.id !== id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
