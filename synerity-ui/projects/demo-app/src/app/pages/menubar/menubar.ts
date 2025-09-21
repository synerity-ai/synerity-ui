import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { Menubar as SuiMenubar } from '../../../../../ui-lib/src/lib/menubar/menubar';

@Component({
  selector: 'app-menubar',
  imports: [CommonModule, FormsModule, Tabs, SuiMenubar],
  templateUrl: './menubar.html',
  styleUrl: './menubar.scss'
})
export class MenubarComponent {
  activeTab = 'demo';
  
  // Demo data
  menubarItems = [
    {
      label: 'File',
      items: [
        { label: 'New', icon: '📄' },
        { label: 'Open', icon: '📂' },
        { label: 'Save', icon: '💾' },
        { label: 'Exit', icon: '❌' }
      ]
    },
    {
      label: 'Edit',
      items: [
        { label: 'Undo', icon: '↶' },
        { label: 'Redo', icon: '↷' },
        { label: 'Cut', icon: '✂️' },
        { label: 'Copy', icon: '📋' },
        { label: 'Paste', icon: '📌' }
      ]
    },
    {
      label: 'View',
      items: [
        { label: 'Zoom In', icon: '🔍' },
        { label: 'Zoom Out', icon: '🔍' },
        { label: 'Full Screen', icon: '⛶' }
      ]
    }
  ];

  nestedMenubarItems = [
    {
      label: 'Products',
      items: [
        { 
          label: 'Electronics',
          items: [
            { label: 'Phones', icon: '📱' },
            { label: 'Laptops', icon: '💻' },
            { label: 'Tablets', icon: '📱' }
          ]
        },
        { 
          label: 'Clothing',
          items: [
            { label: 'Shirts', icon: '👕' },
            { label: 'Pants', icon: '👖' },
            { label: 'Shoes', icon: '👟' }
          ]
        }
      ]
    },
    {
      label: 'Services',
      items: [
        { label: 'Consulting', icon: '💼' },
        { label: 'Support', icon: '🛠️' },
        { label: 'Training', icon: '🎓' }
      ]
    }
  ];

  customMenubarItems = [
    {
      label: 'Home',
      icon: '🏠'
    },
    {
      label: 'About',
      icon: 'ℹ️'
    },
    {
      label: 'Contact',
      icon: '📞'
    }
  ];
  
  // Code visibility states
  showBasicMenubarCode = false;
  showNestedMenubarCode = false;
  showCustomMenubarCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicMenubar':
        this.showBasicMenubarCode = !this.showBasicMenubarCode;
        break;
      case 'nestedMenubar':
        this.showNestedMenubarCode = !this.showNestedMenubarCode;
        break;
      case 'customMenubar':
        this.showCustomMenubarCode = !this.showCustomMenubarCode;
        break;
    }
  }
  
  // Menubar demo methods
  onMenubarItemClick(event: any) {
    console.log('Menubar item clicked:', event);
  }
}
