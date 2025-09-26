import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import layout components
import { MainLayoutComponent } from './layout/main-layout/main-layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MainLayoutComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'Rapid Enterprise - Component Library Demo';
}