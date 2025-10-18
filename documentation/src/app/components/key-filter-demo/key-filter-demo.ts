import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KeyFilter } from '@synerity/ui';
import { ComponentExample } from '../../models/component.model';

@Component({
  selector: 'app-key-filter-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, KeyFilter],
  templateUrl: './key-filter-demo.html',
  styleUrl: './key-filter-demo.scss'
})
export class KeyFilterDemoComponent {
  @Input() currentExample!: ComponentExample;

  getCurrentExample(): ComponentExample {
    return this.currentExample;
  }

  intValue = '';
  numValue = '';
  alphaValue = '';
  alphanumValue = '';
  hexValue = '';
}
