import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputGroup } from '@synerity/ui';

@Component({
  selector: 'app-su-input-group-demo',
  imports: [CommonModule, FormsModule, InputGroup],
  templateUrl: './su-input-group-demo.html',
  styleUrl: './su-input-group-demo.scss'
})
export class SuInputGroupDemo {
  // Values
  username = '';
  price = '';
  url = '';
  email = '';
  search = '';
  
  // Interactive
  leftAddon = '@';
  rightAddon = '.com';
  inputPlaceholder = 'username';
  currentSize: 'small' | 'normal' | 'large' = 'normal';
  isDisabled = false;
  
  sizes: Array<{ value: 'small' | 'normal' | 'large'; label: string }> = [
    { value: 'small', label: 'Small' },
    { value: 'normal', label: 'Normal' },
    { value: 'large', label: 'Large' }
  ];
  
  handleSearch(): void {
    alert('Search clicked: ' + this.search);
  }
  
  getCodeExample(): string {
    const attrs = [`size="${this.currentSize}"`];
    if (this.isDisabled) attrs.push('[disabled]="true"');
    
    return `<sui-input-group ${attrs.join(' ')}>
  <span class="sui-input-group-addon">${this.leftAddon}</span>
  <input type="text" placeholder="${this.inputPlaceholder}"${this.isDisabled ? ' disabled' : ''} />
  <span class="sui-input-group-addon">${this.rightAddon}</span>
</sui-input-group>`;
  }
}
