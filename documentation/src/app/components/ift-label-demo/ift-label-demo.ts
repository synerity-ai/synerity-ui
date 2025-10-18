import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IftLabel, ToggleSwitch } from '@synerity/ui';
import { ComponentExample } from '../../models/component.model';

@Component({
  selector: 'app-ift-label-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, IftLabel, ToggleSwitch],
  templateUrl: './ift-label-demo.html',
  styleUrl: './ift-label-demo.scss'
})
export class IftLabelDemoComponent {
  @Input() currentExample!: ComponentExample;

  getCurrentExample(): ComponentExample {
    return this.currentExample;
  }

  isActive = false;
  isOnline = true;
  isPremium = false;
  isEnabled = true;
  hasPermission = false;
}
