import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Badge } from '@synerity/ui';
import { ComponentExample } from '../../models/component.model';

@Component({
  selector: 'app-badge-demo',
  standalone: true,
  imports: [CommonModule, Badge],
  templateUrl: './badge-demo.html',
  styleUrl: './badge-demo.scss'
})
export class BadgeDemoComponent {
  @Input() currentExample!: ComponentExample;

  getCurrentExample(): ComponentExample {
    return this.currentExample;
  }
}
