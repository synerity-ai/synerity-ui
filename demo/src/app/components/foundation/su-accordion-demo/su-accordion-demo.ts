import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Accordion } from '@synerity/ui';

@Component({
  selector: 'app-su-accordion-demo',
  imports: [CommonModule, FormsModule, Accordion],
  templateUrl: './su-accordion-demo.html',
  styleUrl: './su-accordion-demo.scss'
})
export class SuAccordionDemo {
  // Basic accordion data
  basicTabs = [
    {
      header: 'What is Angular?',
      content: 'Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your applications.'
    },
    {
      header: 'What are Angular components?',
      content: 'Components are the main building blocks of Angular applications. Each component consists of an HTML template that declares what renders on the page, a TypeScript class that defines behavior, and CSS selector that defines how the component is used in a template.'
    },
    {
      header: 'What is Angular CLI?',
      content: 'The Angular CLI is a command-line interface tool that you use to initialize, develop, scaffold, and maintain Angular applications directly from a command shell.'
    }
  ];

  // Multiple selection accordion data
  multipleTabs = [
    {
      header: 'Frontend Technologies',
      content: 'Modern frontend development involves HTML, CSS, JavaScript, TypeScript, React, Vue.js, Angular, and various build tools like Webpack, Vite, and Parcel.'
    },
    {
      header: 'Backend Technologies',
      content: 'Backend development includes server-side languages like Node.js, Python, Java, C#, PHP, and databases like MySQL, PostgreSQL, MongoDB, and Redis.'
    },
    {
      header: 'DevOps & Tools',
      content: 'DevOps practices involve Docker, Kubernetes, CI/CD pipelines, AWS, Azure, Git, GitHub Actions, and monitoring tools like Prometheus and Grafana.'
    }
  ];

  // FAQ accordion data
  faqTabs = [
    {
      header: 'How do I install Angular?',
      content: 'You can install Angular CLI globally using npm: `npm install -g @angular/cli`. Then create a new project with `ng new my-app`.'
    },
    {
      header: 'What is the difference between Angular and React?',
      content: 'Angular is a full-fledged framework with built-in features, while React is a library focused on UI components. Angular uses TypeScript by default and has a more opinionated structure.'
    },
    {
      header: 'How do I deploy an Angular app?',
      content: 'Build your app with `ng build --prod` and deploy the generated files from the `dist` folder to any static hosting service like Netlify, Vercel, or AWS S3.'
    }
  ];

  // Accordion states
  singleActiveIndex = 0;
  multipleActiveIndexes: number[] = [0];
  faqActiveIndex = -1;

  // Accordion variants
  variants = [
    { variant: 'default', label: 'Default' },
    { variant: 'bordered', label: 'Bordered' },
    { variant: 'minimal', label: 'Minimal' }
  ] as const;

  // Accordion sizes
  sizes = [
    { size: 'small', label: 'Small' },
    { size: 'medium', label: 'Medium' },
    { size: 'large', label: 'Large' }
  ] as const;

  // Current demo settings
  selectedVariant: 'default' | 'bordered' | 'minimal' = 'default';
  selectedSize: 'small' | 'medium' | 'large' = 'medium';
  allowMultiple = false;

  // Event handlers
  onSingleAccordionChange(event: number | number[]): void {
    this.singleActiveIndex = event as number;
    console.log('Single accordion changed:', event);
  }

  onMultipleAccordionChange(event: number | number[]): void {
    this.multipleActiveIndexes = event as number[];
    console.log('Multiple accordion changed:', event);
  }

  onFaqAccordionChange(event: number | number[]): void {
    this.faqActiveIndex = event as number;
    console.log('FAQ accordion changed:', event);
  }

  onAccordionOpen(event: any): void {
    console.log('Accordion opened:', event);
  }

  onAccordionClose(event: any): void {
    console.log('Accordion closed:', event);
  }

  // Utility methods
  resetSingleAccordion(): void {
    this.singleActiveIndex = 0;
  }

  resetMultipleAccordion(): void {
    this.multipleActiveIndexes = [0];
  }

  resetFaqAccordion(): void {
    this.faqActiveIndex = -1;
  }

  openAllMultiple(): void {
    this.multipleActiveIndexes = [0, 1, 2];
  }

  closeAllMultiple(): void {
    this.multipleActiveIndexes = [];
  }

  getActiveIndexesText(): string {
    if (this.multipleActiveIndexes.length === 0) {
      return 'None';
    }
    return this.multipleActiveIndexes.map(i => `Tab ${i + 1}`).join(', ');
  }

  getSingleActiveText(): string {
    if (this.singleActiveIndex === -1) {
      return 'None';
    }
    return `Tab ${this.singleActiveIndex + 1}`;
  }

  getFaqActiveText(): string {
    if (this.faqActiveIndex === -1) {
      return 'None';
    }
    return `FAQ ${this.faqActiveIndex + 1}`;
  }
}
