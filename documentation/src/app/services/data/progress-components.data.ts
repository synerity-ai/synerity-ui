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
        id: 'skeleton',
        name: 'Skeleton',
        category: 'Progress',
        description: 'Animated skeleton loader component for indicating loading states and content placeholders',
        examples: [
          {
            name: 'Basic Skeleton',
            code: '<sui-skeleton></sui-skeleton>',
            description: 'Basic skeleton loader with default styling'
          },
          {
            name: 'Size Variants',
            code: '<sui-skeleton size="small"></sui-skeleton>\n<sui-skeleton size="medium"></sui-skeleton>\n<sui-skeleton size="large"></sui-skeleton>\n<sui-skeleton size="xlarge"></sui-skeleton>',
            description: 'Skeleton loaders in different sizes'
          },
          {
            name: 'Color Variants',
            code: '<sui-skeleton variant="primary"></sui-skeleton>\n<sui-skeleton variant="success"></sui-skeleton>\n<sui-skeleton variant="warning"></sui-skeleton>',
            description: 'Skeleton loaders with different color themes'
          },
          {
            name: 'Shape Variants',
            code: '<sui-skeleton shape="circle"></sui-skeleton>\n<sui-skeleton shape="rounded"></sui-skeleton>\n<sui-skeleton shape="square"></sui-skeleton>',
            description: 'Skeleton loaders with different shapes'
          },
          {
            name: 'Animation Types',
            code: '<sui-skeleton animationType="loading"></sui-skeleton>\n<sui-skeleton animationType="pulse"></sui-skeleton>\n<sui-skeleton animationType="fade"></sui-skeleton>',
            description: 'Skeleton loaders with different animation styles'
          },
          {
            name: 'Content Types',
            code: '<sui-skeleton type="title"></sui-skeleton>\n<sui-skeleton type="text"></sui-skeleton>\n<sui-skeleton type="avatar"></sui-skeleton>\n<sui-skeleton type="button"></sui-skeleton>',
            description: 'Predefined skeleton types for common content patterns'
          },
          {
            name: 'Real-world Example',
            code: '@if (isLoading) {\n  <div class="card-skeleton">\n    <sui-skeleton type="avatar" shape="circle"></sui-skeleton>\n    <div class="card-content">\n      <sui-skeleton type="title"></sui-skeleton>\n      <sui-skeleton type="subtitle"></sui-skeleton>\n      <sui-skeleton type="text"></sui-skeleton>\n    </div>\n  </div>\n} @else {\n  <div class="card-content">\n    <!-- Actual content -->\n  </div>\n}',
            tsCode: `export class Component {\n  isLoading = true;\n  \n  ngOnInit() {\n    // Simulate loading\n    setTimeout(() => {\n      this.isLoading = false;\n    }, 2000);\n  }\n}`,
            description: 'Realistic card layout using skeleton loaders'
          },
          {
            name: 'Custom Styling',
            code: '<sui-skeleton \n  width="200px"\n  height="100px"\n  borderRadius="12px"\n  variant="primary"\n  animationType="pulse">\n</sui-skeleton>',
            description: 'Skeleton loader with custom dimensions and styling'
          }
        ],
        props: [
          {
            name: 'width',
            type: 'string',
            default: '100%',
            description: 'Width of the skeleton loader',
            required: false
          },
          {
            name: 'height',
            type: 'string',
            default: '1rem',
            description: 'Height of the skeleton loader',
            required: false
          },
          {
            name: 'borderRadius',
            type: 'string',
            default: '4px',
            description: 'Border radius of the skeleton loader',
            required: false
          },
          {
            name: 'animation',
            type: 'boolean',
            default: 'true',
            description: 'Whether to show animation',
            required: false
          },
          {
            name: 'variant',
            type: 'string',
            default: 'default',
            description: 'Color variant (default, primary, secondary, success, warning, danger, info)',
            required: false
          },
          {
            name: 'size',
            type: 'string',
            default: 'medium',
            description: 'Size of the skeleton (small, medium, large, xlarge)',
            required: false
          },
          {
            name: 'shape',
            type: 'string',
            default: 'default',
            description: 'Shape of the skeleton (default, circle, rounded, square)',
            required: false
          },
          {
            name: 'type',
            type: 'string',
            default: 'default',
            description: 'Predefined type for common content patterns (default, text, title, subtitle, caption, card, avatar, button, input, list-item, table-row, grid-item)',
            required: false
          },
          {
            name: 'animationType',
            type: 'string',
            default: 'loading',
            description: 'Animation style (loading, pulse, fade)',
            required: false
          },
          {
            name: 'style',
            type: 'object',
            default: '{}',
            description: 'Inline styles for custom styling',
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
        usage: 'Use skeleton loaders to indicate that content is loading or being processed. They provide visual feedback to users during data fetching operations and improve perceived performance. Perfect for cards, lists, forms, and any content that takes time to load.',
        tags: ['progress', 'loading', 'skeleton', 'placeholder', 'animation']
      },
  {
        id: 'progress-spinner',
        name: 'Progress Spinner',
        category: 'Progress',
        description: 'Animated circular progress indicator for loading states and operations',
        examples: [
          {
            name: 'Basic Progress Spinner',
            code: '<sui-progress-spinner></sui-progress-spinner>',
            description: 'Basic progress spinner with default styling'
          },
          {
            name: 'Size Variants',
            code: '<sui-progress-spinner size="small"></sui-progress-spinner>\n<sui-progress-spinner size="normal"></sui-progress-spinner>\n<sui-progress-spinner size="large"></sui-progress-spinner>',
            description: 'Progress spinners in different sizes'
          },
          {
            name: 'Color Variants',
            code: '<sui-progress-spinner color="primary"></sui-progress-spinner>\n<sui-progress-spinner color="success"></sui-progress-spinner>\n<sui-progress-spinner color="warning"></sui-progress-spinner>',
            description: 'Progress spinners with different color themes'
          },
          {
            name: 'Button Loading State',
            code: '<sui-button variant="primary" [disabled]="isLoading">\n  @if (isLoading) {\n    <sui-progress-spinner size="small" styleClass="sui-progress-spinner-button"></sui-progress-spinner>\n    <span class="ml-2">Loading...</span>\n  } @else {\n    Submit\n  }\n</sui-button>',
            tsCode: `export class Component {\n  isLoading = false;\n  \n  simulateLoading() {\n    this.isLoading = true;\n    setTimeout(() => {\n      this.isLoading = false;\n    }, 3000);\n  }\n}`,
            description: 'Progress spinner inside a button for loading states'
          },
          {
            name: 'Inline Loading',
            code: '<div class="inline-loading">\n  <sui-progress-spinner size="small"></sui-progress-spinner>\n  <span>Loading data...</span>\n</div>',
            description: 'Progress spinner used inline with text'
          },
          {
            name: 'Custom Styling',
            code: '<sui-progress-spinner \n  size="large"\n  strokeWidth="4"\n  animationDuration="1s"\n  [style]="{\'--spinner-color\': \'#8b5cf6\'}">\n</sui-progress-spinner>',
            description: 'Progress spinner with custom styling and properties'
          }
        ],
        props: [
          {
            name: 'size',
            type: 'string',
            default: 'normal',
            description: 'Size of the spinner (small, normal, large)',
            required: false
          },
          {
            name: 'color',
            type: 'string',
            default: 'primary',
            description: 'Color theme of the spinner (primary, secondary, success, warning, danger, info)',
            required: false
          },
          {
            name: 'strokeWidth',
            type: 'string',
            default: '2',
            description: 'Width of the spinner stroke in pixels',
            required: false
          },
          {
            name: 'animationDuration',
            type: 'string',
            default: '2s',
            description: 'Duration of the spinning animation',
            required: false
          },
          {
            name: 'fill',
            type: 'string',
            default: 'transparent',
            description: 'Fill color of the spinner circle',
            required: false
          },
          {
            name: 'style',
            type: 'object',
            default: '{}',
            description: 'Inline styles for custom styling',
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
        usage: 'Use progress spinners to indicate loading states, processing operations, or any time you need to show that something is happening in the background. They are perfect for buttons, inline text, overlay loading states, and form submissions.',
        tags: ['progress', 'loading', 'spinner', 'animation', 'indicator']
      },
];
