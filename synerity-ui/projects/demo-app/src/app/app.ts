import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from './layout/navbar/navbar';
import { Sidebar } from './layout/sidebar/sidebar';
import { MainContent } from './layout/main-content/main-content';

@Component({
  selector: 'app-root',
  imports: [CommonModule, Navbar, Sidebar, MainContent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
