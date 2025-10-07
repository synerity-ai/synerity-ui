import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentExample } from '../../models/component.model';
import { Carousel } from '@synerity/ui';

@Component({
  selector: 'app-carousel-demo',
  standalone: true,
  imports: [CommonModule, Carousel],
  templateUrl: './carousel-demo.html',
  styleUrls: ['./carousel-demo.scss']
})
export class CarouselDemoComponent {
  @Input() currentExample!: ComponentExample;

  getCurrentExample(): ComponentExample {
    return this.currentExample;
  }

  // Sample data for carousel examples
  images = [
    {
      src: 'https://picsum.photos/800/400?random=1',
      alt: 'Image 1',
      title: 'Sample Image 1',
      caption: 'Beautiful landscape photography'
    },
    {
      src: 'https://picsum.photos/800/400?random=2',
      alt: 'Image 2',
      title: 'Sample Image 2',
      caption: 'Urban architecture showcase'
    },
    {
      src: 'https://picsum.photos/800/400?random=3',
      alt: 'Image 3',
      title: 'Sample Image 3',
      caption: 'Nature and wildlife'
    },
    {
      src: 'https://picsum.photos/800/400?random=4',
      alt: 'Image 4',
      title: 'Sample Image 4',
      caption: 'Abstract art and design'
    },
    {
      src: 'https://picsum.photos/800/400?random=5',
      alt: 'Image 5',
      title: 'Sample Image 5',
      caption: 'Technology and innovation'
    }
  ];

  // Product showcase data
  products = [
    {
      src: 'https://picsum.photos/300/300?random=10',
      alt: 'Product 1',
      title: 'Premium Headphones',
      price: '$299',
      caption: 'High-quality wireless headphones with noise cancellation'
    },
    {
      src: 'https://picsum.photos/300/300?random=11',
      alt: 'Product 2',
      title: 'Smart Watch',
      price: '$199',
      caption: 'Fitness tracking and smart notifications'
    },
    {
      src: 'https://picsum.photos/300/300?random=12',
      alt: 'Product 3',
      title: 'Wireless Speaker',
      price: '$149',
      caption: 'Portable speaker with excellent sound quality'
    }
  ];
}