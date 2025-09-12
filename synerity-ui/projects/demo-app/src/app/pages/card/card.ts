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
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  onCardClick(cardName: string) {
    console.log(`${cardName} clicked!`);
    // You can add more interactive functionality here
  }
}
