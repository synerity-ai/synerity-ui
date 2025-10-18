import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

export interface TreeSelectNode {
  label: string;
  value?: unknown;
  children?: TreeSelectNode[];
  disabled?: boolean;
  icon?: string;
  description?: string;
  expanded?: boolean;
}

@Component({
  selector: 'sui-tree-select',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './tree-select.html',
  styleUrl: './tree-select.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TreeSelect),
      multi: true
    }
  ]
})
export class TreeSelect implements ControlValueAccessor {
  @Input() disabled = false;
  @Input() name = '';
  @Input() placeholder = 'Select an option';
  @Input() options: TreeSelectNode[] = [];
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() theme: 'light' | 'dark' = 'light';
  @Input() color: 'default' | 'primary' | 'success' | 'warning' | 'danger' = 'default';
  @Input() label = '';
  @Input() helperText = '';
  @Input() errorText = '';
  @Input() compact = false;
  @Input() spacious = false;
  @Input() animated = false;
  @Input() bounce = false;
  @Input() glow = false;
  @Input() loading = false;
  @Input() searchable = false;
  @Input() clearable = false;
  @Input() multiple = false;
  @Input() maxHeight = '300px';
  @Input() ariaLabel = '';
  @Input() ariaDescribedBy: string | null = null;
  @Output() change = new EventEmitter<unknown>();
  @Output() onSelect = new EventEmitter<TreeSelectNode>();
  @Output() onExpand = new EventEmitter<TreeSelectNode>();
  @Output() onCollapse = new EventEmitter<TreeSelectNode>();
  @Output() onFocus = new EventEmitter<void>();
  @Output() onBlur = new EventEmitter<void>();

  value: unknown = null;
  values: unknown[] = [];
  open = false;
  searchTerm = '';
  activeIndex = -1;
  hasError = false;

  private onChange: (val: unknown) => void = () => {};
  private onTouched: () => void = () => {};

  constructor(private cdr: ChangeDetectorRef) {}

  writeValue(val: unknown): void { 
    if (this.multiple) {
      this.values = Array.isArray(val) ? val : [];
    } else {
      this.value = val ?? null; 
    }
    this.cdr.markForCheck();
  }
  
  registerOnChange(fn: (val: unknown) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  setDisabledState(isDisabled: boolean): void { this.disabled = isDisabled; }

  toggle(): void {
    if (this.disabled || this.loading) return;
    this.open = !this.open;
    if (this.open) {
      this.onFocus.emit();
    } else {
      this.onBlur.emit();
    }
    this.cdr.markForCheck();
  }

  select(item: TreeSelectNode): void {
    if (this.disabled || item.disabled || this.loading) return;
    
    if (item.children?.length) {
      // Toggle expansion for parent nodes
      item.expanded = !item.expanded;
      if (item.expanded) {
        this.onExpand.emit(item);
      } else {
        this.onCollapse.emit(item);
      }
      this.cdr.markForCheck();
      return;
    }

    // Select leaf nodes
    if (this.multiple) {
      const index = this.values.indexOf(item.value ?? item.label);
      if (index > -1) {
        this.values.splice(index, 1);
      } else {
        this.values.push(item.value ?? item.label);
      }
      this.onChange(this.values);
      this.change.emit(this.values);
    } else {
      this.value = item.value ?? item.label;
      this.onChange(this.value);
      this.change.emit(this.value);
      this.open = false;
    }
    
    this.onSelect.emit(item);
    this.cdr.markForCheck();
  }

  clear(): void {
    if (this.disabled || this.loading) return;
    
    if (this.multiple) {
      this.values = [];
      this.onChange(this.values);
      this.change.emit(this.values);
    } else {
      this.value = null;
      this.onChange(this.value);
      this.change.emit(this.value);
    }
    this.cdr.markForCheck();
  }

  onBlurEvent(): void {
    this.onTouched();
    this.onBlur.emit();
    this.open = false;
  }

  onKeyDown(event: KeyboardEvent): void {
    if (this.disabled || this.loading) return;

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this.moveActive(1);
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.moveActive(-1);
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (this.activeIndex >= 0) {
          const node = this.getFlatNodes()[this.activeIndex];
          if (node) this.select(node);
        }
        break;
      case 'Escape':
        event.preventDefault();
        this.open = false;
        this.onBlur.emit();
        break;
    }
  }

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchTerm = input.value.toLowerCase();
  }

  displayValue(): string {
    if (this.multiple) {
      if (this.values.length === 0) return this.placeholder;
      if (this.values.length === 1) {
        const found = this.findInTree(this.options, this.values[0]);
        return found?.label ?? String(this.values[0]);
      }
      return `${this.values.length} items selected`;
    } else {
      if (!this.value) return this.placeholder;
      const found = this.findInTree(this.options, this.value);
      return found?.label ?? String(this.value);
    }
  }

  getFilteredOptions(): TreeSelectNode[] {
    if (!this.searchTerm) return this.options;
    return this.filterTree(this.options, this.searchTerm);
  }

  getFlatNodes(): TreeSelectNode[] {
    const flat: TreeSelectNode[] = [];
    this.flattenTree(this.getFilteredOptions(), flat);
    return flat;
  }

  isSelected(node: TreeSelectNode): boolean {
    if (this.multiple) {
      return this.values.includes(node.value ?? node.label);
    }
    return this.value === (node.value ?? node.label);
  }

  getComponentClass(): string {
    const classes = ['sui-tree-select'];
    
    if (this.size !== 'md') classes.push(`sui-tree-select-${this.size}`);
    if (this.color !== 'default') classes.push(`sui-tree-select-${this.color}`);
    if (this.theme !== 'light') classes.push(`sui-tree-select-${this.theme}`);
    if (this.disabled) classes.push('sui-tree-select-disabled');
    if (this.loading) classes.push('sui-tree-select-loading');
    if (this.hasError) classes.push('sui-tree-select-error');
    if (this.compact) classes.push('sui-tree-select-compact');
    if (this.spacious) classes.push('sui-tree-select-spacious');
    if (this.animated) classes.push('sui-tree-select-animated');
    if (this.bounce) classes.push('sui-tree-select-bounce');
    if (this.glow) classes.push('sui-tree-select-glow');
    
    return classes.join(' ');
  }

  getAriaLabel(): string {
    if (this.ariaLabel) return this.ariaLabel;
    if (this.label) return this.label;
    return 'Tree select';
  }

  getAriaDescribedBy(): string | null {
    const ids = [];
    if (this.ariaDescribedBy) ids.push(this.ariaDescribedBy);
    if (this.helperText) ids.push(`${this.getComponentId()}-helper`);
    if (this.errorText) ids.push(`${this.getComponentId()}-error`);
    return ids.length > 0 ? ids.join(' ') : null;
  }

  getComponentId(): string {
    return `sui-tree-select-${Math.random().toString(36).substr(2, 9)}`;
  }

  getDropdownStyle(): { [key: string]: string } {
    return {
      '--sui-tree-select-dropdown-max-height': this.maxHeight
    };
  }

  private findInTree(nodes: TreeSelectNode[], target: unknown): TreeSelectNode | null {
    for (const node of nodes) {
      if (node.value === target || node.label === target) return node;
      if (node.children) {
        const found = this.findInTree(node.children, target);
        if (found) return found;
      }
    }
    return null;
  }

  private filterTree(nodes: TreeSelectNode[], term: string): TreeSelectNode[] {
    return nodes.filter(node => {
      const matches = node.label.toLowerCase().includes(term);
      const children = node.children ? this.filterTree(node.children, term) : [];
      
      if (matches || children.length > 0) {
        return {
          ...node,
          children: children.length > 0 ? children : node.children,
          expanded: children.length > 0 ? true : node.expanded
        };
      }
      return false;
    }).map(node => ({
      ...node,
      children: node.children ? this.filterTree(node.children, term) : node.children,
      expanded: node.children && this.filterTree(node.children, term).length > 0 ? true : node.expanded
    }));
  }

  private flattenTree(nodes: TreeSelectNode[], flat: TreeSelectNode[]): void {
    for (const node of nodes) {
      flat.push(node);
      if (node.children && node.expanded) {
        this.flattenTree(node.children, flat);
      }
    }
  }

  private moveActive(delta: number): void {
    const flatNodes = this.getFlatNodes();
    if (flatNodes.length === 0) return;

    let next = this.activeIndex + delta;
    if (next < 0) next = 0;
    if (next > flatNodes.length - 1) next = flatNodes.length - 1;

    this.activeIndex = next;
  }
}
