import { ComponentModel } from '../../models/component.model';

export const overlayComponents: ComponentModel[] = [
  {
        id: 'dialog',
        name: 'Dialog',
        category: 'Overlay',
        description: 'Modal dialog component with header, content, and customizable features',
        examples: [
          {
            name: 'Basic',
            code: '<sui-button \n  variant="primary" \n  (click)="showDialog()">\n  Open Dialog\n</sui-button>\n\n<sui-dialog\n  [visible]="dialogVisible"\n  header="Basic Dialog"\n  (onShow)="onDialogShow()"\n  (onHide)="onDialogHide()">\n  <p>This is a basic dialog with header and content.</p>\n</sui-dialog>',
            tsCode: `export class DialogComponent {
    dialogVisible = false;
  
    showDialog(): void {
      this.dialogVisible = true;
    }
  
    onDialogShow(): void {
      console.log('Dialog shown');
    }
  
    onDialogHide(): void {
      console.log('Dialog hidden');
    }
  }`,
            description: 'Basic dialog with header and content'
          },
          {
            name: 'Modal',
            code: '<sui-dialog\n  [visible]="modalVisible"\n  [modal]="true"\n  header="Modal Dialog"\n  (onHide)="onDialogHide()">\n  <p>This is a modal dialog that blocks background interaction.</p>\n</sui-dialog>',
            tsCode: `export class DialogComponent {
    modalVisible = false;
  
    showModal(): void {
      this.modalVisible = true;
    }
  
    onDialogHide(): void {
      console.log('Modal dialog hidden');
    }
  }`,
            description: 'Modal dialog that blocks background interaction'
          },
          {
            name: 'Sizes',
            code: '<sui-dialog\n  [visible]="smallVisible"\n  header="Small Dialog"\n  size="sm">\n  <p>Small dialog with compact sizing.</p>\n</sui-dialog>\n\n<sui-dialog\n  [visible]="largeVisible"\n  header="Large Dialog"\n  size="lg">\n  <p>Large dialog with more space for content.</p>\n</sui-dialog>',
            tsCode: `export class DialogComponent {
    smallVisible = false;
    largeVisible = false;
  
    showSmall(): void {
      this.smallVisible = true;
    }
  
    showLarge(): void {
      this.largeVisible = true;
    }
  }`,
            description: 'Different dialog sizes: small, medium, large, extra large, and full screen'
          },
          {
            name: 'Positions',
            code: '<sui-dialog\n  [visible]="topVisible"\n  header="Top Dialog"\n  position="top">\n  <p>Dialog positioned at the top.</p>\n</sui-dialog>\n\n<sui-dialog\n  [visible]="rightVisible"\n  header="Right Dialog"\n  position="right">\n  <p>Dialog positioned on the right.</p>\n</sui-dialog>',
            tsCode: `export class DialogComponent {
    topVisible = false;
    rightVisible = false;
  
    showTop(): void {
      this.topVisible = true;
    }
  
    showRight(): void {
      this.rightVisible = true;
    }
  }`,
            description: 'Dialog positioning options: center, top, bottom, left, right, and corners'
          },
          {
            name: 'Advanced Features',
            code: '<sui-dialog\n  [visible]="maximizableVisible"\n  header="Maximizable Dialog"\n  [maximizable]="true"\n  (onMaximize)="onMaximize()"\n  (onUnmaximize)="onUnmaximize()">\n  <p>This dialog can be maximized to full screen.</p>\n</sui-dialog>\n\n<sui-dialog\n  [visible]="resizableVisible"\n  header="Resizable Dialog"\n  [resizable]="true">\n  <p>This dialog can be resized by dragging.</p>\n</sui-dialog>',
            tsCode: `export class DialogComponent {
    maximizableVisible = false;
    resizableVisible = false;
  
    showMaximizable(): void {
      this.maximizableVisible = true;
    }
  
    showResizable(): void {
      this.resizableVisible = true;
    }
  
    onMaximize(): void {
      console.log('Dialog maximized');
    }
  
    onUnmaximize(): void {
      console.log('Dialog unmaximized');
    }
  }`,
            description: 'Advanced features: maximizable, resizable, and non-closable dialogs'
          }
        ],
        props: [
          {
            name: 'visible',
            type: 'boolean',
            default: 'false',
            description: 'Controls the visibility of the dialog',
            required: true
          },
          {
            name: 'header',
            type: 'string',
            default: '""',
            description: 'Header text for the dialog',
            required: false
          },
          {
            name: 'modal',
            type: 'boolean',
            default: 'true',
            description: 'Whether the dialog is modal (blocks background interaction)',
            required: false
          },
          {
            name: 'closable',
            type: 'boolean',
            default: 'true',
            description: 'Whether the dialog can be closed via the X button or backdrop click',
            required: false
          },
          {
            name: 'maximizable',
            type: 'boolean',
            default: 'false',
            description: 'Whether the dialog can be maximized to full screen',
            required: false
          },
          {
            name: 'resizable',
            type: 'boolean',
            default: 'false',
            description: 'Whether the dialog can be resized by dragging',
            required: false
          },
          {
            name: 'size',
            type: 'string',
            default: 'md',
            description: 'Size of the dialog: sm, md, lg, xl, or full',
            required: false
          },
          {
            name: 'position',
            type: 'string',
            default: 'center',
            description: 'Position of the dialog: center, top, bottom, left, right, top-left, top-right, bottom-left, or bottom-right',
            required: false
          },
          {
            name: 'width',
            type: 'string',
            default: 'auto',
            description: 'Custom width for the dialog',
            required: false
          },
          {
            name: 'height',
            type: 'string',
            default: 'auto',
            description: 'Custom height for the dialog',
            required: false
          },
          {
            name: 'style',
            type: 'object',
            default: '{}',
            description: 'Inline styles for the dialog',
            required: false
          },
          {
            name: 'styleClass',
            type: 'string',
            default: '""',
            description: 'CSS classes for the dialog',
            required: false
          }
        ],
        events: [
          {
            name: 'onShow',
            type: 'EventEmitter<void>',
            description: 'Callback to invoke when the dialog is shown.'
          },
          {
            name: 'onHide',
            type: 'EventEmitter<void>',
            description: 'Callback to invoke when the dialog is hidden.'
          },
          {
            name: 'onMaximize',
            type: 'EventEmitter<void>',
            description: 'Callback to invoke when the dialog is maximized.'
          },
          {
            name: 'onUnmaximize',
            type: 'EventEmitter<void>',
            description: 'Callback to invoke when the dialog is unmaximized.'
          }
        ],
        usage: 'Use dialogs for modal interactions, forms, confirmations, and displaying important information. Dialogs support multiple sizes, positions, and advanced features like maximization and resizing with theme-aware styling.',
        tags: ['overlay', 'modal', 'dialog', 'popup', 'form']
      },
  {
        id: 'dialog',
        name: 'Dialog',
        category: 'Overlay',
        description: 'Modal dialog component',
        examples: [
          {
            name: 'Basic Dialog',
            code: '<sui-dialog header="Dialog Title" [visible]="showDialog">Dialog content</sui-dialog>',
            description: 'Basic modal dialog'
          }
        ],
        props: [
          {
            name: 'visible',
            type: 'boolean',
            default: 'false',
            description: 'Whether dialog is visible',
            required: true
          }
        ],
        usage: 'Use dialogs to display modal content and forms.',
        tags: ['modal', 'dialog', 'overlay']
      },
  {
        id: 'block-ui',
        name: 'Block UI',
        category: 'Overlay',
        description: 'UI blocking component',
        examples: [],
        props: [],
        usage: 'Use block UI to prevent user interaction.',
        tags: ['overlay', 'block']
      },
  {
        id: 'captcha',
        name: 'Captcha',
        category: 'Overlay',
        description: 'Captcha verification component',
        examples: [],
        props: [],
        usage: 'Use captchas for bot verification.',
        tags: ['overlay', 'security']
      },
  {
        id: 'drawer',
        name: 'Drawer',
        category: 'Overlay',
        description: 'Sliding drawer component',
        examples: [],
        props: [],
        usage: 'Use drawers for sliding panels.',
        tags: ['overlay', 'drawer']
      },
  {
        id: 'dynamic-dialog',
        name: 'Dynamic Dialog',
        category: 'Overlay',
        description: 'Dynamic dialog component',
        examples: [],
        props: [],
        usage: 'Use dynamic dialogs for programmatic dialogs.',
        tags: ['overlay', 'dialog']
      },
  {
        id: 'overlay-panel',
        name: 'Overlay Panel',
        category: 'Overlay',
        description: 'Contextual overlay panel component that displays content in a floating panel',
        examples: [
          {
            name: 'Basic Overlay Panel',
            code: '<sui-button variant="primary" (click)="toggleBasicOverlay()">\n  {{ basicOverlayVisible ? \'Hide\' : \'Show\' }} Panel\n</sui-button>\n\n<sui-overlay-panel \n  [visible]="basicOverlayVisible"\n  [dismissible]="true"\n  (onShow)="onShow()"\n  (onHide)="onHide()">\n  <div class="panel-content">\n    <h4>Basic Overlay Panel</h4>\n    <p>This is a basic overlay panel with simple content.</p>\n  </div>\n</sui-overlay-panel>',
            tsCode: `export class OverlayPanelComponent {
    basicOverlayVisible = false;
  
    toggleBasicOverlay(): void {
      this.basicOverlayVisible = !this.basicOverlayVisible;
    }
  
    onShow(): void {
      console.log('Overlay panel shown');
    }
  
    onHide(): void {
      console.log('Overlay panel hidden');
    }
  }`,
            description: 'Basic overlay panel with simple content'
          },
          {
            name: 'Size Variants',
            code: '<sui-overlay-panel [visible]="visible" size="small">\n  <div class="panel-content">\n    <h4>Small Panel</h4>\n    <p>This is a small overlay panel.</p>\n  </div>\n</sui-overlay-panel>\n\n<sui-overlay-panel [visible]="visible" size="normal">\n  <div class="panel-content">\n    <h4>Normal Panel</h4>\n    <p>This is a normal sized overlay panel.</p>\n  </div>\n</sui-overlay-panel>\n\n<sui-overlay-panel [visible]="visible" size="large">\n  <div class="panel-content">\n    <h4>Large Panel</h4>\n    <p>This is a large overlay panel with more space.</p>\n  </div>\n</sui-overlay-panel>',
            description: 'Overlay panels in different sizes: small, normal, and large'
          },
          {
            name: 'Position Variants',
            code: '<sui-overlay-panel [visible]="visible" position="top">\n  <div class="panel-content">\n    <h4>Top Position</h4>\n    <p>Panel appears above the trigger.</p>\n  </div>\n</sui-overlay-panel>\n\n<sui-overlay-panel [visible]="visible" position="bottom">\n  <div class="panel-content">\n    <h4>Bottom Position</h4>\n    <p>Panel appears below the trigger.</p>\n  </div>\n</sui-overlay-panel>',
            description: 'Overlay panels positioned in different directions'
          },
          {
            name: 'Modal Overlay',
            code: '<sui-overlay-panel \n  [visible]="modalVisible"\n  [modal]="true"\n  [dismissible]="true">\n  <div class="panel-content">\n    <h4>Modal Overlay Panel</h4>\n    <p>This is a modal overlay panel that blocks background interaction.</p>\n    <div class="mt-4">\n      <sui-button variant="primary" (click)="modalVisible = false">Close</sui-button>\n      <sui-button variant="outline" (click)="modalVisible = false">Cancel</sui-button>\n    </div>\n  </div>\n</sui-overlay-panel>',
            description: 'Modal overlay panel with backdrop'
          },
          {
            name: 'With Close Button',
            code: '<sui-overlay-panel \n  [visible]="visible"\n  [showCloseIcon]="true"\n  [dismissible]="true">\n  <div class="panel-content">\n    <h4>Panel with Close Button</h4>\n    <p>This overlay panel includes a close button.</p>\n    <div class="mt-4">\n      <sui-button variant="outline" size="small">Action</sui-button>\n    </div>\n  </div>\n</sui-overlay-panel>',
            description: 'Overlay panel with close button in header'
          },
          {
            name: 'Rich Content',
            code: '<sui-overlay-panel \n  [visible]="visible"\n  [showCloseIcon]="true"\n  size="large"\n  [dismissible]="true">\n  <div class="panel-content">\n    <div class="user-profile">\n      <div class="user-avatar">\n        <div class="avatar-circle">JD</div>\n      </div>\n      <div class="user-info">\n        <h4>John Doe</h4>\n        <p>john.doe@example.com</p>\n        <p>Software Engineer</p>\n      </div>\n    </div>\n    <div class="user-actions">\n      <sui-button variant="primary" size="small">Edit Profile</sui-button>\n      <sui-button variant="outline" size="small">Settings</sui-button>\n    </div>\n  </div>\n</sui-overlay-panel>',
            description: 'Overlay panel with rich interactive content'
          },
          {
            name: 'Custom Styling',
            code: '<sui-overlay-panel \n  [visible]="visible"\n  [showCloseIcon]="true"\n  styleClass="custom-overlay-panel"\n  [style]="{\'--overlay-bg\': \'#8b5cf6\', \'--overlay-text\': \'white\'}"\n  [dismissible]="true">\n  <div class="panel-content">\n    <h4 class="text-white">Custom Styled Panel</h4>\n    <p class="text-white">Custom styling applied via CSS variables.</p>\n  </div>\n</sui-overlay-panel>',
            description: 'Overlay panel with custom styling'
          }
        ],
        props: [
          {
            name: 'visible',
            type: 'boolean',
            default: 'false',
            description: 'Whether the overlay panel is visible',
            required: false
          },
          {
            name: 'size',
            type: 'string',
            default: 'normal',
            description: 'Size of the overlay panel (small, normal, large)',
            required: false
          },
          {
            name: 'position',
            type: 'string',
            default: 'null',
            description: 'Position of the overlay panel relative to trigger (top, bottom, left, right)',
            required: false
          },
          {
            name: 'modal',
            type: 'boolean',
            default: 'false',
            description: 'Whether the overlay panel is modal (blocks background interaction)',
            required: false
          },
          {
            name: 'dismissible',
            type: 'boolean',
            default: 'true',
            description: 'Whether the overlay panel can be dismissed by clicking outside or pressing Escape',
            required: false
          },
          {
            name: 'showCloseIcon',
            type: 'boolean',
            default: 'true',
            description: 'Whether to show a close button in the overlay panel',
            required: false
          },
          {
            name: 'appendTo',
            type: 'string',
            default: 'null',
            description: 'Element to append the overlay panel to',
            required: false
          },
          {
            name: 'baseZIndex',
            type: 'number',
            default: '0',
            description: 'Base z-index for the overlay panel',
            required: false
          },
          {
            name: 'autoZIndex',
            type: 'boolean',
            default: 'true',
            description: 'Whether to automatically manage z-index',
            required: false
          },
          {
            name: 'style',
            type: 'object',
            default: '{}',
            description: 'Inline styles for the overlay panel',
            required: false
          },
          {
            name: 'styleClass',
            type: 'string',
            default: '""',
            description: 'CSS class for custom styling',
            required: false
          }
        ],
        events: [
          {
            name: 'onShow',
            type: 'EventEmitter<void>',
            description: 'Event emitted when the overlay panel is shown'
          },
          {
            name: 'onHide',
            type: 'EventEmitter<void>',
            description: 'Event emitted when the overlay panel is hidden'
          },
          {
            name: 'visibleChange',
            type: 'EventEmitter<boolean>',
            description: 'Event emitted when the visibility of the overlay panel changes'
          }
        ],
        usage: 'Use overlay panels to display contextual content, menus, forms, or any information that needs to be shown in a floating panel. They are perfect for user profiles, settings panels, contextual menus, or any content that should appear on demand without navigating away from the current page.',
        tags: ['overlay', 'panel', 'contextual', 'floating', 'menu']
      },
  {
        id: 'popover',
        name: 'Popover',
        category: 'Overlay',
        description: 'Popover component',
        examples: [],
        props: [],
        usage: 'Use popovers for contextual information.',
        tags: ['overlay', 'popover']
      },
  {
        id: 'tooltip',
        name: 'Tooltip',
        category: 'Overlay',
        description: 'Tooltip component',
        examples: [],
        props: [],
        usage: 'Use tooltips for helpful hints.',
        tags: ['overlay', 'tooltip']
      },
  {
        id: 'popover',
        name: 'Popover',
        category: 'Overlay',
        description: 'Contextual popover component that displays content relative to a trigger element',
        examples: [
          {
            name: 'Basic Popover',
            code: '<sui-popover [visible]="false" position="bottom" dismissible="true">\n  <sui-button variant="primary" slot="trigger">\n    Click me\n  </sui-button>\n  <div slot="content">\n    <p>This is a basic popover content.</p>\n  </div>\n</sui-popover>',
            description: 'Basic popover with trigger button and content'
          },
          {
            name: 'Position Variants',
            code: '<sui-popover [visible]="false" position="top">\n  <sui-button variant="outline">Top</sui-button>\n  <div slot="content">Popover on top</div>\n</sui-popover>\n\n<sui-popover [visible]="false" position="bottom">\n  <sui-button variant="outline">Bottom</sui-button>\n  <div slot="content">Popover on bottom</div>\n</sui-popover>',
            description: 'Popover positioned in different directions'
          },
          {
            name: 'With Close Button',
            code: '<sui-popover [visible]="false" position="bottom" [showCloseIcon]="true">\n  <sui-button variant="secondary">\n    Show Popover\n  </sui-button>\n  <div slot="content">\n    <h4>Popover Title</h4>\n    <p>This popover has a close button.</p>\n  </div>\n</sui-popover>',
            description: 'Popover with close button in header'
          },
          {
            name: 'Rich Content',
            code: '<sui-popover [visible]="false" position="bottom" [showCloseIcon]="true">\n  <sui-button variant="primary">\n    User Menu\n  </sui-button>\n  <div slot="content">\n    <div class="user-menu">\n      <div class="user-info">\n        <div class="avatar">JD</div>\n        <div>\n          <div>John Doe</div>\n          <div>john@example.com</div>\n        </div>\n      </div>\n      <button class="menu-item">Profile</button>\n      <button class="menu-item">Settings</button>\n    </div>\n  </div>\n</sui-popover>',
            description: 'Popover with rich interactive content'
          },
          {
            name: 'Event Handling',
            code: '<sui-popover \n  [visible]="false" \n  position="bottom" \n  (onShow)="onShow()" \n  (onHide)="onHide()">\n  <sui-button variant="outline">\n    Event Demo\n  </sui-button>\n  <div slot="content">\n    <p>Check console for events.</p>\n  </div>\n</sui-popover>',
            tsCode: `export class PopoverComponent {
    onShow(): void {
      console.log('Popover shown');
    }
  
    onHide(): void {
      console.log('Popover hidden');
    }
  }`,
            description: 'Popover with event handling'
          },
          {
            name: 'Custom Styling',
            code: '<sui-popover \n  [visible]="false" \n  position="bottom" \n  styleClass="custom-popover"\n  [style]="{\'min-width\': \'300px\'}">\n  <sui-button variant="primary">\n    Custom Style\n  </sui-button>\n  <div slot="content">\n    <h4>Custom Popover</h4>\n    <p>Custom styling applied.</p>\n  </div>\n</sui-popover>',
            description: 'Popover with custom styling'
          }
        ],
        props: [
          {
            name: 'visible',
            type: 'boolean',
            default: 'false',
            description: 'Whether the popover is visible',
            required: false
          },
          {
            name: 'position',
            type: 'string',
            default: 'bottom',
            description: 'Position of the popover relative to trigger (top, bottom, left, right, top-left, top-right, bottom-left, bottom-right)',
            required: false
          },
          {
            name: 'dismissible',
            type: 'boolean',
            default: 'true',
            description: 'Whether the popover can be dismissed by clicking outside',
            required: false
          },
          {
            name: 'showCloseIcon',
            type: 'boolean',
            default: 'false',
            description: 'Whether to show a close button in the popover header',
            required: false
          },
          {
            name: 'style',
            type: 'object',
            default: '{}',
            description: 'Inline styles for the popover',
            required: false
          },
          {
            name: 'styleClass',
            type: 'string',
            default: '""',
            description: 'CSS class for custom styling',
            required: false
          },
          {
            name: 'onShow',
            type: 'EventEmitter<void>',
            default: 'undefined',
            description: 'Event emitted when popover is shown',
            required: false
          },
          {
            name: 'onHide',
            type: 'EventEmitter<void>',
            default: 'undefined',
            description: 'Event emitted when popover is hidden',
            required: false
          }
        ],
        usage: 'Use popovers to display contextual information, menus, forms, or any content that needs to be shown relative to a trigger element. They are perfect for user menus, help text, or interactive content that should appear on demand.',
        tags: ['overlay', 'popover', 'contextual', 'menu', 'tooltip']
      },
];
