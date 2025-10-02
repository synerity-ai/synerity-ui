import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Fluid } from '@synerity/ui';

@Component({
  selector: 'app-su-fluid-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, Fluid],
  templateUrl: './su-fluid-demo.html',
  styleUrl: './su-fluid-demo.scss'
})
export class SuFluidDemo {
  selectedColumns = 4;
  selectedGutter = 16;
  isResponsive = true;
  
  columns = [
    { value: 1, label: '1 Column' },
    { value: 2, label: '2 Columns' },
    { value: 3, label: '3 Columns' },
    { value: 4, label: '4 Columns' },
    { value: 5, label: '5 Columns' },
    { value: 6, label: '6 Columns' },
    { value: 8, label: '8 Columns' },
    { value: 10, label: '10 Columns' },
    { value: 12, label: '12 Columns' }
  ];

  gutters = [
    { value: 8, label: 'Small (8px)' },
    { value: 16, label: 'Medium (16px)' },
    { value: 24, label: 'Large (24px)' },
    { value: 32, label: 'Extra Large (32px)' }
  ];
}
