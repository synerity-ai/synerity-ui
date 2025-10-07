import { ComponentModel } from '../../models/component.model';

export const mediaComponents: ComponentModel[] = [
  {
        id: 'carousel',
        name: 'Carousel',
        category: 'Media',
        description: 'Interactive image carousel with navigation controls, indicators, and autoplay functionality',
        examples: [
          {
            name: 'Basic Carousel',
            code: '<sui-carousel [value]="images" [activeIndex]="currentIndex" [circular]="true" [showIndicators]="true" [showNavigators]="true" (onPageChange)="onPageChange($event)"></sui-carousel>',
            description: 'Basic image carousel with navigation controls'
          },
          {
            name: 'Autoplay Carousel',
            code: '<sui-carousel [value]="images" [autoplayInterval]="3000" [circular]="true" [showIndicators]="true" [showNavigators]="true"></sui-carousel>',
            description: 'Carousel with automatic slideshow functionality'
          },
          {
            name: 'Product Showcase',
            code: '<sui-carousel [value]="productImages" [circular]="true" [showIndicators]="true" [showNavigators]="true" styleClass="product-carousel"></sui-carousel>',
            description: 'Carousel for displaying product images with captions'
          },
          {
            name: 'Compact Size',
            code: '<sui-carousel [value]="images" styleClass="compact" [circular]="true" [showIndicators]="true" [showNavigators]="true"></sui-carousel>',
            description: 'Compact carousel with reduced size'
          },
          {
            name: 'Large Size',
            code: '<sui-carousel [value]="images" styleClass="large" [circular]="true" [showIndicators]="true" [showNavigators]="true"></sui-carousel>',
            description: 'Large carousel with increased size'
          },
          {
            name: 'Square Aspect',
            code: '<sui-carousel [value]="images" styleClass="square" [circular]="true" [showIndicators]="true" [showNavigators]="true"></sui-carousel>',
            description: 'Carousel with square aspect ratio'
          }
        ],
        props: [
          {
            name: 'value',
            type: 'CarouselItem[]',
            default: '[]',
            description: 'Array of carousel items with src, alt, title, and caption properties',
            required: true
          },
          {
            name: 'activeIndex',
            type: 'number',
            default: '0',
            description: 'Index of the currently active slide',
            required: false
          },
          {
            name: 'circular',
            type: 'boolean',
            default: 'true',
            description: 'Whether the carousel should loop infinitely',
            required: false
          },
          {
            name: 'autoplayInterval',
            type: 'number',
            default: '0',
            description: 'Auto-play interval in milliseconds (0 to disable)',
            required: false
          },
          {
            name: 'showIndicators',
            type: 'boolean',
            default: 'true',
            description: 'Whether to show dot indicators',
            required: false
          },
          {
            name: 'showNavigators',
            type: 'boolean',
            default: 'true',
            description: 'Whether to show navigation arrows',
            required: false
          },
          {
            name: 'style',
            type: 'object',
            default: '{}',
            description: 'Inline styles for the carousel',
            required: false
          },
          {
            name: 'styleClass',
            type: 'string',
            default: '""',
            description: 'CSS classes for the carousel (supports compact, large, square variants)',
            required: false
          }
        ],
        events: [
          {
            name: 'onPageChange',
            type: 'EventEmitter<number>',
            description: 'Callback to invoke when the active slide changes'
          }
        ],
        usage: 'Use carousels to display multiple images or content in an interactive slideshow. Perfect for product showcases, image galleries, and promotional content.',
        tags: ['media', 'carousel', 'slideshow', 'images', 'navigation']
      },
  {
        id: 'galleria',
        name: 'Galleria',
        category: 'Media',
        description: 'Image gallery component',
        examples: [],
        props: [],
        usage: 'Use gallerias for image galleries.',
        tags: ['media', 'gallery']
      },
  {
        id: 'image',
        name: 'Image',
        category: 'Media',
        description: 'Image display component',
        examples: [],
        props: [],
        usage: 'Use images for displaying pictures.',
        tags: ['media', 'image']
      },
  {
        id: 'image-compare',
        name: 'Image Compare',
        category: 'Media',
        description: 'Image comparison component',
        examples: [],
        props: [],
        usage: 'Use image compare for before/after comparisons.',
        tags: ['media', 'compare']
      },
];
