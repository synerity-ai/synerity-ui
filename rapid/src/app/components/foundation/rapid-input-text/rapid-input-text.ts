import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import InputText component from Synerity UI
import { InputText } from '@synerity/ui';

@Component({
  selector: 'app-rapid-input-text',
  standalone: true,
  imports: [
    CommonModule,
    InputText
  ],
  templateUrl: './rapid-input-text.html',
  styleUrl: './rapid-input-text.scss'
})
export class RapidInputTextComponent {
  title = 'Synerity UI Input Text Demo';
}