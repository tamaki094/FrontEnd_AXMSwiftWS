import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {NgxSonnerToaster} from 'ngx-sonner'
import { AuthService } from './auth/data-access/auth.service';
import { AuthStateService } from './shared/data-access/auth-state.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxSonnerToaster],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-task-18'; 
}
