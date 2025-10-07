import { ComponentModel } from '../../models/component.model';

export const navigationComponents: ComponentModel[] = [
  {
        id: 'menu',
        name: 'Menu',
        category: 'Navigation',
        description: 'Navigation menu component with support for icons, submenus, and popup functionality',
        examples: [
          {
            name: 'Basic',
            code: '<sui-menu \n  [model]="basicMenuItems"\n  variant="outlined"\n  (onItemClick)="onBasicItemClick($event)">\n</sui-menu>',
               tsCode: `export class MenuComponent {
     basicMenuItems = [
       { label: 'Home', icon: 'home' },
       { label: 'About', icon: 'info' },
       { label: 'Contact', icon: 'mail' }
     ];
  
     onBasicItemClick(item: any): void {
       console.log('Menu item clicked:', item);
     }
   }`,
            description: 'Basic navigation menu with simple items'
          },
          {
            name: 'With Icons',
            code: '<sui-menu \n  [model]="iconMenuItems"\n  variant="filled"\n  [glow]="true"\n  (onItemClick)="onIconItemClick($event)">\n</sui-menu>',
               tsCode: `export class MenuComponent {
     iconMenuItems = [
       { label: 'Dashboard', icon: 'layout-dashboard', highlight: true },
       { label: 'Analytics', icon: 'bar-chart-3', badge: '12' },
       { label: 'Reports', icon: 'file-text', tooltip: 'Generate reports' },
       { separator: true },
       { label: 'Settings', icon: 'settings' },
       { label: 'Profile', icon: 'user', badge: 'New' }
     ];
  
     onIconItemClick(item: any): void {
       console.log('Icon menu item clicked:', item);
     }
   }`,
            description: 'Menu with icons and separators'
          },
          {
            name: 'With Submenus',
            code: '<sui-menu \n  [model]="submenuItems"\n  (onItemClick)="onSubmenuItemClick($event)">\n</sui-menu>',
               tsCode: `export class MenuComponent {
     submenuItems = [
       {
         label: 'File',
         icon: 'file',
         items: [
           { label: 'New', icon: 'plus' },
           { label: 'Open', icon: 'folder-open' },
           { label: 'Save', icon: 'save' }
         ]
       },
       {
         label: 'Edit',
         icon: 'edit',
         items: [
           { label: 'Cut', icon: 'scissors' },
           { label: 'Copy', icon: 'copy' },
           { label: 'Paste', icon: 'clipboard' }
         ]
       }
     ];
  
     onSubmenuItemClick(item: any): void {
       console.log('Submenu item clicked:', item);
     }
   }`,
            description: 'Menu with nested submenu items'
          },
          {
            name: 'Disabled Items',
            code: '<sui-menu \n  [model]="disabledMenuItems"\n  (onItemClick)="onDisabledItemClick($event)">\n</sui-menu>',
            tsCode: `export class MenuComponent {
    disabledMenuItems = [
      { label: 'Available', icon: '✅' },
      { label: 'Disabled Item', icon: '❌', disabled: true },
      { label: 'Another Available', icon: '✅' },
      { separator: true },
      { label: 'Coming Soon', icon: '⏳', disabled: true }
    ];
  
    onDisabledItemClick(item: any): void {
      console.log('Disabled menu item clicked:', item);
    }
  }`,
            description: 'Menu with disabled items and separators'
          },
          {
            name: 'Popup Menu',
            code: '<sui-button \n  variant="primary" \n  (click)="showPopupMenu($event)">\n  Right Click Me\n</sui-button>\n<sui-menu \n  #popupMenu\n  [model]="popupMenuItems"\n  [popup]="true"\n  (onItemClick)="onPopupItemClick($event)">\n</sui-menu>',
            tsCode: `export class MenuComponent {
    popupMenuItems = [
      { label: 'Edit', icon: '✏️' },
      { label: 'Duplicate', icon: '📋' },
      { label: 'Delete', icon: '🗑️' },
      { separator: true },
      { label: 'Share', icon: '📤' }
    ];
  
    popupMenu: any;
  
    showPopupMenu(event: Event): void {
      if (this.popupMenu) {
        this.popupMenu.show(event);
      }
    }
  
    onPopupItemClick(item: any): void {
      console.log('Popup menu item clicked:', item);
    }
  }`,
            description: 'Popup menu triggered by button click'
          },
          {
            name: 'Small Size',
            code: '<sui-menu \n  [model]="smallMenuItems"\n  styleClass="sui-menu-sm"\n  (onItemClick)="onSmallItemClick($event)">\n</sui-menu>',
            tsCode: `export class MenuComponent {
    smallMenuItems = [
      { label: 'Item 1', icon: '1️⃣' },
      { label: 'Item 2', icon: '2️⃣' },
      { label: 'Item 3', icon: '3️⃣' }
    ];
  
    onSmallItemClick(item: any): void {
      console.log('Small menu item clicked:', item);
    }
  }`,
            description: 'Small menu with reduced padding and font sizes'
          },
          {
            name: 'Large Size',
            code: '<sui-menu \n  [model]="largeMenuItems"\n  styleClass="sui-menu-lg"\n  (onItemClick)="onLargeItemClick($event)">\n</sui-menu>',
            tsCode: `export class MenuComponent {
    largeMenuItems = [
      { label: 'Large Item One', icon: '🔴' },
      { label: 'Large Item Two', icon: '🟢' },
      { label: 'Large Item Three', icon: '🔵' }
    ];
  
    onLargeItemClick(item: any): void {
      console.log('Large menu item clicked:', item);
    }
  }`,
            description: 'Large menu with increased padding and font sizes'
          }
        ],
        props: [
          {
            name: 'model',
            type: 'MenuItem[]',
            default: '[]',
            description: 'Array of menu items with label, icon/lucideIcon, command, disabled, separator, items, badge, tooltip, and highlight properties',
            required: true
          },
          {
            name: 'popup',
            type: 'boolean',
            default: 'false',
            description: 'Whether the menu should be used as a popup menu',
            required: false
          },
          {
            name: 'variant',
            type: 'string',
            default: '"default"',
            description: 'Menu variant: "default", "outlined", or "filled"',
            required: false
          },
          {
            name: 'size',
            type: 'string',
            default: '"md"',
            description: 'Menu size: "sm", "md", or "lg"',
            required: false
          },
          {
            name: 'glow',
            type: 'boolean',
            default: 'false',
            description: 'Whether to add glow effect to the menu',
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
            description: 'Inline styles for the menu',
            required: false
          }
        ],
        usage: 'Use menus for navigation, context menus, and application structure. Menus support Lucide icons, separators, disabled items, submenus, badges, tooltips, highlights, and popup functionality with theme-aware styling and modern animations.',
        tags: ['navigation', 'menu', 'dropdown', 'context-menu', 'popup']
      },
  {
        id: 'context-menu',
        name: 'Context Menu',
        category: 'Navigation',
        description: 'Right-click context menu component',
        examples: [],
        props: [],
        usage: 'Use context menus for right-click actions.',
        tags: ['navigation', 'menu']
      },
  {
        id: 'dock',
        name: 'Dock',
        category: 'Navigation',
        description: 'Dock navigation component',
        examples: [],
        props: [],
        usage: 'Use docks for application navigation.',
        tags: ['navigation', 'dock']
      },
  {
        id: 'menubar',
        name: 'Menubar',
        category: 'Navigation',
        description: 'Menu bar component',
        examples: [],
        props: [],
        usage: 'Use menubars for application menus.',
        tags: ['navigation', 'menu']
      },
  {
        id: 'mega-menu',
        name: 'Mega Menu',
        category: 'Navigation',
        description: 'Large menu component',
        examples: [],
        props: [],
        usage: 'Use mega menus for complex navigation.',
        tags: ['navigation', 'menu']
      },
  {
        id: 'panel-menu',
        name: 'Panel Menu',
        category: 'Navigation',
        description: 'Panel-based menu component',
        examples: [],
        props: [],
        usage: 'Use panel menus for sidebar navigation.',
        tags: ['navigation', 'menu']
      },
  {
        id: 'tiered-menu',
        name: 'Tiered Menu',
        category: 'Navigation',
        description: 'Multi-level menu component',
        examples: [],
        props: [],
        usage: 'Use tiered menus for hierarchical navigation.',
        tags: ['navigation', 'menu']
      },
];
