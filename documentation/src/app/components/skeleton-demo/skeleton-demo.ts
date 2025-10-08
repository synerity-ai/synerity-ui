import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentExample } from '../../models/component.model';
import { Skeleton } from '@synerity/ui';

@Component({
  selector: 'app-skeleton-demo',
  imports: [CommonModule, Skeleton],
  templateUrl: './skeleton-demo.html',
  styleUrl: './skeleton-demo.scss'
})
export class SkeletonDemo {
  @Input() currentExample!: ComponentExample;

  getCurrentExample(): ComponentExample {
    return this.currentExample;
  }

  // Demo data
  variants = ['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info'];
  sizes = ['small', 'medium', 'large', 'xlarge'];
  shapes = ['default', 'circle', 'rounded', 'square'];
  types = ['default', 'text', 'title', 'subtitle', 'caption', 'card', 'avatar', 'button', 'input', 'list-item', 'table-row', 'grid-item'];
  animationTypes = ['loading', 'pulse', 'fade'];
  
  // Demo state
  showSkeleton = true;
  isLoading = true;

  // Demo methods
  toggleSkeleton(): void {
    this.showSkeleton = !this.showSkeleton;
  }

  simulateLoading(): void {
    this.isLoading = true;
    
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
}
