import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {Task} from "../../Task";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: Task) {
    console.log("delete task: " + task.id);
    this.onDeleteTask.emit(task)
  }
}
