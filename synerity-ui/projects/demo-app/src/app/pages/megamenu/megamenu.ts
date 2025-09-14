import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MegaMenu as SuiMegaMenu } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-megamenu',
  imports: [CommonModule, FormsModule, SuiMegaMenu, Tabs],
  templateUrl: './megamenu.html',
  styleUrl: './megamenu.scss'
})
export class MegaMenuPage {
  activeTab = 'demo';
  
  // Demo data
  basicMegaMenuItems = [
    { label: 'Home', icon: '🏠', command: () => this.onAction('Home') },
    { label: 'Products', icon: '📦', command: () => this.onAction('Products') },
    { label: 'Services', icon: '🔧', command: () => this.onAction('Services') },
    { label: 'About', icon: 'ℹ️', command: () => this.onAction('About') },
    { label: 'Contact', icon: '📞', command: () => this.onAction('Contact') }
  ];
  
  nestedMegaMenuItems = [
    { 
      label: 'Products', 
      icon: '📦',
      items: [
        { label: 'Electronics', icon: '📱', command: () => this.onAction('Electronics') },
        { label: 'Clothing', icon: '👕', command: () => this.onAction('Clothing') },
        { label: 'Books', icon: '📚', command: () => this.onAction('Books') },
        { label: 'Home & Garden', icon: '🏡', command: () => this.onAction('Home & Garden') }
      ]
    },
    { 
      label: 'Services', 
      icon: '🔧',
      items: [
        { label: 'Consulting', icon: '💼', command: () => this.onAction('Consulting') },
        { label: 'Support', icon: '🆘', command: () => this.onAction('Support') },
        { label: 'Training', icon: '🎓', command: () => this.onAction('Training') }
      ]
    },
    { 
      label: 'Company', 
      icon: '🏢',
      items: [
        { label: 'About Us', icon: 'ℹ️', command: () => this.onAction('About Us') },
        { label: 'Careers', icon: '💼', command: () => this.onAction('Careers') },
        { label: 'News', icon: '📰', command: () => this.onAction('News') }
      ]
    }
  ];
  
  columnMegaMenuItems = [
    { 
      label: 'Products', 
      icon: '📦',
      columns: [
        [
          { label: 'Electronics', icon: '📱', command: () => this.onAction('Electronics') },
          { label: 'Computers', icon: '💻', command: () => this.onAction('Computers') },
          { label: 'Phones', icon: '📞', command: () => this.onAction('Phones') }
        ],
        [
          { label: 'Clothing', icon: '👕', command: () => this.onAction('Clothing') },
          { label: 'Shoes', icon: '👟', command: () => this.onAction('Shoes') },
          { label: 'Accessories', icon: '👜', command: () => this.onAction('Accessories') }
        ],
        [
          { label: 'Books', icon: '📚', command: () => this.onAction('Books') },
          { label: 'Magazines', icon: '📰', command: () => this.onAction('Magazines') },
          { label: 'E-books', icon: '📖', command: () => this.onAction('E-books') }
        ]
      ]
    },
    { 
      label: 'Services', 
      icon: '🔧',
      items: [
        { label: 'Consulting', icon: '💼', command: () => this.onAction('Consulting') },
        { label: 'Support', icon: '🆘', command: () => this.onAction('Support') },
        { label: 'Training', icon: '🎓', command: () => this.onAction('Training') }
      ]
    }
  ];
  
  disabledMegaMenuItems = [
    { label: 'Action 1', icon: '⚡', command: () => this.onAction('Action 1') },
    { label: 'Action 2', icon: '🔧', command: () => this.onAction('Action 2'), disabled: true },
    { label: 'Action 3', icon: '🎯', command: () => this.onAction('Action 3') }
  ];
  
  // Interactive demo
  interactiveOrientation = 'horizontal';
  interactiveItems = [
    { label: 'Home', icon: '🏠', command: () => this.onAction('Home') },
    { label: 'Products', icon: '📦', command: () => this.onAction('Products') },
    { label: 'Services', icon: '🔧', command: () => this.onAction('Services') },
    { label: 'About', icon: 'ℹ️', command: () => this.onAction('About') }
  ];
  
  // Code visibility states
  showBasicMegaMenuCode = false;
  showNestedMegaMenuCode = false;
  showColumnMegaMenuCode = false;
  showDisabledMegaMenuCode = false;
  showInteractiveDemoCode = false;
  
  // Action log
  actionLog: string[] = [];
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicMegaMenu':
        this.showBasicMegaMenuCode = !this.showBasicMegaMenuCode;
        break;
      case 'nestedMegaMenu':
        this.showNestedMegaMenuCode = !this.showNestedMegaMenuCode;
        break;
      case 'columnMegaMenu':
        this.showColumnMegaMenuCode = !this.showColumnMegaMenuCode;
        break;
      case 'disabledMegaMenu':
        this.showDisabledMegaMenuCode = !this.showDisabledMegaMenuCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
  
  onAction(action: string) {
    this.actionLog.unshift(`${new Date().toLocaleTimeString()}: ${action} clicked`);
    if (this.actionLog.length > 10) {
      this.actionLog = this.actionLog.slice(0, 10);
    }
  }
  
  onMegaMenuItemClick(item: any) {
    this.onAction(item.label || 'Unknown');
  }
  
  // Helper methods
  getMegaMenuStatus(): { status: string; color: string; icon: string } {
    return { status: 'Ready', color: 'text-green-600', icon: '📋' };
  }
  
  // Quick actions
  clearActionLog() {
    this.actionLog = [];
  }
  
  toggleOrientation() {
    this.interactiveOrientation = this.interactiveOrientation === 'horizontal' ? 'vertical' : 'horizontal';
  }
  
  addRandomItem() {
    const items = ['New Item', 'Random Action', 'Test Item', 'Sample Action'];
    const icons = ['⭐', '🔧', '🎯', '⚡', '📋', '📄', '✂️', '🗑️'];
    const randomItem = items[Math.floor(Math.random() * items.length)];
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];
    
    this.interactiveItems.push({
      label: randomItem,
      icon: randomIcon,
      command: () => this.onAction(randomItem)
    });
  }
  
  removeLastItem() {
    if (this.interactiveItems.length > 1) {
      this.interactiveItems.pop();
    }
  }
}
