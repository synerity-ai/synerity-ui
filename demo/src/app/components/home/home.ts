import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  currentPage = 'Synerity UI Demo';
  description = 'Explore our comprehensive component library built with Angular and modern design principles.';
  welcomeMessage = 'Welcome to Synerity UI';
}
