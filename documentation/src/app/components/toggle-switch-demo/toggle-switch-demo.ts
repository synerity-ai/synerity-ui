import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToggleSwitch } from '@synerity/ui';
import { ComponentExample } from '../../models/component.model';

@Component({
  selector: 'app-toggle-switch-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, ToggleSwitch],
  templateUrl: './toggle-switch-demo.html',
  styleUrl: './toggle-switch-demo.scss'
})
export class ToggleSwitchDemoComponent {
  @Input() currentExample!: ComponentExample;

  // Toggle values for different examples
  isEnabled = false;
  isEnabledLabels = true;
  valueSmall = false;
  valueMedium = true;
  valueLarge = false;
  valueDisabled = true;
  valuePrimary = true;
  valueSuccess = true;
  valueDanger = false;

  getCurrentExample(): ComponentExample {
    return this.currentExample;
  }
}
