import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import Button component from Synerity UI
import { Button } from '@synerity/ui';

@Component({
  selector: 'app-rapid-buttons',
  standalone: true,
  imports: [
    CommonModule,
    Button
  ],
  templateUrl: './rapid-buttons.html',
  styleUrl: './rapid-buttons.scss'
})
export class RapidButtonsComponent {
  title = 'Synerity UI Buttons Demo';
}