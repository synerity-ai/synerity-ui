import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Terminal } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-terminal-page',
  standalone: true,
  imports: [CommonModule, FormsModule, Terminal, Tabs],
  templateUrl: './terminal.html',
  styleUrl: './terminal.scss'
})
export class TerminalPage {
  activeTab = 'demo';

  // Basic Terminal
  basicWelcomeMessage = 'Welcome to Terminal';
  basicPrompt = '$';
  basicStyle = { backgroundColor: '#1a1a1a', color: '#00ff00' };
  basicStyleClass = 'basic-terminal';

  // Custom Terminal
  customWelcomeMessage = 'Custom Terminal';
  customPrompt = 'user@host:~$';
  customStyle = { backgroundColor: '#2d3748', color: '#68d391' };
  customStyleClass = 'custom-terminal';

  // Multiple Terminals
  terminals = [
    { welcomeMessage: 'Terminal 1', prompt: '$', style: { backgroundColor: '#1a1a1a', color: '#00ff00' }, styleClass: 'terminal-1' },
    { welcomeMessage: 'Terminal 2', prompt: '>', style: { backgroundColor: '#2d3748', color: '#68d391' }, styleClass: 'terminal-2' },
    { welcomeMessage: 'Terminal 3', prompt: '#', style: { backgroundColor: '#1e3a8a', color: '#60a5fa' }, styleClass: 'terminal-3' },
    { welcomeMessage: 'Terminal 4', prompt: '%', style: { backgroundColor: '#7c2d12', color: '#fbbf24' }, styleClass: 'terminal-4' }
  ];

  // Interactive Demo
  interactiveWelcomeMessage = 'Interactive Terminal';
  interactivePrompt = 'demo@terminal:~$';
  interactiveStyle = { backgroundColor: '#1f2937', color: '#10b981' };
  interactiveStyleClass = 'interactive-terminal';
  commandCount = 0;

  // Code visibility
  showBasicTerminalCode = false;
  showCustomTerminalCode = false;
  showMultipleTerminalsCode = false;
  showInteractiveDemoCode = false;

  // Action log
  actionLog: string[] = [];

  onTabChange(tabId: string) {
    this.activeTab = tabId;
  }

  toggleCode(example: string) {
    switch (example) {
      case 'basicTerminal':
        this.showBasicTerminalCode = !this.showBasicTerminalCode;
        break;
      case 'customTerminal':
        this.showCustomTerminalCode = !this.showCustomTerminalCode;
        break;
      case 'multipleTerminals':
        this.showMultipleTerminalsCode = !this.showMultipleTerminalsCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }

  // Event handlers
  onBasicCommand(command: string) {
    this.addToActionLog(`Basic terminal command: ${command}`);
  }

  onCustomCommand(command: string) {
    this.addToActionLog(`Custom terminal command: ${command}`);
  }

  onTerminalCommand(terminal: any, command: string) {
    this.addToActionLog(`${terminal.welcomeMessage} command: ${command}`);
  }

  onInteractiveCommand(command: string) {
    this.commandCount++;
    this.addToActionLog(`Interactive terminal command: ${command}`);
  }

  // Interactive Demo methods
  setRandomWelcomeMessage() {
    const messages = ['Welcome to Terminal', 'Custom Terminal', 'Interactive Terminal', 'Demo Terminal', 'My Terminal'];
    this.interactiveWelcomeMessage = messages[Math.floor(Math.random() * messages.length)];
    this.addToActionLog(`Welcome message set to "${this.interactiveWelcomeMessage}"`);
  }

  setRandomPrompt() {
    const prompts = ['$', '>', '#', '%', 'user@host:~$', 'demo@terminal:~$', 'admin@server:~$'];
    this.interactivePrompt = prompts[Math.floor(Math.random() * prompts.length)];
    this.addToActionLog(`Prompt set to "${this.interactivePrompt}"`);
  }

  setRandomStyle() {
    const styles = [
      { backgroundColor: '#1a1a1a', color: '#00ff00' },
      { backgroundColor: '#2d3748', color: '#68d391' },
      { backgroundColor: '#1e3a8a', color: '#60a5fa' },
      { backgroundColor: '#7c2d12', color: '#fbbf24' },
      { backgroundColor: '#1f2937', color: '#10b981' }
    ];
    this.interactiveStyle = styles[Math.floor(Math.random() * styles.length)];
    this.addToActionLog('Style updated');
  }

  executeRandomCommand() {
    const commands = ['help', 'date', 'echo Hello World', 'clear', 'ls', 'pwd'];
    const randomCommand = commands[Math.floor(Math.random() * commands.length)];
    this.addToActionLog(`Random command: ${randomCommand}`);
  }

  clearInteractiveTerminal() {
    this.commandCount = 0;
    this.addToActionLog('Interactive terminal cleared');
  }

  clearAllTerminals() {
    this.addToActionLog('All terminals cleared');
  }

  addToActionLog(action: string) {
    const timestamp = new Date().toLocaleTimeString();
    this.actionLog.unshift(`[${timestamp}] ${action}`);
    if (this.actionLog.length > 10) {
      this.actionLog.pop();
    }
  }

  clearActionLog() {
    this.actionLog = [];
  }
}