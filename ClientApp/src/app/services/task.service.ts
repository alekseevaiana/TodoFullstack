import { Injectable } from '@angular/core';
import {Inject} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = window.location.origin;
  constructor(private http: HttpClient) { }

  getTasks(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>(this.baseUrl + '/api/' + 'todoitems')
  }
}

interface TodoItem {
  id: number;
  name: string;
  isComplete: boolean;
}
