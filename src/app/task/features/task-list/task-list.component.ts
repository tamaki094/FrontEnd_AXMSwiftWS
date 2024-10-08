import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TableComponent } from '../../ui/table.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TableComponent, RouterLink],
  templateUrl: './task-list.component.html',
  styles: ``
})
export default class TaskListComponent {

}
