import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-card',
  imports: [CommonModule, FormsModule, Tabs],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
  activeTab = 'demo';
  
  // Demo data
  cardTitle = 'Sample Card Title';
  cardContent = 'This is a sample card content. You can put any text, images, or other components inside a card.';
  cardFooter = 'Card Footer';
  
  // Interactive demo
  interactiveTitle = 'Interactive Card';
  interactiveContent = 'This card demonstrates interactive features. You can customize the title, content, and footer.';
  interactiveFooter = 'Interactive Footer';
  interactiveElevated = false;
  interactiveBordered = true;
  interactiveRounded = true;
  interactiveShadow = 'medium';
  
  // Code visibility states
  showBasicCardCode = false;
  showCardVariantsCode = false;
  showCardSizesCode = false;
  showCardStatesCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicCard':
        this.showBasicCardCode = !this.showBasicCardCode;
        break;
      case 'cardVariants':
        this.showCardVariantsCode = !this.showCardVariantsCode;
        break;
      case 'cardSizes':
        this.showCardSizesCode = !this.showCardSizesCode;
        break;
      case 'cardStates':
        this.showCardStatesCode = !this.showCardStatesCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
  
  // Card demo methods
  onCardClick() {
    console.log('Card clicked!');
    alert('Card clicked!');
  }
  
  onCardHeaderClick() {
    console.log('Card header clicked!');
    alert('Card header clicked!');
  }
  
  onCardFooterClick() {
    console.log('Card footer clicked!');
    alert('Card footer clicked!');
  }
  
  // Interactive demo methods
  updateTitle() {
    this.interactiveTitle = 'Updated Title - ' + new Date().toLocaleTimeString();
  }
  
  updateContent() {
    this.interactiveContent = 'Content updated at ' + new Date().toLocaleTimeString() + '. This demonstrates dynamic content updates.';
  }
  
  updateFooter() {
    this.interactiveFooter = 'Footer updated at ' + new Date().toLocaleTimeString();
  }
  
  resetCard() {
    this.interactiveTitle = 'Interactive Card';
    this.interactiveContent = 'This card demonstrates interactive features. You can customize the title, content, and footer.';
    this.interactiveFooter = 'Interactive Footer';
  }
  
  toggleElevated() {
    this.interactiveElevated = !this.interactiveElevated;
  }
  
  toggleBordered() {
    this.interactiveBordered = !this.interactiveBordered;
  }
  
  toggleRounded() {
    this.interactiveRounded = !this.interactiveRounded;
  }
  
  updateShadow(shadow: string) {
    this.interactiveShadow = shadow;
  }
}
