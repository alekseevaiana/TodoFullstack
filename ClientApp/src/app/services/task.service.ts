import { Injectable } from '@angular/core';
import {Inject} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getTasks(): Observable<TodoItem[]> {
    // find a way to put variable baseUrl
    return this.http.get<TodoItem[]>('https://localhost:44443/api/' + 'todoitems')
  }
}

interface TodoItem {
  id: number;
  name: string;
  isComplete: boolean;
}
