import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Badge } from '@synerity/ui';

@Component({
  selector: 'app-su-badge-demo',
  imports: [Badge, FormsModule],
  templateUrl: './su-badge-demo.html',
  styleUrl: './su-badge-demo.scss'
})
export class SuBadgeDemo {
  badgeValue = 5;
  badgeSeverity: 'info' | 'success' | 'warning' | 'danger' | 'contrast' = 'info';
  badgeSize: 'small' | 'normal' | 'large' = 'normal';
  customValue = 150;
  stringValue = 'NEW';
  zeroValue = 0;
}
