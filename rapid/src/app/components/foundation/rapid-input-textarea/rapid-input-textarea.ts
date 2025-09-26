import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Textarea } from '@synerity/ui';

@Component({
  selector: 'app-rapid-input-textarea',
  standalone: true,
  imports: [
    CommonModule,
    Textarea
  ],
  templateUrl: './rapid-input-textarea.html',
  styleUrl: './rapid-input-textarea.scss'
})
export class RapidInputTextareaComponent {
  title = 'Synerity UI Input Textarea Demo';
}