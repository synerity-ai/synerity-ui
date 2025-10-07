import { ComponentModel } from '../../models/component.model';

export const layoutComponents: ComponentModel[] = [
  {
        id: 'panel',
        name: 'Panel',
        category: 'Layout',
        description: 'Panel component for grouping content with collapsible functionality',
        examples: [
          {
            name: 'Basic',
            code: '<sui-panel \n  header="Basic Panel"\n  [collapsed]="basicCollapsed"\n  (onToggle)="onBasicToggle($event)">\n  <p>This is a basic panel with some content.</p>\n</sui-panel>',
            tsCode: `export class PanelComponent {
    basicCollapsed = false;
  
    onBasicToggle(event: any): void {
      console.log('Basic panel toggle:', event);
    }
  }`,
            description: 'Basic panel with header and content'
          },
          {
            name: 'Toggleable',
            code: '<sui-panel \n  header="Toggleable Panel"\n  [toggleable]="true"\n  [collapsed]="toggleableCollapsed"\n  (onToggle)="onToggleableToggle($event)">\n  <p>This panel can be collapsed and expanded.</p>\n</sui-panel>',
            tsCode: `export class PanelComponent {
    toggleableCollapsed = false;
  
    onToggleableToggle(event: any): void {
      console.log('Toggleable panel toggle:', event);
    }
  }`,
            description: 'Panel with toggle functionality'
          },
          {
            name: 'Without Header',
            code: '<sui-panel \n  [showHeader]="false">\n  <p>This panel doesn\'t have a header.</p>\n</sui-panel>',
            tsCode: `export class PanelComponent {
    // No header panel - just content
  }`,
            description: 'Panel without header for simple containers'
          },
          {
            name: 'Custom Styled',
            code: '<sui-panel \n  header="Custom Styled Panel"\n  [toggleable]="true"\n  [collapsed]="customCollapsed"\n  styleClass="sui-panel-filled"\n  (onToggle)="onCustomToggle($event)">\n  <p>This panel uses custom styling.</p>\n</sui-panel>',
            tsCode: `export class PanelComponent {
    customCollapsed = false;
  
    onCustomToggle(event: any): void {
      console.log('Custom panel toggle:', event);
    }
  }`,
            description: 'Panel with custom styling and CSS classes'
          },
          {
            name: 'Rich Content',
            code: '<sui-panel \n  header="Panel with Rich Content"\n  [toggleable]="true"\n  [collapsed]="contentCollapsed"\n  (onToggle)="onContentToggle($event)">\n  <div class="space-y-4">\n    <h4>Panel Content</h4>\n    <p>Rich content with multiple elements.</p>\n    <sui-button variant="primary" size="sm">Action Button</sui-button>\n  </div>\n</sui-panel>',
            tsCode: `export class PanelComponent {
    contentCollapsed = false;
  
    onContentToggle(event: any): void {
      console.log('Content panel toggle:', event);
    }
  }`,
            description: 'Panel containing rich content with multiple elements'
          },
          {
            name: 'Small Size',
            code: '<sui-panel \n  header="Small Panel"\n  [toggleable]="true"\n  [collapsed]="smallCollapsed"\n  styleClass="sui-panel-sm"\n  (onToggle)="onSmallToggle($event)">\n  <p>This is a small panel.</p>\n</sui-panel>',
            tsCode: `export class PanelComponent {
    smallCollapsed = false;
  
    onSmallToggle(event: any): void {
      console.log('Small panel toggle:', event);
    }
  }`,
            description: 'Small panel with reduced padding and font sizes'
          },
          {
            name: 'With Header and Footer',
            code: '<sui-panel \n  header="Panel with Footer"\n  footer="Footer text with actions"\n  [toggleable]="true"\n  [collapsed]="headerFooterCollapsed"\n  [showFooter]="true"\n  (onToggle)="onHeaderFooterToggle($event)">\n  <div>\n    <h4>Panel Content</h4>\n    <p>This panel demonstrates both header and footer functionality.</p>\n  </div>\n</sui-panel>',
            tsCode: `export class PanelComponent {
    headerFooterCollapsed = false;
  
    onHeaderFooterToggle(event: any): void {
      console.log('Header footer panel toggle:', event);
    }
  }`,
            description: 'Panel with both header and footer sections with matching styling'
          }
        ],
        props: [
          {
            name: 'header',
            type: 'string',
            default: '""',
            description: 'Panel header text',
            required: false
          },
          {
            name: 'footer',
            type: 'string',
            default: '""',
            description: 'Panel footer text',
            required: false
          },
          {
            name: 'toggleable',
            type: 'boolean',
            default: 'false',
            description: 'Whether the panel can be collapsed/expanded',
            required: false
          },
          {
            name: 'collapsed',
            type: 'boolean',
            default: 'false',
            description: 'Whether the panel is collapsed',
            required: false
          },
          {
            name: 'showHeader',
            type: 'boolean',
            default: 'true',
            description: 'Whether to show the panel header',
            required: false
          },
          {
            name: 'showFooter',
            type: 'boolean',
            default: 'false',
            description: 'Whether to show the panel footer',
            required: false
          },
          {
            name: 'styleClass',
            type: 'string',
            default: '""',
            description: 'Additional CSS classes for styling',
            required: false
          },
          {
            name: 'style',
            type: 'object',
            default: '{}',
            description: 'Inline styles for the panel',
            required: false
          }
        ],
        usage: 'Use panels to group related content and actions. Panels can be collapsible, styled with custom CSS, and contain any type of content including forms, text, images, or other components.',
        tags: ['layout', 'container', 'collapsible', 'accordion', 'content']
      },
  {
        id: 'divider',
        name: 'Divider',
        category: 'Layout',
        description: 'Content divider component',
        examples: [],
        props: [],
        usage: 'Use dividers to separate content sections.',
        tags: ['layout', 'separator']
      },
  {
        id: 'fieldset',
        name: 'Fieldset',
        category: 'Layout',
        description: 'Form fieldset component',
        examples: [],
        props: [],
        usage: 'Use fieldsets to group form fields.',
        tags: ['layout', 'form']
      },
  {
        id: 'fluid',
        name: 'Fluid',
        category: 'Layout',
        description: 'Fluid layout component',
        examples: [],
        props: [],
        usage: 'Use fluid layouts for responsive design.',
        tags: ['layout', 'responsive']
      },
  {
        id: 'splitter',
        name: 'Splitter',
        category: 'Layout',
        description: 'Resizable splitter component',
        examples: [],
        props: [],
        usage: 'Use splitters for resizable panels.',
        tags: ['layout', 'resizable']
      },
  {
        id: 'stepper',
        name: 'Stepper',
        category: 'Layout',
        description: 'Step navigation component',
        examples: [],
        props: [],
        usage: 'Use steppers for step-by-step processes.',
        tags: ['layout', 'navigation']
      },
  {
        id: 'toolbar',
        name: 'Toolbar',
        category: 'Layout',
        description: 'Toolbar component',
        examples: [],
        props: [],
        usage: 'Use toolbars for action buttons and controls.',
        tags: ['layout', 'actions']
      },
];
