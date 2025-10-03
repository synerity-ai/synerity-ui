import { Component, Input, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-code-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './code-display.component.html',
  styleUrl: './code-display.component.scss'
})
export class CodeDisplayComponent implements OnInit {
  @Input() code: string = '';
  @Input() language: string = 'html';
  @Input() showLineNumbers: boolean = true;
  @Input() maxHeight: string = '400px';
  
  protected readonly isCopied = signal(false);
  protected readonly highlightedCode = signal('');

  ngOnInit(): void {
    this.highlightCode();
  }

  private highlightCode(): void {
    // For now, just escape HTML and show plain code
    this.highlightedCode.set(this.escapeHTML(this.code));
  }

  private escapeHTML(code: string): string {
    // Simply escape HTML entities for safe display
    return code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  copyToClipboard(): void {
    navigator.clipboard.writeText(this.code).then(() => {
      this.isCopied.set(true);
      setTimeout(() => this.isCopied.set(false), 2000);
    });
  }
}
