import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentExample } from '../../models/component.model';
import { Popover } from '@synerity/ui';
import { Button } from '@synerity/ui';

@Component({
  selector: 'app-popover-demo',
  imports: [CommonModule, Popover, Button],
  templateUrl: './popover-demo.html',
  styleUrl: './popover-demo.scss'
})
export class PopoverDemo {
  @Input() currentExample!: ComponentExample;

  getCurrentExample(): ComponentExample {
    return this.currentExample;
  }

  // Demo data
  positions = ['top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right'];
  
  // Demo methods
  onShow(): void {
    console.log('Popover shown');
  }

  onHide(): void {
    console.log('Popover hidden');
  }
}
