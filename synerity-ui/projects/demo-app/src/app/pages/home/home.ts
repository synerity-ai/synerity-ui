import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  featuredComponents = [
    { name: 'Button', route: '/components/button', icon: '🔘', description: 'Interactive buttons with multiple variants and states' },
    { name: 'Input Text', route: '/components/input', icon: '📝', description: 'Text input fields with validation and styling options' },
    { name: 'Card', route: '/components/card', icon: '🃏', description: 'Flexible content containers with headers and footers' }
  ];
}
