import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-tieredmenu',
  imports: [CommonModule, FormsModule, Tabs],
  templateUrl: './tieredmenu.html',
  styleUrl: './tieredmenu.scss'
})
export class Tieredmenu {
  activeTab = 'demo';
  
  // Demo data
  tieredMenuItems = [
    {
      label: 'File',
      icon: 'pi pi-file',
      items: [
        {
          label: 'New',
          icon: 'pi pi-plus',
          items: [
            { label: 'Document', icon: 'pi pi-file' },
            { label: 'Spreadsheet', icon: 'pi pi-table' },
            { label: 'Presentation', icon: 'pi pi-images' }
          ]
        },
        { label: 'Open', icon: 'pi pi-download' },
        { separator: true },
        { label: 'Exit', icon: 'pi pi-times' }
      ]
    },
    {
      label: 'Edit',
      icon: 'pi pi-pencil',
      items: [
        { label: 'Undo', icon: 'pi pi-refresh' },
        { label: 'Redo', icon: 'pi pi-replay' }
      ]
    },
    {
      label: 'View',
      icon: 'pi pi-eye',
      items: [
        { label: 'Zoom In', icon: 'pi pi-search-plus' },
        { label: 'Zoom Out', icon: 'pi pi-search-minus' }
      ]
    }
  ];
  
  // Code visibility states
  showBasicTieredMenuCode = false;
  showNestedTieredMenuCode = false;
  showCustomTieredMenuCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicTieredMenu':
        this.showBasicTieredMenuCode = !this.showBasicTieredMenuCode;
        break;
      case 'nestedTieredMenu':
        this.showNestedTieredMenuCode = !this.showNestedTieredMenuCode;
        break;
      case 'customTieredMenu':
        this.showCustomTieredMenuCode = !this.showCustomTieredMenuCode;
        break;
    }
  }
  
  // Tiered menu demo methods
  onTieredMenuItemClick(event: any) {
    console.log('Tiered menu item clicked:', event);
  }
}
