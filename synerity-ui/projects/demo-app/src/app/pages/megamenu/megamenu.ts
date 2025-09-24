import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs as AppTabs } from '../../shared/tabs/tabs';
import { MegaMenu as SuiMegaMenu } from 'ui-lib';

@Component({
  selector: 'app-megamenu',
  standalone: true,
  imports: [CommonModule, AppTabs, SuiMegaMenu],
  templateUrl: './megamenu.html',
  styleUrl: './megamenu.scss'
})
export class MegamenuComponent {
  activeTab = 'demo';
  lastClickedItem: any = null;

  basicMegaMenuItems = [
    { label: 'Home', icon: '🏠', command: () => this.executeAction('Home') },
    { label: 'About', icon: 'ℹ️', command: () => this.executeAction('About') },
    { label: 'Contact', icon: '📞', command: () => this.executeAction('Contact') }
  ];

  megaMenuWithItems = [
    { 
      label: 'Products', 
      icon: '📦',
      items: [
        { label: 'Electronics', icon: '📱', command: () => this.executeAction('Electronics') },
        { label: 'Clothing', icon: '👕', command: () => this.executeAction('Clothing') },
        { label: 'Books', icon: '📚', command: () => this.executeAction('Books') },
        { label: 'Home & Garden', icon: '🏡', command: () => this.executeAction('Home & Garden') },
        { label: 'Sports', icon: '⚽', command: () => this.executeAction('Sports') },
        { label: 'Beauty', icon: '💄', command: () => this.executeAction('Beauty') }
      ]
    },
    { 
      label: 'Services', 
      icon: '⚙️',
      items: [
        { label: 'Consulting', icon: '💼', command: () => this.executeAction('Consulting') },
        { label: 'Support', icon: '🆘', command: () => this.executeAction('Support') },
        { label: 'Training', icon: '🎓', command: () => this.executeAction('Training') },
        { label: 'Maintenance', icon: '🔧', command: () => this.executeAction('Maintenance') }
      ]
    }
  ];

  megaMenuWithColumns = [
    { 
      label: 'Categories', 
      icon: '📂',
      columns: [
        [
          { label: 'Electronics', icon: '📱', command: () => this.executeAction('Electronics') },
          { label: 'Computers', icon: '💻', command: () => this.executeAction('Computers') },
          { label: 'Phones', icon: '📞', command: () => this.executeAction('Phones') },
          { label: 'Tablets', icon: '📱', command: () => this.executeAction('Tablets') }
        ],
        [
          { label: 'Clothing', icon: '👕', command: () => this.executeAction('Clothing') },
          { label: 'Men\'s', icon: '👔', command: () => this.executeAction('Men\'s Clothing') },
          { label: 'Women\'s', icon: '👗', command: () => this.executeAction('Women\'s Clothing') },
          { label: 'Kids\'', icon: '👶', command: () => this.executeAction('Kids\' Clothing') }
        ],
        [
          { label: 'Home', icon: '🏡', command: () => this.executeAction('Home') },
          { label: 'Furniture', icon: '🪑', command: () => this.executeAction('Furniture') },
          { label: 'Kitchen', icon: '🍳', command: () => this.executeAction('Kitchen') },
          { label: 'Garden', icon: '🌱', command: () => this.executeAction('Garden') }
        ],
        [
          { label: 'Sports', icon: '⚽', command: () => this.executeAction('Sports') },
          { label: 'Fitness', icon: '💪', command: () => this.executeAction('Fitness') },
          { label: 'Outdoor', icon: '🏔️', command: () => this.executeAction('Outdoor') },
          { label: 'Team Sports', icon: '🏈', command: () => this.executeAction('Team Sports') }
        ]
      ]
    },
    { 
      label: 'Brands', 
      icon: '🏷️',
      columns: [
        [
          { label: 'Apple', icon: '🍎', command: () => this.executeAction('Apple') },
          { label: 'Samsung', icon: '📱', command: () => this.executeAction('Samsung') },
          { label: 'Google', icon: '🔍', command: () => this.executeAction('Google') },
          { label: 'Microsoft', icon: '🪟', command: () => this.executeAction('Microsoft') }
        ],
        [
          { label: 'Nike', icon: '👟', command: () => this.executeAction('Nike') },
          { label: 'Adidas', icon: '⚡', command: () => this.executeAction('Adidas') },
          { label: 'Puma', icon: '🐆', command: () => this.executeAction('Puma') },
          { label: 'Reebok', icon: '💪', command: () => this.executeAction('Reebok') }
        ]
      ]
    }
  ];

  // Code visibility toggles
  showBasicMegaMenuCode = false;
  showItemsMegaMenuCode = false;
  showColumnsMegaMenuCode = false;

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basicMegaMenu':
        this.showBasicMegaMenuCode = !this.showBasicMegaMenuCode;
        break;
      case 'itemsMegaMenu':
        this.showItemsMegaMenuCode = !this.showItemsMegaMenuCode;
        break;
      case 'columnsMegaMenu':
        this.showColumnsMegaMenuCode = !this.showColumnsMegaMenuCode;
        break;
    }
  }

  onMegaMenuItemClick(item: any): void {
    this.lastClickedItem = item;
    console.log('MegaMenu item clicked:', item);
  }

  executeAction(action: string): void {
    console.log(`${action} action executed`);
  }
}
