import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs as AppTabs } from '../../shared/tabs/tabs';
import { Chip as SuiChip } from 'ui-lib';

@Component({
  selector: 'app-chip',
  standalone: true,
  imports: [CommonModule, AppTabs, SuiChip],
  templateUrl: './chip.html',
  styleUrl: './chip.scss'
})
export class ChipComponent {
  activeTab = 'demo';
  
  // Demo data
  chips = ['Angular', 'TypeScript', 'Tailwind CSS', 'PrimeNG'];
  removableChips = ['React', 'Vue.js', 'Svelte'];
  
  // Code visibility states
  showBasicChipCode = false;
  showRemovableChipCode = false;
  showChipVariantsCode = false;
  
  onTabChange(tab: string): void {
    this.activeTab = tab;
  }
  
  toggleCode(type: string): void {
    switch (type) {
      case 'basic':
        this.showBasicChipCode = !this.showBasicChipCode;
        break;
      case 'removable':
        this.showRemovableChipCode = !this.showRemovableChipCode;
        break;
      case 'variants':
        this.showChipVariantsCode = !this.showChipVariantsCode;
        break;
    }
  }
  
  // Chip demo methods
  removeChip(chip: string): void {
    const index = this.removableChips.indexOf(chip);
    if (index > -1) {
      this.removableChips.splice(index, 1);
    }
  }
  
  addChip(): void {
    const newChip = prompt('Enter chip text:');
    if (newChip && newChip.trim()) {
      this.removableChips.push(newChip.trim());
    }
  }
}