import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { Accordion as SuiAccordion } from '../../../../../ui-lib/src/lib/accordion/accordion';

@Component({
  selector: 'app-accordion',
  imports: [CommonModule, FormsModule, Tabs, SuiAccordion],
  templateUrl: './accordion.html',
  styleUrl: './accordion.scss'
})
export class Accordion {
  activeTab = 'demo';
  
  // Demo data
  accordionTabs = [
    { header: 'Section 1', content: 'This is the content for section 1. It can contain any HTML content including forms, images, and other components.' },
    { header: 'Section 2', content: 'This is the content for section 2. Accordion sections can be expanded and collapsed independently.' },
    { header: 'Section 3', content: 'This is the content for section 3. The accordion provides a clean way to organize related content.' }
  ];
  
  activeIndex = 0;
  multiple = false;
  
  // Code visibility states
  showBasicAccordionCode = false;
  showMultipleAccordionCode = false;
  showCustomAccordionCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicAccordion':
        this.showBasicAccordionCode = !this.showBasicAccordionCode;
        break;
      case 'multipleAccordion':
        this.showMultipleAccordionCode = !this.showMultipleAccordionCode;
        break;
      case 'customAccordion':
        this.showCustomAccordionCode = !this.showCustomAccordionCode;
        break;
    }
  }
  
  // Accordion demo methods
  onAccordionOpen(event: any) {
    console.log('Accordion opened:', event);
  }
  
  onAccordionClose(event: any) {
    console.log('Accordion closed:', event);
  }
  
  onActiveIndexChange(index: any) {
    this.activeIndex = index;
  }
  
  toggleMultiple() {
    this.multiple = !this.multiple;
  }
}
