import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentExample } from '../../models/component.model';
import { Card, Button } from '@synerity/ui';

@Component({
  selector: 'app-card-demo',
  imports: [CommonModule, Card, Button],
  templateUrl: './card-demo.html',
  styleUrl: './card-demo.scss'
})
export class CardDemo {
  @Input() currentExample!: ComponentExample;

  getCurrentExample(): ComponentExample {
    return this.currentExample;
  }

  onCardClick(event: MouseEvent): void {
    console.log('Card clicked!', event);
  }
}
