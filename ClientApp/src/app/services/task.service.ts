import { Injectable } from '@angular/core';
import {Inject} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Task} from "../../Task";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = window.location.origin;
  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseUrl + '/api/' + 'todoitems')
  }

  // deleteTask(task: Task): Observable<Task> {
  //   const url = this.baseUrl + `/api/todoitems/${task.id}`
  //   console.log({url})
  //   return this.http.delete<Task>(url)
  // }

  deleteTask(task: Task): Observable<Task> {
    const url = this.baseUrl + `/api/todoitems/${task.id}`;
    console.log({url})
    return this.http.delete<Task>(url);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.baseUrl + '/api/todoitems', task, httpOptions)
  }

}
