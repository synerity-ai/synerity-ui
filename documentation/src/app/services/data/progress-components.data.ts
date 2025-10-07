import { ComponentModel } from '../../models/component.model';

export const progressComponents: ComponentModel[] = [
  {
        id: 'progress-bar',
        name: 'Progress Bar',
        category: 'Progress',
        description: 'Visual indicator showing the completion status of an operation or process with multiple variants and customization options',
        examples: [
          {
            name: 'Basic Progress Bar',
            code: '<sui-progress-bar [value]="45" [showValue]="true" mode="determinate"></sui-progress-bar>',
            description: 'Standard progress bar with percentage display'
          },
          {
            name: 'Success Progress Bar',
            code: '<sui-progress-bar [value]="75" [showValue]="true" [color]="\'#10b981\'" styleClass="success"></sui-progress-bar>',
            description: 'Progress bar indicating successful completion'
          },
          {
            name: 'Indeterminate Progress Bar',
            code: '<sui-progress-bar mode="indeterminate" [showValue]="false" styleClass="info"></sui-progress-bar>',
            description: 'Progress bar for unknown duration operations'
          },
          {
            name: 'Animated Progress Bar',
            code: '<sui-progress-bar [value]="60" [showValue]="true" styleClass="animated"></sui-progress-bar>',
            description: 'Progress bar with animated stripes'
          },
          {
            name: 'Size Variations',
            code: '<div class="space-y-2">\n  <sui-progress-bar [value]="40" size="small" [showValue]="true"></sui-progress-bar>\n  <sui-progress-bar [value]="65" size="normal" [showValue]="true"></sui-progress-bar>\n  <sui-progress-bar [value]="80" size="large" [showValue]="true"></sui-progress-bar>\n</div>',
            description: 'Progress bars in different sizes'
          },
          {
            name: 'Custom Unit Display',
            code: '<sui-progress-bar [value]="2.4" [showValue]="true" unit="MB" [color]="\'#3b82f6\'"></sui-progress-bar>',
            description: 'Progress bar with custom unit (MB, seconds, etc.)'
          }
        ],
        props: [
          {
            name: 'value',
            type: 'number',
            default: '0',
            description: 'Progress value as a percentage (0-100)',
            required: false
          },
          {
            name: 'mode',
            type: 'string',
            default: 'determinate',
            description: 'Progress bar mode - determinate shows specific progress, indeterminate shows ongoing progress',
            required: false
          },
          {
            name: 'showValue',
            type: 'boolean',
            default: 'true',
            description: 'Whether to display the progress value',
            required: false
          },
          {
            name: 'unit',
            type: 'string',
            default: '%',
            description: 'Unit to display with the progress value',
            required: false
          },
          {
            name: 'color',
            type: 'string',
            default: '""',
            description: 'Custom color for the progress bar fill',
            required: false
          },
          {
            name: 'styleClass',
            type: 'string',
            default: '""',
            description: 'CSS classes for styling variants (success, warning, danger, info, animated)',
            required: false
          },
          {
            name: 'style',
            type: 'object',
            default: '{}',
            description: 'Inline styles for the progress bar',
            required: false
          }
        ],
        events: [],
        usage: 'Use progress bars to show the completion status of operations, file uploads, form submissions, or any process where users need to understand progress. Choose determinate mode for known progress and indeterminate for unknown duration operations.',
          tags: ['progress', 'indicator', 'completion', 'loading', 'feedback']
        },
  {
        id: 'progress-bar',
        name: 'Progress Bar',
        category: 'Progress',
        description: 'Progress bar component for showing completion status',
        examples: [
          {
            name: 'Basic Progress Bar',
            code: '<sui-progress-bar [value]="50"></sui-progress-bar>',
            description: 'Basic progress bar at 50%'
          }
        ],
        props: [
          {
            name: 'value',
            type: 'number',
            default: '0',
            description: 'Progress value (0-100)',
            required: true
          }
        ],
        usage: 'Use progress bars to show completion status of operations.',
        tags: ['progress', 'loading', 'status']
      },
  {
        id: 'progress-spinner',
        name: 'Progress Spinner',
        category: 'Progress',
        description: 'Loading spinner component',
        examples: [],
        props: [],
        usage: 'Use progress spinners for loading states.',
        tags: ['progress', 'loading']
      },
  {
        id: 'skeleton',
        name: 'Skeleton',
        category: 'Progress',
        description: 'Content skeleton component',
        examples: [],
        props: [],
        usage: 'Use skeletons for loading placeholders.',
        tags: ['progress', 'loading']
      },
];
