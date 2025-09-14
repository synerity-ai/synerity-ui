import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TreeSelect as SuiTreeSelect } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-treeselect',
  imports: [CommonModule, FormsModule, SuiTreeSelect, Tabs],
  templateUrl: './treeselect.html',
  styleUrl: './treeselect.scss'
})
export class TreeSelectPage {
  activeTab = 'demo';
  
  // Demo data
  basicTreeSelect: unknown = null;
  categoryTreeSelect: unknown = null;
  disabledTreeSelect: unknown = null;
  interactiveTreeSelect: unknown = null;
  interactiveDisabled = false;
  
  // Options data
  basicOptions = [
    {
      label: 'Documents',
      value: 'documents',
      children: [
        { label: 'Work', value: 'work' },
        { label: 'Personal', value: 'personal' }
      ]
    },
    {
      label: 'Pictures',
      value: 'pictures',
      children: [
        { label: 'Photos', value: 'photos' },
        { label: 'Screenshots', value: 'screenshots' }
      ]
    },
    { label: 'Downloads', value: 'downloads' }
  ];
  
  categoryOptions = [
    {
      label: 'Electronics',
      value: 'electronics',
      children: [
        {
          label: 'Computers',
          value: 'computers',
          children: [
            { label: 'Laptops', value: 'laptops' },
            { label: 'Desktops', value: 'desktops' }
          ]
        },
        {
          label: 'Mobile',
          value: 'mobile',
          children: [
            { label: 'Smartphones', value: 'smartphones' },
            { label: 'Tablets', value: 'tablets' }
          ]
        }
      ]
    },
    {
      label: 'Clothing',
      value: 'clothing',
      children: [
        { label: 'Men', value: 'men' },
        { label: 'Women', value: 'women' },
        { label: 'Kids', value: 'kids' }
      ]
    },
    { label: 'Books', value: 'books' }
  ];
  
  disabledOptions = [
    {
      label: 'Enabled Category',
      value: 'enabled',
      children: [
        { label: 'Enabled Item', value: 'enabled-item' }
      ]
    },
    {
      label: 'Disabled Category',
      value: 'disabled',
      children: [
        { label: 'Disabled Item', value: 'disabled-item' }
      ]
    }
  ];
  
  // Code visibility states
  showBasicTreeSelectCode = false;
  showCategoryTreeSelectCode = false;
  showDisabledTreeSelectCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicTreeSelect':
        this.showBasicTreeSelectCode = !this.showBasicTreeSelectCode;
        break;
      case 'categoryTreeSelect':
        this.showCategoryTreeSelectCode = !this.showCategoryTreeSelectCode;
        break;
      case 'disabledTreeSelect':
        this.showDisabledTreeSelectCode = !this.showDisabledTreeSelectCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
  
  onTreeSelectChange(value: unknown, field: string) {
    console.log(`${field} changed to:`, value);
  }
  
  // Helper methods
  getTreeSelectStatus(value: unknown): { status: string; color: string; icon: string } {
    if (value === null || value === undefined) {
      return { status: 'No Selection', color: 'text-gray-600', icon: '○' };
    } else {
      return { status: 'Selected', color: 'text-green-600', icon: '✓' };
    }
  }
  
  getTreeSelectDescription(value: unknown): string {
    if (value === null || value === undefined) {
      return 'No option selected';
    } else {
      return `Selected: ${value}`;
    }
  }
  
  // Quick actions
  setRandomBasicOption() {
    const leafNodes = this.getLeafNodes(this.basicOptions);
    const randomIndex = Math.floor(Math.random() * leafNodes.length);
    this.basicTreeSelect = leafNodes[randomIndex].value;
  }
  
  setRandomCategoryOption() {
    const leafNodes = this.getLeafNodes(this.categoryOptions);
    const randomIndex = Math.floor(Math.random() * leafNodes.length);
    this.categoryTreeSelect = leafNodes[randomIndex].value;
  }
  
  setRandomInteractiveOption() {
    const leafNodes = this.getLeafNodes(this.basicOptions);
    const randomIndex = Math.floor(Math.random() * leafNodes.length);
    this.interactiveTreeSelect = leafNodes[randomIndex].value;
  }
  
  clearAll() {
    this.basicTreeSelect = null;
    this.categoryTreeSelect = null;
    this.disabledTreeSelect = null;
    this.interactiveTreeSelect = null;
  }
  
  private getLeafNodes(nodes: any[]): any[] {
    const leafNodes: any[] = [];
    for (const node of nodes) {
      if (node.children && node.children.length > 0) {
        leafNodes.push(...this.getLeafNodes(node.children));
      } else {
        leafNodes.push(node);
      }
    }
    return leafNodes;
  }
}
