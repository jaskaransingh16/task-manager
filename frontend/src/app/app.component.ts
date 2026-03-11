import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Task, CreateTaskPayload } from './task.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  private readonly taskService = inject(TaskService);

  tasks: Task[] = [];
  loading = false;
  submitting = false;
  errorMessage = '';

  form: CreateTaskPayload = {
    title: '',
    description: '',
    completed: false,
  };

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.loading = true;
    this.errorMessage = '';

    this.taskService.getTasks().subscribe({
      next: (tasks) => {
        this.tasks = tasks;
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'Unable to load tasks from the backend.';
        this.loading = false;
      },
    });
  }

  addTask(): void {
    const title = this.form.title.trim();
    const description = this.form.description.trim();

    if (!title) {
      this.errorMessage = 'Title is required.';
      return;
    }

    this.submitting = true;
    this.errorMessage = '';

    this.taskService
      .createTask({
        title,
        description,
        completed: this.form.completed,
      })
      .subscribe({
        next: (task) => {
          this.tasks = [task, ...this.tasks];
          this.form = {
            title: '',
            description: '',
            completed: false,
          };
          this.submitting = false;
        },
        error: () => {
          this.errorMessage = 'Unable to create the task.';
          this.submitting = false;
        },
      });
  }

  toggleCompletion(task: Task, event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    const completed = checkbox.checked;
    const previousValue = task.completed;

    task.completed = completed;
    this.errorMessage = '';

    this.taskService.updateTask(task.id, { completed }).subscribe({
      next: (updatedTask) => {
        this.tasks = this.tasks.map((item) =>
          item.id === updatedTask.id ? updatedTask : item
        );
      },
      error: () => {
        task.completed = previousValue;
        this.errorMessage = `Unable to update "${task.title}".`;
      },
    });
  }

  trackByTaskId(_: number, task: Task): number {
    return task.id;
  }
}
