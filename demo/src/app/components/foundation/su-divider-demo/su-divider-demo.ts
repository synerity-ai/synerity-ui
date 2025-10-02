import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Divider } from '@synerity/ui';

@Component({
  selector: 'app-su-divider-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, Divider],
  templateUrl: './su-divider-demo.html',
  styleUrl: './su-divider-demo.scss'
})
export class SuDividerDemo {
  selectedType: 'solid' | 'dashed' | 'dotted' = 'solid';
  selectedLayout: 'horizontal' | 'vertical' = 'horizontal';
  selectedAlign: 'left' | 'center' | 'right' = 'center';
  
  types = [
    { value: 'solid', label: 'Solid' },
    { value: 'dashed', label: 'Dashed' },
    { value: 'dotted', label: 'Dotted' }
  ];

  layouts = [
    { value: 'horizontal', label: 'Horizontal' },
    { value: 'vertical', label: 'Vertical' }
  ];

  aligns = [
    { value: 'left', label: 'Left' },
    { value: 'center', label: 'Center' },
    { value: 'right', label: 'Right' }
  ];
}
