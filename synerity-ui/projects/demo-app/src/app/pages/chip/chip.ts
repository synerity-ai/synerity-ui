import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { Chip as SuiChip } from '../../../../../ui-lib/src/lib/chip/chip';

@Component({
  selector: 'app-chip',
  imports: [CommonModule, FormsModule, Tabs, SuiChip],
  templateUrl: './chip.html',
  styleUrl: './chip.scss'
})
export class Chip {
  activeTab = 'demo';
  
  // Demo data
  chips = ['Angular', 'TypeScript', 'Tailwind CSS', 'PrimeNG'];
  removableChips = ['React', 'Vue.js', 'Svelte'];
  
  // Code visibility states
  showBasicChipCode = false;
  showRemovableChipCode = false;
  showChipVariantsCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicChip':
        this.showBasicChipCode = !this.showBasicChipCode;
        break;
      case 'removableChip':
        this.showRemovableChipCode = !this.showRemovableChipCode;
        break;
      case 'chipVariants':
        this.showChipVariantsCode = !this.showChipVariantsCode;
        break;
    }
  }
  
  // Chip demo methods
  removeChip(chip: string) {
    const index = this.removableChips.indexOf(chip);
    if (index > -1) {
      this.removableChips.splice(index, 1);
    }
  }
  
  addChip() {
    const newChip = prompt('Enter chip text:');
    if (newChip && newChip.trim()) {
      this.removableChips.push(newChip.trim());
    }
  }
}
