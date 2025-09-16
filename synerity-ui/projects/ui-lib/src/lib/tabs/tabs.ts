import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'sui-tabs',
  imports: [NgFor, NgIf],
  templateUrl: './tabs.html',
  styleUrl: './tabs.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Tabs {
  @Input() activeIndex = 0;
  @Input() orientation: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @Input() scrollable = false;
  @Input() style: any = {};
  @Input() styleClass = '';
  @Input() tabs: Array<{ 
    header: string; 
    content?: any; 
    disabled?: boolean;
    closable?: boolean;
    icon?: string;
  }> = [];
  @Output() onActiveIndexChange = new EventEmitter<number>();
  @Output() onTabClose = new EventEmitter<number>();

  setActiveIndex(index: number): void {
    if (!this.tabs[index]?.disabled) {
      this.activeIndex = index;
      this.onActiveIndexChange.emit(index);
    }
  }

  closeTab(index: number): void {
    if (this.tabs[index]?.closable) {
      this.tabs.splice(index, 1);
      
      // Adjust active index if needed
      if (this.activeIndex >= this.tabs.length) {
        this.activeIndex = Math.max(0, this.tabs.length - 1);
      }
      
      this.onTabClose.emit(index);
    }
  }

  isTabActive(index: number): boolean {
    return this.activeIndex === index;
  }

  isTabDisabled(index: number): boolean {
    return this.tabs[index]?.disabled || false;
  }

  getTabClass(index: number): string {
    const classes = ['sui-tabs-tab'];
    
    if (this.isTabActive(index)) classes.push('sui-tabs-tab-active');
    if (this.isTabDisabled(index)) classes.push('sui-tabs-tab-disabled');
    
    return classes.join(' ');
  }

  getTabsClass(): string {
    return `sui-tabs sui-tabs-${this.orientation} ${this.styleClass}`.trim();
  }

  getTabsStyle(): any {
    return {
      ...this.style
    };
  }
}
