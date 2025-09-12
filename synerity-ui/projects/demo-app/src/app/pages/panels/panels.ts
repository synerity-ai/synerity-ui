import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Accordion,
  Divider,
  Fieldset,
  Panel,
  ScrollPanel,
  Splitter,
  Stepper,
  Tabs,
  Toolbar
} from 'ui-lib';

@Component({
  selector: 'app-panels',
  imports: [
    CommonModule,
    Accordion,
    Divider,
    Fieldset,
    Panel,
    ScrollPanel,
    Splitter,
    Stepper,
    Tabs,
    Toolbar
  ],
  templateUrl: './panels.html',
  styleUrl: './panels.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Panels {
  // Accordion data
  accordionItems = [
    {
      header: 'Personal Information',
      content: 'This is the personal information section with details about the user.',
      expanded: false
    },
    {
      header: 'Contact Details',
      content: 'Contact information including phone, email, and address.',
      expanded: false
    },
    {
      header: 'Preferences',
      content: 'User preferences and settings configuration.',
      expanded: false
    }
  ];

  // Fieldset data
  fieldsetData = {
    legend: 'User Profile',
    content: 'This fieldset contains user profile information and related fields.'
  };

  // Stepper data
  stepperSteps = [
    { label: 'Personal Info', completed: true },
    { label: 'Contact Details', completed: true },
    { label: 'Preferences', completed: false },
    { label: 'Review', completed: false }
  ];

  // Tabs data
  tabsItems = [
    { label: 'Overview', content: 'This is the overview tab content.' },
    { label: 'Details', content: 'Detailed information goes here.' },
    { label: 'Settings', content: 'Configuration and settings options.' }
  ];

  // Toolbar items
  toolbarItems = [
    { label: 'Save', icon: 'pi pi-save', command: () => this.onSave() },
    { label: 'Edit', icon: 'pi pi-pencil', command: () => this.onEdit() },
    { label: 'Delete', icon: 'pi pi-trash', command: () => this.onDelete() }
  ];

  // Panel content
  panelContent = 'This is a basic panel component with some sample content. Panels are useful for grouping related content and providing visual separation.';

  // Scroll panel content
  scrollPanelContent = `
    <h3>Scrollable Content</h3>
    <p>This is a scrollable panel with a lot of content to demonstrate the scrolling functionality.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
    <p>Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
  `;

  // Splitter panels
  splitterPanels = [
    { content: 'Left Panel Content', size: 30 },
    { content: 'Right Panel Content', size: 70 }
  ];

  // Event handlers
  onSave() {
    console.log('Save clicked');
    alert('Save functionality triggered!');
  }

  onEdit() {
    console.log('Edit clicked');
    alert('Edit functionality triggered!');
  }

  onDelete() {
    console.log('Delete clicked');
    alert('Delete functionality triggered!');
  }

  onAccordionChange(event: any) {
    console.log('Accordion changed:', event);
  }

  onStepperChange(event: any) {
    console.log('Stepper changed:', event);
  }

  onTabChange(event: any) {
    console.log('Tab changed:', event);
  }
}
