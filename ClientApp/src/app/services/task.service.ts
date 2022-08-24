import { Injectable } from '@angular/core';
import {Inject} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Task} from "../../Task";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = window.location.origin;
  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseUrl + '/api/' + 'todoitems')
  }

}
