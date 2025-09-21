import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Accordion } from 'ui-lib';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule, Accordion],
  templateUrl: './accordion.html',
  styleUrls: ['./accordion.scss']
})
export class AccordionComponent {
  activeTab = 0;
  showBasicCode = false;
  showMultipleCode = false;
  showCustomCode = false;

  // Demo data
  basicTabs = [
    {
      header: 'What is Angular?',
      content: 'Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript.'
    },
    {
      header: 'What is TypeScript?',
      content: 'TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static type checking to the language.'
    },
    {
      header: 'What is Angular CLI?',
      content: 'The Angular CLI is a command-line interface tool that you use to initialize, develop, scaffold, and maintain Angular applications directly from a command shell.'
    }
  ];

  multipleTabs = [
    {
      header: 'Getting Started',
      content: 'Learn the fundamentals of Angular development including components, services, and dependency injection.'
    },
    {
      header: 'Components',
      content: 'Components are the main building blocks of Angular applications. Each component consists of a TypeScript class, an HTML template, and CSS styles.'
    },
    {
      header: 'Services',
      content: 'Services are used to organize and share code across your application. They are typically used for data access, logging, and business logic.'
    },
    {
      header: 'Routing',
      content: 'Angular Router enables navigation from one view to the next as users perform application tasks.'
    }
  ];

  customTabs = [
    {
      header: '🚀 Performance',
      content: 'Angular provides excellent performance through features like OnPush change detection, lazy loading, and tree shaking.'
    },
    {
      header: '🔧 Developer Experience',
      content: 'Angular CLI, TypeScript support, and comprehensive tooling make development efficient and enjoyable.'
    },
    {
      header: '📱 Mobile Ready',
      content: 'Angular applications work seamlessly across desktop and mobile devices with responsive design capabilities.'
    }
  ];

  richContentTabs = [
    {
      header: 'Features',
      content: `
        <div class="rich-content">
          <h4>Key Features:</h4>
          <ul>
            <li>Component-based architecture</li>
            <li>Dependency injection</li>
            <li>Two-way data binding</li>
            <li>Routing and navigation</li>
            <li>Forms and validation</li>
          </ul>
        </div>
      `
    },
    {
      header: 'Benefits',
      content: `
        <div class="rich-content">
          <h4>Why Choose Angular:</h4>
          <p>Angular provides a comprehensive solution for building modern web applications with:</p>
          <ul>
            <li>TypeScript for better development experience</li>
            <li>Powerful CLI for scaffolding and building</li>
            <li>Rich ecosystem of libraries and tools</li>
            <li>Strong community support</li>
          </ul>
        </div>
      `
    }
  ];

  onTabChange(index: number): void {
    this.activeTab = index;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basic':
        this.showBasicCode = !this.showBasicCode;
        break;
      case 'multiple':
        this.showMultipleCode = !this.showMultipleCode;
        break;
      case 'custom':
        this.showCustomCode = !this.showCustomCode;
        break;
    }
  }

  onAccordionOpen(event: any): void {
    console.log('Accordion opened:', event);
  }

  onAccordionClose(event: any): void {
    console.log('Accordion closed:', event);
  }

  onActiveIndexChange(event: any): void {
    console.log('Active index changed:', event);
  }
}