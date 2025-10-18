import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IftaLabel, ToggleSwitch } from '@synerity/ui';
import { ComponentExample } from '../../models/component.model';

@Component({
  selector: 'app-ifta-label-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, IftaLabel, ToggleSwitch],
  templateUrl: './ifta-label-demo.html',
  styleUrl: './ifta-label-demo.scss'
})
export class IftaLabelDemoComponent {
  @Input() currentExample!: ComponentExample;

  getCurrentExample(): ComponentExample {
    return this.currentExample;
  }

  isActive = false;
  isVerified = true;
  hasAccess = false;
  isPaid = true;
}
