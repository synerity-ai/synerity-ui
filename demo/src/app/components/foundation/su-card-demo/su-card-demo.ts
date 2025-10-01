import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Card } from '@synerity/ui';

@Component({
  selector: 'app-su-card-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, Card],
  templateUrl: './su-card-demo.html',
  styleUrl: './su-card-demo.scss'
})
export class SuCardDemo {
  // Current demo configurations
  currentVariant: 'default' | 'outlined' | 'elevated' | 'filled' = 'default';
  currentSize: 'sm' | 'md' | 'lg' = 'md';
  currentClickable = false;
  currentDisabled = false;
  currentHoverable = false;
  currentBorderless = false;
  currentLoading = false;
  currentShowHeader = true;
  currentShowFooter = false;

  // Sample content
  sampleHeader = 'Card Title';
  sampleSubheader = 'This is a subtitle for the card';
  sampleContent = 'This is the main content of the card. It can contain any HTML elements, text, images, forms, or other components.';

  // Variant options - defined as property to avoid recreating on every change detection
  variants = [
    { value: 'default', label: 'Default' },
    { value: 'outlined', label: 'Outlined' },
    { value: 'elevated', label: 'Elevated' },
    { value: 'filled', label: 'Filled' }
  ];

  // Size options - defined as property to avoid recreating on every change detection
  sizes = [
    { value: 'sm', label: 'Small' },
    { value: 'md', label: 'Medium' },
    { value: 'lg', label: 'Large' }
  ];

  // Event handlers
  onCardClick(event: MouseEvent): void {
    console.log('Card clicked:', event);
    alert('Card was clicked!');
  }

  onHeaderClick(event: MouseEvent): void {
    console.log('Header clicked:', event);
    alert('Header was clicked!');
  }

  // Toggle methods for interactive demos
  toggleClickable(): void {
    this.currentClickable = !this.currentClickable;
  }

  toggleDisabled(): void {
    this.currentDisabled = !this.currentDisabled;
  }

  toggleHoverable(): void {
    this.currentHoverable = !this.currentHoverable;
  }

  toggleBorderless(): void {
    this.currentBorderless = !this.currentBorderless;
  }

  toggleLoading(): void {
    this.currentLoading = !this.currentLoading;
  }

  toggleHeader(): void {
    this.currentShowHeader = !this.currentShowHeader;
  }

  toggleFooter(): void {
    this.currentShowFooter = !this.currentShowFooter;
  }

  // Reset to defaults
  resetToDefaults(): void {
    this.currentVariant = 'default';
    this.currentSize = 'md';
    this.currentClickable = false;
    this.currentDisabled = false;
    this.currentHoverable = false;
    this.currentBorderless = false;
    this.currentLoading = false;
    this.currentShowHeader = true;
    this.currentShowFooter = false;
  }
}