import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Accordion as SuiAccordion } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-accordion',
  imports: [CommonModule, FormsModule, SuiAccordion, Tabs],
  templateUrl: './accordion.html',
  styleUrl: './accordion.scss'
})
export class Accordion {
  activeTab = 'demo';
  
  // Demo data
  singleActiveIndex = 0;
  multipleActiveIndex = [0, 2];
  
  // Code visibility states
  showBasicAccordionCode = false;
  showMultipleAccordionCode = false;
  showCustomAccordionCode = false;
  showInteractiveDemoCode = false;
  
  // Accordion data
  accordionTabs = [
    { header: 'What is Angular?', content: 'Angular is a platform and framework for building single-page client applications using HTML and TypeScript.' },
    { header: 'What is TypeScript?', content: 'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.' },
    { header: 'What is Tailwind CSS?', content: 'Tailwind CSS is a utility-first CSS framework packed with classes that can be composed to build any design.' },
    { header: 'What is PrimeNG?', content: 'PrimeNG is a collection of rich UI components for Angular. All widgets are open source and free to use under MIT License.' }
  ];
  
  // Interactive demo
  customTabs = [
    { header: 'Getting Started', content: 'Learn the fundamentals of web development with our comprehensive guides.' },
    { header: 'Components', content: 'Explore our extensive library of reusable UI components.' },
    { header: 'Styling', content: 'Customize the appearance of your applications with our theming system.' }
  ];
  customActiveIndex = 0;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  // Code toggle methods
  toggleCode(section: string) {
    switch(section) {
      case 'basicAccordion':
        this.showBasicAccordionCode = !this.showBasicAccordionCode;
        break;
      case 'multipleAccordion':
        this.showMultipleAccordionCode = !this.showMultipleAccordionCode;
        break;
      case 'customAccordion':
        this.showCustomAccordionCode = !this.showCustomAccordionCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
  
  onAccordionOpen(event: any) {
    console.log('Accordion opened:', event);
  }
  
  onAccordionClose(event: any) {
    console.log('Accordion closed:', event);
  }
  
  onActiveIndexChange(event: any) {
    console.log('Active index changed:', event);
  }
}
