import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Slider } from '@synerity/ui';
import { ComponentExample } from '../../models/component.model';

@Component({
  selector: 'app-slider-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, Slider],
  templateUrl: './slider-demo.html',
  styleUrl: './slider-demo.scss'
})
export class SliderDemoComponent {
  @Input() currentExample!: ComponentExample;

  // Slider values for different examples
  value = 50;
  valueStep = 50;
  valueVertical = 50;
  valueDisabled = 50;

  getCurrentExample(): ComponentExample {
    return this.currentExample;
  }
}
