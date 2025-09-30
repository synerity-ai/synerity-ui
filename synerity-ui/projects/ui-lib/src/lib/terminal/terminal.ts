import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { NgFor, NgIf, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

interface TerminalCommand {
  command: string;
  output: string;
  timestamp: Date;
}

@Component({
  selector: 'sui-terminal',
  imports: [CommonModule, NgFor, NgIf, FormsModule],
  templateUrl: './terminal.html',
  styleUrl: './terminal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Terminal implements OnDestroy {
  @Input() welcomeMessage = 'Welcome to Terminal';
  @Input() prompt = '$';
  @Input() style: any = {};
  @Input() styleClass = '';
  @Output() onCommand = new EventEmitter<string>();

  @ViewChild('terminalInput') terminalInput!: ElementRef;
  @ViewChild('terminalContent') terminalContent!: ElementRef;

  commands: TerminalCommand[] = [];
  currentCommand = '';
  commandHistory: string[] = [];
  historyIndex = -1;
  private keySubscription!: Subscription;

  ngOnDestroy(): void {
    if (this.keySubscription) {
      this.keySubscription.unsubscribe();
    }
  }

  executeCommand(): void {
    if (!this.currentCommand.trim()) return;

    const command = this.currentCommand.trim();
    this.commandHistory.push(command);
    this.historyIndex = this.commandHistory.length;

    // Add command to display
    this.commands.push({
      command,
      output: this.processCommand(command),
      timestamp: new Date()
    });

    this.onCommand.emit(command);
    this.currentCommand = '';
    this.scrollToBottom();
  }

  onKeyDown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'Enter':
        event.preventDefault();
        this.executeCommand();
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.navigateHistory(-1);
        break;
      case 'ArrowDown':
        event.preventDefault();
        this.navigateHistory(1);
        break;
    }
  }

  private navigateHistory(direction: number): void {
    if (this.commandHistory.length === 0) return;

    this.historyIndex += direction;
    this.historyIndex = Math.max(0, Math.min(this.commandHistory.length, this.historyIndex));

    if (this.historyIndex === this.commandHistory.length) {
      this.currentCommand = '';
    } else {
      this.currentCommand = this.commandHistory[this.historyIndex];
    }
  }

  private processCommand(command: string): string {
    // Simple command processing - can be extended
    switch (command.toLowerCase()) {
      case 'help':
        return 'Available commands: help, clear, date, echo';
      case 'clear':
        this.commands = [];
        return '';
      case 'date':
        return new Date().toString();
      case 'echo':
        return command.substring(5); // Remove 'echo ' prefix
      default:
        return `Command not found: ${command}`;
    }
  }

  private scrollToBottom(): void {
    setTimeout(() => {
      if (this.terminalContent) {
        this.terminalContent.nativeElement.scrollTop = this.terminalContent.nativeElement.scrollHeight;
      }
    }, 0);
  }

  getTerminalClass(): string {
    return `sui-terminal ${this.styleClass}`.trim();
  }

  getTerminalStyle(): any {
    return {
      ...this.style
    };
  }
}
