import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '@synerity/ui';

@Component({
  selector: 'app-rapid-card',
  standalone: true,
  imports: [
    CommonModule,
    Card
  ],
  templateUrl: './rapid-card.html',
  styleUrl: './rapid-card.scss'
})
export class RapidCardComponent {
  title = 'Synerity UI Card Demo';
}