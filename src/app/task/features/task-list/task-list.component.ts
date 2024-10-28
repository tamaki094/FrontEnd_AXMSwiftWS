import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TableComponent } from '../../ui/table.component';
import { TaskService } from '../../data-access/task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TableComponent, RouterLink],
  templateUrl: './task-list.component.html',
  providers : [TaskService]
})
export default class TaskListComponent {

   tasksService = inject(TaskService);
}
