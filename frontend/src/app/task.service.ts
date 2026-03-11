import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CreateTaskPayload, Task } from './task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = '/api/tasks/';

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  createTask(payload: CreateTaskPayload): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, payload);
  }

  updateTask(id: number, payload: Partial<CreateTaskPayload>): Observable<Task> {
    return this.http.patch<Task>(`${this.apiUrl}${id}/`, payload);
  }
}
