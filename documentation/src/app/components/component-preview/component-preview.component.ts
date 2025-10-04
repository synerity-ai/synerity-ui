import { Component, Input, signal, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentExample } from '../../models/component.model';
import { Button } from '@synerity/ui';
import { ButtonDemo } from '../button-demo/button-demo';
import { CardDemo } from '../card-demo/card-demo';
import { InputDemo } from '../input-demo/input-demo';

@Component({
  selector: 'app-component-preview',
  standalone: true,
  imports: [CommonModule, Button, ButtonDemo, CardDemo, InputDemo],
  templateUrl: './component-preview.component.html',
  styleUrl: './component-preview.component.scss'
})
export class ComponentPreviewComponent implements OnChanges {
  @Input() examples: ComponentExample[] = [];
  @Input() componentName: string = '';
  
  protected readonly activeExample = signal(0);
  protected readonly showCode = signal(false);

  ngOnChanges(changes: SimpleChanges): void {
    // Reset to first example and hide code when component changes
    if (changes['componentName'] || changes['examples']) {
      this.activeExample.set(0);
      this.showCode.set(false);
    }
  }

  setActiveExample(index: number): void {
    this.activeExample.set(index);
  }

  toggleCode(): void {
    this.showCode.update(show => !show);
  }

  copyToClipboard(code: string): void {
    navigator.clipboard.writeText(code).then(() => {
      // Could add a toast notification here
      console.log('Code copied to clipboard');
    });
  }

  getCurrentExample(): ComponentExample {
    return this.examples[this.activeExample()] || this.examples[0];
  }

}
