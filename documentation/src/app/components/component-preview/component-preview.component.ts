import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentExample } from '../../models/component.model';
import { Button } from '@synerity/ui';

@Component({
  selector: 'app-component-preview',
  standalone: true,
  imports: [CommonModule, Button],
  templateUrl: './component-preview.component.html',
  styleUrl: './component-preview.component.scss'
})
export class ComponentPreviewComponent {
  @Input() examples: ComponentExample[] = [];
  @Input() componentName: string = '';
  
  protected readonly activeExample = signal(0);
  protected readonly showCode = signal(false);

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
