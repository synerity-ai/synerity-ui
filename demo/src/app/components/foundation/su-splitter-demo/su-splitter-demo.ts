import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Splitter } from '@synerity/ui';

@Component({
  selector: 'app-su-splitter-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, Splitter],
  templateUrl: './su-splitter-demo.html',
  styleUrl: './su-splitter-demo.scss'
})
export class SuSplitterDemo {
  selectedLayout: 'horizontal' | 'vertical' = 'horizontal';
  selectedGutterSize = 4;
  selectedMinSize1 = 20;
  selectedMinSize2 = 20;
  selectedMaxSize1 = 80;
  selectedMaxSize2 = 80;
  
  layouts = [
    { value: 'horizontal', label: 'Horizontal' },
    { value: 'vertical', label: 'Vertical' }
  ];

  gutterSizes = [
    { value: 2, label: 'Small (2px)' },
    { value: 4, label: 'Medium (4px)' },
    { value: 8, label: 'Large (8px)' },
    { value: 12, label: 'Extra Large (12px)' }
  ];

  onResizeEnd(event: any) {
    console.log('Splitter resized:', event);
  }
}
