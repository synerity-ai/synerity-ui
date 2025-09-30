import { Component } from '@angular/core';
import { Navbar } from './layout/navbar/navbar';
import { Sidebar } from './layout/sidebar/sidebar';
import { Main } from './layout/main/main';

@Component({
  selector: 'app-root',
  imports: [Navbar, Sidebar, Main],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  isSidebarCollapsed = false;

  onSidebarToggle() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}
