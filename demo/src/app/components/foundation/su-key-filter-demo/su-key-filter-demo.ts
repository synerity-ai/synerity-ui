import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KeyFilter } from '@synerity/ui';

@Component({
  selector: 'app-su-key-filter-demo',
  imports: [CommonModule, FormsModule, KeyFilter],
  templateUrl: './su-key-filter-demo.html',
  styleUrl: './su-key-filter-demo.scss'
})
export class SuKeyFilterDemo {
  intValue = '';
  numValue = '';
  alphaValue = '';
  alphanumValue = '';
  customValue = '';
  
  // Interactive
  filterValue = '';
  selectedPattern: 'int' | 'num' | 'alpha' | 'alphanum' | string = 'int';
  customPattern = '';
  
  patterns: Array<{ value: 'int' | 'num' | 'alpha' | 'alphanum' | string; label: string; desc: string }> = [
    { value: 'int', label: 'Integer', desc: 'Digits only (0-9)' },
    { value: 'num', label: 'Number', desc: 'Digits, decimal, +/-' },
    { value: 'alpha', label: 'Alphabetic', desc: 'Letters only (A-Z, a-z)' },
    { value: 'alphanum', label: 'Alphanumeric', desc: 'Letters and digits' },
    { value: 'custom', label: 'Custom Regex', desc: 'Your own pattern' }
  ];
  
  getActivePattern(): string {
    return this.selectedPattern === 'custom' && this.customPattern ? this.customPattern : this.selectedPattern;
  }
  
  getCodeExample(): string {
    const pattern = this.getActivePattern();
    return `<sui-key-filter
  pattern="${pattern}"
  [(ngModel)]="filterValue"
  placeholder="Type here..."
></sui-key-filter>`;
  }
}
