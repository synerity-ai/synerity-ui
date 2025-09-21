import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from 'ui-lib';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, Card],
  templateUrl: './card.html',
  styleUrls: ['./card.scss']
})
export class CardComponent {
  activeTab = 0;
  showBasicCode = false;
  showVariantCode = false;
  showCustomCode = false;

  // Demo data
  cardData = {
    title: 'Sample Card',
    subtitle: 'This is a sample card',
    content: 'This is the main content of the card. It can contain any HTML content including text, images, and other components.',
    footer: 'Card Footer'
  };

  onTabChange(index: number): void {
    this.activeTab = index;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basic':
        this.showBasicCode = !this.showBasicCode;
        break;
      case 'variant':
        this.showVariantCode = !this.showVariantCode;
        break;
      case 'custom':
        this.showCustomCode = !this.showCustomCode;
        break;
    }
  }

  onCardClick(): void {
    console.log('Card clicked!');
  }

  onCardHover(): void {
    console.log('Card hovered!');
  }
}