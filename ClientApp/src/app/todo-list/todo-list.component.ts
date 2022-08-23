import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TaskService} from "../services/task.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public tasks: TodoItem[] = [];
  constructor(private taskService: TaskService) {

  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks)
  }

}

interface TodoItem {
  id: number;
  name: string;
  isComplete: boolean;
}
