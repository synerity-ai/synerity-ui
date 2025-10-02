import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Panel } from '@synerity/ui';

@Component({
  selector: 'app-su-panel-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, Panel],
  templateUrl: './su-panel-demo.html',
  styleUrl: './su-panel-demo.scss'
})
export class SuPanelDemo {
  isCollapsed = false;
  selectedVariant = 'default';
  selectedSize = 'default';
  
  variants = [
    { value: 'default', label: 'Default' },
    { value: 'outlined', label: 'Outlined' },
    { value: 'filled', label: 'Filled' },
    { value: 'floating', label: 'Floating' },
    { value: 'flat', label: 'Flat' }
  ];

  sizes = [
    { value: 'default', label: 'Default' },
    { value: 'sm', label: 'Small' },
    { value: 'lg', label: 'Large' }
  ];

  onPanelToggle(event: any) {
    console.log('Panel toggled:', event);
    this.isCollapsed = event.collapsed;
  }

  getPanelClass(): string {
    let classes = '';
    if (this.selectedVariant !== 'default') {
      classes += ` sui-panel-${this.selectedVariant}`;
    }
    if (this.selectedSize !== 'default') {
      classes += ` sui-panel-${this.selectedSize}`;
    }
    return classes.trim();
  }
}
