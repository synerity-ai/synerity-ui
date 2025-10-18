import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconField, InputText } from '@synerity/ui';
import { ComponentExample } from '../../models/component.model';

@Component({
  selector: 'app-icon-field-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, IconField, InputText],
  templateUrl: './icon-field-demo.html',
  styleUrl: './icon-field-demo.scss'
})
export class IconFieldDemoComponent {
  @Input() currentExample!: ComponentExample;

  getCurrentExample(): ComponentExample {
    return this.currentExample;
  }

  searchValue = '';
  emailValue = '';
  phoneValue = '';
  urlValue = '';
  usernameValue = '';
  passwordValue = '';
}
