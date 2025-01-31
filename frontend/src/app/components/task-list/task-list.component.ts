import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  imports:[FormsModule],
  standalone:true
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];
  newTask = { title: '', category: '', due_date: null };

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe((data) => (this.tasks = data));
  }

  addTask(): void {
    this.taskService.addTask(this.newTask).subscribe((task) => {
      this.tasks.push(task);
      this.newTask = { title: '', category: '', due_date: null };
    });
  }

  toggleCompletion(id: number): void {
    this.taskService.toggleTaskCompletion(id).subscribe(() => this.loadTasks());
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id).subscribe(() => this.loadTasks());
  }
}

