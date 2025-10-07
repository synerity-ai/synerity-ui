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
        description: 'Overlay panel component',
        examples: [],
        props: [],
        usage: 'Use overlay panels for contextual content.',
        tags: ['overlay', 'panel']
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
];
