import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IftLabel } from '@synerity/ui';

@Component({
  selector: 'app-su-ift-label-demo',
  imports: [CommonModule, FormsModule, IftLabel],
  templateUrl: './su-ift-label-demo.html',
  styleUrl: './su-ift-label-demo.scss'
})
export class SuIftLabelDemo {
  // Examples
  isActive = true;
  isVerified = false;
  hasPermission = true;
  isOnline = false;
  
  // Interactive
  condition = true;
  trueLabel = 'Active';
  falseLabel = 'Inactive';
  variant = '';
  size = '';
  
  variants = [
    { value: '', label: 'Default' },
    { value: 'outlined', label: 'Outlined' },
    { value: 'minimal', label: 'Minimal' },
    { value: 'bold', label: 'Bold' }
  ];
  
  sizes = [
    { value: '', label: 'Normal' },
    { value: 'small', label: 'Small' },
    { value: 'large', label: 'Large' }
  ];
  
  getStyleClass(): string {
    const classes = [];
    if (this.variant) classes.push(`sui-ift-label-${this.variant}`);
    if (this.size) classes.push(`sui-ift-label-${this.size}`);
    return classes.join(' ');
  }
  
  getCodeExample(): string {
    const attrs = [
      `[condition]="${this.condition}"`,
      `trueLabel="${this.trueLabel}"`,
      `falseLabel="${this.falseLabel}"`
    ];
    const styleClass = this.getStyleClass();
    if (styleClass) attrs.push(`styleClass="${styleClass}"`);
    return `<sui-ift-label ${attrs.join(' ')}></sui-ift-label>`;
  }
}
