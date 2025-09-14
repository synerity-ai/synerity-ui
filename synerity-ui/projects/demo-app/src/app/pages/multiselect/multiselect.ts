import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MultiSelect as SuiMultiSelect } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-multiselect',
  imports: [CommonModule, FormsModule, SuiMultiSelect, Tabs],
  templateUrl: './multiselect.html',
  styleUrl: './multiselect.scss'
})
export class MultiSelectPage {
  activeTab = 'demo';
  
  // Demo data
  basicMultiSelect: string[] = [];
  preSelectedMultiSelect: string[] = ['option1', 'option3'];
  disabledMultiSelect: string[] = [];
  interactiveMultiSelect: string[] = [];
  interactiveDisabled = false;
  
  // Options for demos
  basicOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 4', value: 'option4' }
  ];
  
  skillOptions = [
    { label: 'JavaScript', value: 'javascript' },
    { label: 'TypeScript', value: 'typescript' },
    { label: 'Angular', value: 'angular' },
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
    { label: 'Node.js', value: 'nodejs' }
  ];
  
  countryOptions = [
    { label: 'United States', value: 'us' },
    { label: 'Canada', value: 'ca' },
    { label: 'United Kingdom', value: 'uk' },
    { label: 'Germany', value: 'de' },
    { label: 'France', value: 'fr' },
    { label: 'Japan', value: 'jp' },
    { label: 'Australia', value: 'au' },
    { label: 'Brazil', value: 'br' }
  ];
  
  categoryOptions = [
    { label: 'Technology', value: 'tech' },
    { label: 'Design', value: 'design' },
    { label: 'Marketing', value: 'marketing' },
    { label: 'Sales', value: 'sales' },
    { label: 'Support', value: 'support' },
    { label: 'Management', value: 'management' }
  ];
  
  // Code visibility states
  showBasicMultiSelectCode = false;
  showPreSelectedMultiSelectCode = false;
  showDisabledMultiSelectCode = false;
  showSkillsMultiSelectCode = false;
  showCountriesMultiSelectCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicMultiSelect':
        this.showBasicMultiSelectCode = !this.showBasicMultiSelectCode;
        break;
      case 'preSelectedMultiSelect':
        this.showPreSelectedMultiSelectCode = !this.showPreSelectedMultiSelectCode;
        break;
      case 'disabledMultiSelect':
        this.showDisabledMultiSelectCode = !this.showDisabledMultiSelectCode;
        break;
      case 'skillsMultiSelect':
        this.showSkillsMultiSelectCode = !this.showSkillsMultiSelectCode;
        break;
      case 'countriesMultiSelect':
        this.showCountriesMultiSelectCode = !this.showCountriesMultiSelectCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
  
  onMultiSelectChange(value: unknown, field: string) {
    console.log(`${field} changed to:`, value);
  }
  
  // Helper methods
  getSelectedLabels(selectedValues: string[], options: Array<{ label: string; value: string }>): string[] {
    return selectedValues.map(value => {
      const option = options.find(opt => opt.value === value);
      return option ? option.label : value;
    });
  }
  
  getSelectionCount(selectedValues: string[]): number {
    return selectedValues.length;
  }
  
  getSelectionSummary(selectedValues: string[], options: Array<{ label: string; value: string }>): string {
    const count = this.getSelectionCount(selectedValues);
    if (count === 0) return 'No items selected';
    if (count === 1) return `1 item selected: ${this.getSelectedLabels(selectedValues, options)[0]}`;
    if (count <= 3) return `${count} items selected: ${this.getSelectedLabels(selectedValues, options).join(', ')}`;
    return `${count} items selected`;
  }
  
  // Quick actions
  selectAll(options: Array<{ label: string; value: string }>, targetArray: string[]) {
    targetArray.length = 0;
    targetArray.push(...options.map(opt => opt.value));
  }
  
  clearAll(targetArray: string[]) {
    targetArray.length = 0;
  }
  
  selectPopular(targetArray: string[]) {
    targetArray.length = 0;
    targetArray.push('javascript', 'typescript', 'angular');
  }
  
  selectRandom(options: Array<{ label: string; value: string }>, targetArray: string[]) {
    targetArray.length = 0;
    const randomCount = Math.floor(Math.random() * 3) + 1; // 1-3 items
    const shuffled = [...options].sort(() => 0.5 - Math.random());
    targetArray.push(...shuffled.slice(0, randomCount).map(opt => opt.value));
  }
}
