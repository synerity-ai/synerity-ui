import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Terminal } from 'ui-lib';

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [CommonModule, Terminal],
  templateUrl: './terminal.html',
  styleUrls: ['./terminal.scss']
})
export class TerminalComponent {
  activeTab = 0;
  showBasicTerminal = false;
  showCustomTerminal = false;
  showInteractiveTerminal = false;

  showBasicCode = false;
  showCustomCode = false;
  showInteractiveCode = false;

  terminalWelcomeMessage = 'Welcome to Synerity Terminal Demo';
  terminalPrompt = '$';
  terminalHeight = '400px';

  onTabChange(index: number): void {
    this.activeTab = index;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basic':
        this.showBasicCode = !this.showBasicCode;
        break;
      case 'custom':
        this.showCustomCode = !this.showCustomCode;
        break;
      case 'interactive':
        this.showInteractiveCode = !this.showInteractiveCode;
        break;
    }
  }

  onTerminalCommand(command: string): void {
    console.log('Terminal command:', command);
  }
}
