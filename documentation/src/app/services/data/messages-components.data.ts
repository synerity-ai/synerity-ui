import { ComponentModel } from '../../models/component.model';

export const messagesComponents: ComponentModel[] = [
  {
        id: 'toast',
        name: 'Toast',
        category: 'Messages',
        description: 'Interactive toast notifications with different severity levels, positioning, and customization options',
        examples: [
          {
            name: 'Success Toast',
            code: 'this.toastService.add({ severity: "success", summary: "Success!", detail: "Operation completed successfully.", life: 3000, closable: true });',
            description: 'Success notification for completed actions'
          },
          {
            name: 'Info Toast',
            code: 'this.toastService.add({ severity: "info", summary: "Information", detail: "Here is some helpful information.", life: 4000, closable: true });',
            description: 'Informational messages for user guidance'
          },
          {
            name: 'Warning Toast',
            code: 'this.toastService.add({ severity: "warn", summary: "Warning", detail: "Please review your input.", life: 5000, closable: true });',
            description: 'Warning messages for potential issues'
          },
          {
            name: 'Error Toast',
            code: 'this.toastService.add({ severity: "error", summary: "Error", detail: "Something went wrong.", life: 6000, closable: true });',
            description: 'Error messages for failed operations'
          },
          {
            name: 'Persistent Toast',
            code: 'this.toastService.add({ severity: "info", summary: "Persistent Message", detail: "This toast will not auto-dismiss.", life: 0, closable: true });',
            description: 'Toast that requires manual dismissal'
          },
          {
            name: 'Non-Closable Toast',
            code: 'this.toastService.add({ severity: "info", summary: "System Message", detail: "Important system notification.", life: 3000, closable: false });',
            description: 'Toast that cannot be manually closed'
          }
        ],
        props: [
          {
            name: 'position',
            type: 'string',
            default: 'top-right',
            description: 'Position of the toast container (top-right, top-left, bottom-right, bottom-left, top-center, bottom-center)',
            required: false
          },
          {
            name: 'style',
            type: 'object',
            default: '{}',
            description: 'Inline styles for the toast container',
            required: false
          },
          {
            name: 'styleClass',
            type: 'string',
            default: '""',
            description: 'CSS classes for the toast container',
            required: false
          }
        ],
        events: [
          {
            name: 'onClose',
            type: 'EventEmitter<any>',
            description: 'Callback to invoke when a toast is closed'
          }
        ],
        usage: 'Use toasts to display temporary, non-blocking messages to users. Perfect for notifications, alerts, and feedback messages that don\'t require immediate user action.',
        tags: ['notification', 'message', 'toast', 'alert', 'feedback']
      },
  {
        id: 'confirm-dialog',
        name: 'Confirm Dialog',
        category: 'Messages',
        description: 'Confirmation dialog component',
        examples: [],
        props: [],
        usage: 'Use confirm dialogs for user confirmations.',
        tags: ['message', 'dialog']
      },
  {
        id: 'confirm-popup',
        name: 'Confirm Popup',
        category: 'Messages',
        description: 'Confirmation popup component',
        examples: [],
        props: [],
        usage: 'Use confirm popups for quick confirmations.',
        tags: ['message', 'popup']
      },
  {
        id: 'message',
        name: 'Message',
        category: 'Messages',
        description: 'Message display component',
        examples: [],
        props: [],
        usage: 'Use messages for user notifications.',
        tags: ['message', 'notification']
      },
];
