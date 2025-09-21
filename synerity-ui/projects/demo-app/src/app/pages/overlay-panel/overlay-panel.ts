import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayPanel } from 'ui-lib';

@Component({
  selector: 'app-overlay-panel',
  standalone: true,
  imports: [CommonModule, OverlayPanel],
  templateUrl: './overlay-panel.html',
  styleUrls: ['./overlay-panel.scss']
})
export class OverlayPanelComponent {
  activeTab = 0;
  showBasicOverlayPanel = false;
  showPositionedOverlayPanel = false;
  showModalOverlayPanel = false;
  showCustomOverlayPanel = false;

  showBasicCode = false;
  showPositionedCode = false;
  showModalCode = false;
  showCustomCode = false;

  onTabChange(index: number): void {
    this.activeTab = index;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basic':
        this.showBasicCode = !this.showBasicCode;
        break;
      case 'positioned':
        this.showPositionedCode = !this.showPositionedCode;
        break;
      case 'modal':
        this.showModalCode = !this.showModalCode;
        break;
      case 'custom':
        this.showCustomCode = !this.showCustomCode;
        break;
    }
  }

  onShow(): void {
    console.log('Overlay panel shown');
  }

  onHide(): void {
    console.log('Overlay panel hidden');
  }

  toggleBasicOverlayPanel(): void {
    this.showBasicOverlayPanel = !this.showBasicOverlayPanel;
  }

  togglePositionedOverlayPanel(): void {
    this.showPositionedOverlayPanel = !this.showPositionedOverlayPanel;
  }

  toggleModalOverlayPanel(): void {
    this.showModalOverlayPanel = !this.showModalOverlayPanel;
  }

  toggleCustomOverlayPanel(): void {
    this.showCustomOverlayPanel = !this.showCustomOverlayPanel;
  }

  closeModalOverlayPanel(): void {
    this.showModalOverlayPanel = false;
  }
}
