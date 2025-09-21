import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { Card as SuiCard } from '../../../../../ui-lib/src/lib/card/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, FormsModule, Tabs, SuiCard],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class CardComponent {
  activeTab = 'demo';
  showBasicCardsCode = false;
  showCardVariantsCode = false;
  showInteractiveCardsCode = false;

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basicCards':
        this.showBasicCardsCode = !this.showBasicCardsCode;
        break;
      case 'cardVariants':
        this.showCardVariantsCode = !this.showCardVariantsCode;
        break;
      case 'interactiveCards':
        this.showInteractiveCardsCode = !this.showInteractiveCardsCode;
        break;
    }
  }

  onCardSelect(event: any): void {
    console.log('Card selected:', event);
  }
}