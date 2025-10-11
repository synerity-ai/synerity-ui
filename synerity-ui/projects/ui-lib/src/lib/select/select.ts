import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, forwardRef, Input, Output, HostListener, ElementRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sui-select',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './select.html',
  styleUrl: './select.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Select),
      multi: true
    }
  ]
})
export class Select implements ControlValueAccessor {
  @Input() disabled = false;
  @Input() name = '';
  @Input() inputId = '';
  @Input() placeholder: string | null = null;
  @Input() options: Array<{ label: string; value: unknown; disabled?: boolean }>= [];
  @Input() searchable = false;
  @Input() clearable = false;
  @Input() multiple = false;
  @Input() selectAll = false;
  @Input() maxDisplayItems = 3;
  @Input() showSelectedCount = true;
  @Input() searchPlaceholder = 'Search...';
  @Input() noResultsText = 'No results found';
  @Input() loading = false;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Output() change = new EventEmitter<unknown>();

  @ViewChild('dropdown') dropdown!: ElementRef;
  @ViewChild('searchInput') searchInput!: ElementRef;

  value: unknown = null;
  searchTerm = '';
  isOpen = false;
  focusedIndex = -1;

  private onChange: (val: unknown) => void = () => {};
  private onTouched: () => void = () => {};

  constructor(private cdr: ChangeDetectorRef) {}

  writeValue(obj: unknown): void {
    if (this.multiple) {
      this.value = Array.isArray(obj) ? obj : [];
    } else {
      this.value = obj;
    }
    this.cdr.markForCheck();
  }

  registerOnChange(fn: (val: unknown) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onSelectChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    
    if (this.multiple) {
      // Handle multiple selection
      const selectedValues: unknown[] = [];
      for (let i = 0; i < select.options.length; i++) {
        const option = select.options[i];
        if (option.selected && option.value !== '') {
          // Find the option in our options array
          const realIndex = this.placeholder != null ? i - 1 : i;
          if (realIndex >= 0 && realIndex < this.options.length) {
            selectedValues.push(this.options[realIndex]?.value);
          }
        }
      }
      this.value = selectedValues;
    } else {
      // Handle single selection
      const selectedIndex = select.selectedIndex;
      // Account for placeholder option at index 0
      const realIndex = this.placeholder != null ? selectedIndex - 1 : selectedIndex;
      if (this.placeholder != null && selectedIndex === 0) {
        this.value = null;
      } else if (realIndex >= 0 && realIndex < this.options.length) {
        this.value = this.options[realIndex]?.value;
      }
    }
    
    this.onChange(this.value);
    this.change.emit(this.value);
  }

  onBlur(): void {
    this.onTouched();
  }

  onSearchInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchTerm = input.value ?? '';
    this.cdr.markForCheck();
  }

  clearSelection(): void {
    if (this.disabled) return;
    this.value = this.multiple ? [] : null;
    this.onChange(this.value);
    this.change.emit(this.value);
    this.cdr.markForCheck();
  }

  get filteredOptions(): Array<{ label: string; value: unknown; disabled?: boolean }> {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) return this.options;
    return this.options.filter(o => (o.label ?? '').toLowerCase().includes(term));
  }

  isOptionSelected(optionValue: unknown): boolean {
    if (this.multiple) {
      return Array.isArray(this.value) && this.value.includes(optionValue);
    } else {
      return this.value === optionValue;
    }
  }

  hasValue(): boolean {
    if (this.multiple) {
      return Array.isArray(this.value) && this.value.length > 0;
    } else {
      return this.value != null;
    }
  }

  // New methods for enhanced functionality
  toggleDropdown(): void {
    if (this.disabled) return;
    this.isOpen = !this.isOpen;
    if (this.isOpen && this.searchable) {
      setTimeout(() => this.searchInput?.nativeElement?.focus(), 0);
    }
    this.cdr.markForCheck();
  }

  closeDropdown(): void {
    this.isOpen = false;
    this.focusedIndex = -1;
    this.onTouched();
    this.cdr.markForCheck();
  }

  onOptionClick(option: { label: string; value: unknown; disabled?: boolean }): void {
    if (option.disabled) return;

    if (this.multiple) {
      const currentValues = Array.isArray(this.value) ? this.value : [];
      const index = currentValues.indexOf(option.value);
      
      if (index > -1) {
        // Remove if already selected
        currentValues.splice(index, 1);
      } else {
        // Add if not selected
        currentValues.push(option.value);
      }
      
      this.value = currentValues;
    } else {
      this.value = option.value;
      this.closeDropdown();
    }
    
    this.onChange(this.value);
    this.change.emit(this.value);
    this.cdr.markForCheck();
  }

  removeSelectedItem(value: unknown): void {
    if (!this.multiple || !Array.isArray(this.value)) return;
    
    const index = this.value.indexOf(value);
    if (index > -1) {
      this.value.splice(index, 1);
      this.onChange(this.value);
      this.change.emit(this.value);
      this.cdr.markForCheck();
    }
  }

  selectAllOptions(): void {
    if (!this.multiple) return;
    
    const availableOptions = this.filteredOptions.filter(opt => !opt.disabled);
    this.value = availableOptions.map(opt => opt.value);
    this.onChange(this.value);
    this.change.emit(this.value);
    this.cdr.markForCheck();
  }

  clearAllOptions(): void {
    if (!this.multiple) return;
    
    this.value = [];
    this.onChange(this.value);
    this.change.emit(this.value);
    this.cdr.markForCheck();
  }

  get selectedOptions(): Array<{ label: string; value: unknown; disabled?: boolean }> {
    if (!this.multiple || !Array.isArray(this.value)) return [];
    
    return this.options.filter(opt => (this.value as unknown[]).includes(opt.value));
  }

  get displayText(): string {
    if (this.multiple) {
      const selected = this.selectedOptions;
      if (selected.length === 0) return this.placeholder || '';
      
      if (this.showSelectedCount && selected.length > this.maxDisplayItems) {
        return `${selected.slice(0, this.maxDisplayItems).map(s => s.label).join(', ')} +${selected.length - this.maxDisplayItems} more`;
      }
      
      return selected.map(s => s.label).join(', ');
    } else {
      const selected = this.options.find(opt => opt.value === this.value);
      return selected ? selected.label : (this.placeholder || '');
    }
  }

  get isAllSelected(): boolean {
    if (!this.multiple || !Array.isArray(this.value)) return false;
    const availableOptions = this.filteredOptions.filter(opt => !opt.disabled);
    return availableOptions.length > 0 && availableOptions.every(opt => (this.value as unknown[]).includes(opt.value));
  }

  get isPartiallySelected(): boolean {
    if (!this.multiple || !Array.isArray(this.value)) return false;
    const availableOptions = this.filteredOptions.filter(opt => !opt.disabled);
    const selectedCount = availableOptions.filter(opt => (this.value as unknown[]).includes(opt.value)).length;
    return selectedCount > 0 && selectedCount < availableOptions.length;
  }

  // Keyboard navigation
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (!this.isOpen) {
      if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowDown') {
        event.preventDefault();
        this.toggleDropdown();
      }
      return;
    }

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this.focusedIndex = Math.min(this.focusedIndex + 1, this.filteredOptions.length - 1);
        this.cdr.markForCheck();
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.focusedIndex = Math.max(this.focusedIndex - 1, -1);
        this.cdr.markForCheck();
        break;
      case 'Enter':
        event.preventDefault();
        if (this.focusedIndex >= 0 && this.focusedIndex < this.filteredOptions.length) {
          this.onOptionClick(this.filteredOptions[this.focusedIndex]);
        }
        break;
      case 'Escape':
        event.preventDefault();
        this.closeDropdown();
        break;
      case 'Tab':
        this.closeDropdown();
        break;
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (this.dropdown && !this.dropdown.nativeElement.contains(event.target)) {
      this.closeDropdown();
    }
  }
}
