import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Chip as SuiChip } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-chip',
  imports: [CommonModule, FormsModule, SuiChip, Tabs],
  templateUrl: './chip.html',
  styleUrl: './chip.scss'
})
export class ChipPage {
  activeTab = 'demo';
  
  // Chip examples
  basicChips = [
    { label: 'Angular', removable: true },
    { label: 'React', removable: true },
    { label: 'Vue', removable: true }
  ];
  
  iconChips = [
    { label: 'Home', icon: '🏠', removable: true },
    { label: 'Work', icon: '💼', removable: true },
    { label: 'Travel', icon: '✈️', removable: true }
  ];
  
  imageChips = [
    { label: 'John Doe', image: 'https://via.placeholder.com/32', removable: true },
    { label: 'Jane Smith', image: 'https://via.placeholder.com/32', removable: true },
    { label: 'Bob Wilson', image: 'https://via.placeholder.com/32', removable: true }
  ];
  
  // Interactive demo
  customChipLabel = 'Custom Chip';
  customChipIcon = '⭐';
  customChipRemovable = true;
  
  // Code visibility states
  showBasicChipsCode = false;
  showIconChipsCode = false;
  showImageChipsCode = false;
  showRemovableChipsCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicChips':
        this.showBasicChipsCode = !this.showBasicChipsCode;
        break;
      case 'iconChips':
        this.showIconChipsCode = !this.showIconChipsCode;
        break;
      case 'imageChips':
        this.showImageChipsCode = !this.showImageChipsCode;
        break;
      case 'removableChips':
        this.showRemovableChipsCode = !this.showRemovableChipsCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
  
  // Chip event handlers
  onChipRemove(chip: any, chipArray: any[]) {
    const index = chipArray.indexOf(chip);
    if (index > -1) {
      chipArray.splice(index, 1);
    }
  }
}
