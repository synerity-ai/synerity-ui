import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IftaLabel } from '@synerity/ui';

@Component({
  selector: 'app-su-ifta-label-demo',
  imports: [CommonModule, FormsModule, IftaLabel],
  templateUrl: './su-ifta-label-demo.html',
  styleUrl: './su-ifta-label-demo.scss'
})
export class SuIftaLabelDemo {
  isActive = true;
  hasPermission = false;
  isVerified = true;
  
  // Interactive
  condition = true;
  trueLabel = 'Approved';
  falseLabel = 'Rejected';
  altLabel = 'Pending';
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
    if (this.variant) classes.push(`sui-ifta-label-${this.variant}`);
    if (this.size) classes.push(`sui-ifta-label-${this.size}`);
    return classes.join(' ');
  }
  
  getCodeExample(): string {
    const attrs = [
      `[condition]="${this.condition}"`,
      `trueLabel="${this.trueLabel}"`,
      `falseLabel="${this.falseLabel}"`,
      `altLabel="${this.altLabel}"`
    ];
    const styleClass = this.getStyleClass();
    if (styleClass) attrs.push(`styleClass="${styleClass}"`);
    return `<sui-ifta-label ${attrs.join(' ')}></sui-ifta-label>`;
  }
}
