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
        { label: 'New', icon: 'pi pi-plus' },
        { label: 'Open', icon: 'pi pi-download' },
        { separator: true },
        { label: 'Exit', icon: 'pi pi-times' }
      ]
    },
    {
      label: 'Edit',
      items: [
        { label: 'Undo', icon: 'pi pi-refresh' },
        { label: 'Redo', icon: 'pi pi-replay' }
      ]
    },
    {
      label: 'View',
      items: [
        { label: 'Zoom In', icon: 'pi pi-search-plus' },
        { label: 'Zoom Out', icon: 'pi pi-search-minus' }
      ]
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
