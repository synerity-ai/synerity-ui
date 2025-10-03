import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Terminal } from '@synerity/ui';

@Component({
  selector: 'app-su-terminal-demo',
  imports: [CommonModule, FormsModule, Terminal],
  templateUrl: './su-terminal-demo.html',
  styleUrl: './su-terminal-demo.scss'
})
export class SuTerminalDemo {
  // Welcome message options
  welcomeMessages = [
    { value: 'Welcome to Synerity Terminal', label: 'Default' },
    { value: 'Admin Console - Authorized Access Only', label: 'Admin' },
    { value: 'Guest Session', label: 'Guest' }
  ];

  // Prompt options
  prompts = [
    { value: '$', label: 'Default ($)' },
    { value: '>', label: 'Caret (>)' },
    { value: 'ADMIN@synerity:~#', label: 'Admin Prompt' }
  ];

  // Style options
  styles = [
    { value: '', label: 'Default (Dark)' },
    { value: 'sui-terminal--white', label: 'Light Theme' },
    { value: 'sui-terminal--blue', label: 'Blue Theme' },
    { value: 'sui-terminal--purple', label: 'Purple Theme' }
  ];

  // Size options
  sizes = [
    { value: '', label: 'Normal' },
    { value: 'sui-terminal--small', label: 'Small' },
    { value: 'sui-terminal--large', label: 'Large' }
  ];

  // Theme options
  themes = [
    { value: '', label: 'Default' },
    { value: 'sui-terminal--modern', label: 'Modern' },
    { value: 'sui-terminal--minimal', label: 'Minimal' }
  ];

  selectedWelcomeMessage = 'Welcome to Synerity Terminal';
  selectedPrompt = '$';
  selectedStyle = '';
  selectedSize = '';
  selectedTheme = '';

  // Event tracking
  commandCount = 0;
  lastCommand = '';
  lastOutput = '';

  // Event handlers
  onCommandExecuted(command: string): void {
    this.commandCount++;
    this.lastCommand = command;
    console.log('Command executed:', command);
  }

  // Get terminal class
  getTerminalClass(): string {
    let classes = 'sui-terminal';

    if (this.selectedStyle) {
      classes += ` ${this.selectedStyle}`;
    }

    if (this.selectedSize) {
      classes += ` ${this.selectedSize}`;
    }

    if (this.selectedTheme) {
      classes += ` ${this.selectedTheme}`;
    }

    return classes;
  }

  // Reset counters
  resetCounters(): void {
    this.commandCount = 0;
    this.lastCommand = '';
    this.lastOutput = '';
  }

  // Get configuration description
  getConfigDescription(): string {
    let description = `Welcome: ${this.selectedWelcomeMessage}`;
    description += ` • Prompt: ${this.selectedPrompt}`;
    description += ` • Style: ${this.selectedStyle || 'Default'}`;
    description += ` • Size: ${this.selectedSize || 'Normal'}`;
    description += ` • Theme: ${this.selectedTheme || 'Default'}`;
    return description;
  }
}
