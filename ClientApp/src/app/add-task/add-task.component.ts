import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Task} from "../../Task";
import {TaskItemComponent} from "../task-item/task-item.component";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter()
  name?: string;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.name) {
      alert("Please add text");
      return;
    }

    const newTask = {
      name: this.name,
      isComplete: false
    }

    this.onAddTask.emit(newTask)

    this.name = ""
  }

}
