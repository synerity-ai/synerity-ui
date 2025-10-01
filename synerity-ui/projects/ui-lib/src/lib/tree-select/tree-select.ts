import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

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
  @Input() placeholder = '';
  @Input() options: Array<{ label: string; value?: unknown; children?: any[] }> = [];
  @Output() change = new EventEmitter<unknown>();

  value: unknown = null;
  open = false;

  private onChange: (val: unknown) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(val: unknown): void { this.value = val ?? null; }
  registerOnChange(fn: (val: unknown) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  setDisabledState(isDisabled: boolean): void { this.disabled = isDisabled; }

  toggle(): void {
    if (this.disabled) return;
    this.open = !this.open;
  }

  select(item: { label: string; value?: unknown; children?: any[] }): void {
    if (this.disabled || item.children?.length) return; // only leaf nodes selectable
    this.value = item.value ?? item.label;
    this.onChange(this.value);
    this.change.emit(this.value);
    this.open = false;
  }

  onBlur(): void {
    this.onTouched();
    this.open = false;
  }

  displayValue(): string {
    if (!this.value) return this.placeholder ?? '';
    const found = this.findInTree(this.options, this.value);
    return found?.label ?? String(this.value);
  }

  private findInTree(nodes: Array<{ label: string; value?: unknown; children?: any[] }>, target: unknown): { label: string; value?: unknown } | null {
    for (const node of nodes) {
      if (node.value === target || node.label === target) return node;
      if (node.children) {
        const found = this.findInTree(node.children, target);
        if (found) return found;
      }
    }
    return null;
  }
}
