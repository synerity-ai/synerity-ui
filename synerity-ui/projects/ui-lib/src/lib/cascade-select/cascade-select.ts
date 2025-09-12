import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'sui-cascade-select',
  imports: [FormsModule, NgFor],
  templateUrl: './cascade-select.html',
  styleUrl: './cascade-select.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CascadeSelect),
      multi: true
    }
  ]
})
export class CascadeSelect implements ControlValueAccessor {
  @Input() disabled = false;
  @Input() name = '';
  @Input() levelsPlaceholder: string[] = [];
  @Input() options: Array<{ label: string; value?: unknown; children?: any[] }> = [];
  @Output() change = new EventEmitter<unknown>();

  // path of selected options per level
  path: Array<{ label: string; value?: unknown; children?: any[] } | null> = [];
  value: unknown = null;

  private onChange: (val: unknown) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(val: unknown): void {
    this.value = val ?? null;
    // cannot reconstruct full path without external hint; keep value only
  }
  registerOnChange(fn: (val: unknown) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  setDisabledState(isDisabled: boolean): void { this.disabled = isDisabled; }

  levelOptions(level: number): Array<{ label: string; value?: unknown; children?: any[] }> {
    if (level === 0) return this.options;
    const parent = this.path[level - 1];
    return (parent?.children as any[]) ?? [];
  }

  onSelect(level: number, idx: number): void {
    const opts = this.levelOptions(level);
    const picked = opts[idx] ?? null;
    this.path[level] = picked;
    // clear deeper levels
    this.path = this.path.slice(0, level + 1);
    // update value if leaf
    const isLeaf = !picked || !picked.children || picked.children.length === 0;
    if (isLeaf) {
      const nextVal = picked?.value ?? picked?.label ?? null;
      this.value = nextVal;
      this.onChange(this.value);
      this.change.emit(this.value);
    }
  }
}
