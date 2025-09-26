import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import Badge component from Synerity UI
import { Badge } from '@synerity/ui';

@Component({
  selector: 'app-rapid-badge',
  standalone: true,
  imports: [
    CommonModule,
    Badge
  ],
  templateUrl: './rapid-badge.html',
  styleUrl: './rapid-badge.scss'
})
export class RapidBadgeComponent {
  title = 'Synerity UI Badge Demo';
}
