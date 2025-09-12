import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card as SuiCard } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-card',
  imports: [CommonModule, SuiCard, Tabs],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
  activeTab = 'demo';
  
  // Code visibility states
  showBasicCardsCode = false;
  showCardVariantsCode = false;
  showCardStatesCode = false;
  showClickableCardsCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  onCardClick(cardName: string) {
    console.log(`${cardName} clicked!`);
    // You can add more interactive functionality here
  }
  
  // Code toggle methods
  toggleCode(section: string) {
    switch(section) {
      case 'basicCards': this.showBasicCardsCode = !this.showBasicCardsCode; break;
      case 'cardVariants': this.showCardVariantsCode = !this.showCardVariantsCode; break;
      case 'cardStates': this.showCardStatesCode = !this.showCardStatesCode; break;
      case 'clickableCards': this.showClickableCardsCode = !this.showClickableCardsCode; break;
    }
  }
}
