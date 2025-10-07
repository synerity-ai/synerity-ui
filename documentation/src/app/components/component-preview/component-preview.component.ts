import { Component, Input, signal, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentExample } from '../../models/component.model';
import { Button } from '@synerity/ui';
import { ButtonDemo } from '../button-demo/button-demo';
import { CardDemo } from '../card-demo/card-demo';
import { InputDemo } from '../input-demo/input-demo';
import { TableDemoComponent } from '../table-demo/table-demo';
import { AutoCompleteDemoComponent } from '../auto-complete-demo/auto-complete-demo';
import { PanelDemoComponent } from '../panel-demo/panel-demo';
import { MenuDemoComponent } from '../menu-demo/menu-demo';
import { DialogDemoComponent } from '../dialog-demo/dialog-demo';
import { CarouselDemoComponent } from '../carousel-demo/carousel-demo';
import { ToastDemoComponent } from '../toast-demo/toast-demo';
import { ProgressBarDemoComponent } from '../progress-bar-demo/progress-bar-demo';
import { CheckboxDemoComponent } from '../checkbox-demo/checkbox-demo';
import { RadioButtonDemoComponent } from '../radio-button-demo/radio-button-demo';
import { SelectDemoComponent } from '../select-demo/select-demo';
import { TabsDemoComponent } from '../tabs-demo/tabs-demo';
import { TextareaDemoComponent } from '../textarea-demo/textarea-demo';
import { TooltipDemoComponent } from '../tooltip-demo/tooltip-demo';
import { AccordionDemoComponent } from '../accordion-demo/accordion-demo';

@Component({
  selector: 'app-component-preview',
  standalone: true,
  imports: [CommonModule, Button, ButtonDemo, CardDemo, InputDemo, TableDemoComponent, AutoCompleteDemoComponent, PanelDemoComponent, MenuDemoComponent, DialogDemoComponent, CarouselDemoComponent, ToastDemoComponent, ProgressBarDemoComponent, CheckboxDemoComponent, RadioButtonDemoComponent, SelectDemoComponent, TabsDemoComponent, TextareaDemoComponent, TooltipDemoComponent, AccordionDemoComponent],
  templateUrl: './component-preview.component.html',
  styleUrl: './component-preview.component.scss'
})
export class ComponentPreviewComponent implements OnInit, OnChanges {
  @Input() examples: ComponentExample[] = [];
  @Input() componentName: string = '';
  
  protected readonly activeExample = signal(0);
  protected readonly showCode = signal(false);
  protected readonly copySuccess = signal(false);
  protected readonly activeCodeTab = signal<'html' | 'ts'>('html');

  ngOnInit(): void {
    // Component initialization
  }

  ngOnChanges(changes: SimpleChanges): void {
         // Reset to first example and hide code when component changes
         if (changes['componentName'] || changes['examples']) {
           this.activeExample.set(0);
           this.showCode.set(false);
           this.activeCodeTab.set('html');
         }
  }

  setActiveExample(index: number): void {
    this.activeExample.set(index);
  }

  toggleCode(event?: MouseEvent): void {
    this.showCode.update(show => !show);
  }


         copyToClipboard(): void {
           const currentExample = this.getCurrentExample();
           const codeToCopy = this.activeCodeTab() === 'html' ? currentExample.code : (currentExample.tsCode || '');
           
           if (!codeToCopy || codeToCopy.trim() === '') {
             return;
           }

           // Try modern clipboard API first
           if (navigator.clipboard && window.isSecureContext) {
             navigator.clipboard.writeText(codeToCopy).then(() => {
               this.showCopySuccess();
             }).catch(() => {
               this.fallbackCopyToClipboard(codeToCopy);
             });
           } else {
             // Fallback for older browsers or non-secure contexts
             this.fallbackCopyToClipboard(codeToCopy);
           }
         }

  private fallbackCopyToClipboard(text: string): void {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      const successful = document.execCommand('copy');
      if (successful) {
        this.showCopySuccess();
      }
    } catch (err) {
      // Silently handle copy errors
    } finally {
      document.body.removeChild(textArea);
    }
  }

  private showCopySuccess(): void {
    this.copySuccess.set(true);
    setTimeout(() => {
      this.copySuccess.set(false);
    }, 2000);
  }

         getCurrentExample(): ComponentExample {
           return this.examples[this.activeExample()] || this.examples[0];
         }

         setActiveCodeTab(tab: 'html' | 'ts'): void {
           this.activeCodeTab.set(tab);
         }

         hasTypeScriptCode(): boolean {
           const currentExample = this.getCurrentExample();
           return !!(currentExample.tsCode && currentExample.tsCode.trim() !== '');
         }

}
