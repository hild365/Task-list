import { Component } from '@angular/core';
import { TaskListComponent } from './components/task-list/task-list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [TaskListComponent],
  standalone:true,
})
export class AppComponent {
  title = 'frontend';
  constructor(private router: Router) {
    console.log(this.router.config);
  }
}