import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs as AppTabs } from '../../shared/tabs/tabs';
import { Terminal as SuiTerminal } from 'ui-lib';

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [CommonModule, FormsModule, AppTabs, SuiTerminal],
  templateUrl: './terminal.html',
  styleUrl: './terminal.scss'
})
export class TerminalComponent {
  activeTab = 'demo';
  
  // Demo data
  terminalWelcomeMessage = 'Welcome to Synerity Terminal Demo';
  terminalPrompt = '$';
  terminalHeight = '400px';
  
  // Code visibility states
  showBasicTerminalCode = false;
  showCustomTerminalCode = false;
  showInteractiveTerminalCode = false;
  
  onTabChange(tab: string): void {
    this.activeTab = tab;
  }
  
  toggleCode(type: string): void {
    switch (type) {
      case 'basic':
        this.showBasicTerminalCode = !this.showBasicTerminalCode;
        break;
      case 'custom':
        this.showCustomTerminalCode = !this.showCustomTerminalCode;
        break;
      case 'interactive':
        this.showInteractiveTerminalCode = !this.showInteractiveTerminalCode;
        break;
    }
  }
  
  onTerminalCommand(command: string): void {
    console.log('Terminal command:', command);
  }
}
