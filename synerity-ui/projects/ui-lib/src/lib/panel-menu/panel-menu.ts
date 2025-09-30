import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

interface PanelMenuItem {
  label?: string;
  icon?: string;
  command?: () => void;
  disabled?: boolean;
  separator?: boolean;
  expanded?: boolean;
  items?: PanelMenuItem[];
}

@Component({
  selector: 'sui-panel-menu',
  imports: [NgFor, NgIf],
  templateUrl: './panel-menu.html',
  styleUrl: './panel-menu.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PanelMenu implements AfterViewInit, OnDestroy {
  @Input() model: PanelMenuItem[] = [];
  @Input() multiple = false;
  @Input() style: any = {};
  @Input() styleClass = '';
  @Output() onItemClick = new EventEmitter<PanelMenuItem>();

  @ViewChild('menuElement') menuElement!: ElementRef;

  ngAfterViewInit(): void {
    this.setupEventListeners();
  }

  ngOnDestroy(): void {
    this.removeEventListeners();
  }

  private setupEventListeners(): void {
    document.addEventListener('click', this.onDocumentClick.bind(this));
  }

  private removeEventListeners(): void {
    document.removeEventListener('click', this.onDocumentClick.bind(this));
  }

  private onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    const isInsideMenu = this.menuElement?.nativeElement.contains(target);
    
    if (!isInsideMenu) {
      // Close all expanded items when clicking outside
      this.model.forEach(item => {
        item.expanded = false;
      });
    }
  }

  onItemClickHandler(event: Event, item: PanelMenuItem): void {
    if (item.disabled || item.separator) {
      event.preventDefault();
      return;
    }

    if (item.command) {
      item.command();
    }

    if (item.items && item.items.length > 0) {
      if (this.multiple) {
        item.expanded = !item.expanded;
      } else {
        // Close other items
        this.model.forEach(modelItem => {
          if (modelItem !== item) {
            modelItem.expanded = false;
          }
        });
        item.expanded = !item.expanded;
      }
    }

    this.onItemClick.emit(item);
    event.stopPropagation();
  }

  hasSubmenu(item: PanelMenuItem): boolean {
    return !!(item.items && item.items.length > 0);
  }

  getMenuClass(): string {
    const baseClasses = 'bg-white border border-gray-200 rounded-lg shadow-sm p-2 w-64';
    return `${baseClasses} ${this.styleClass}`.trim();
  }

  getMenuStyle(): any {
    return {
      ...this.style
    };
  }
}
