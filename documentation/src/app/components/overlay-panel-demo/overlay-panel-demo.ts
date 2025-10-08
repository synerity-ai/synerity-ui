import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentExample } from '../../models/component.model';
import { OverlayPanel, Button } from '@synerity/ui';

@Component({
  selector: 'app-overlay-panel-demo',
  imports: [CommonModule, OverlayPanel, Button],
  templateUrl: './overlay-panel-demo.html',
  styleUrl: './overlay-panel-demo.scss'
})
export class OverlayPanelDemo {
  @Input() currentExample!: ComponentExample;

  getCurrentExample(): ComponentExample {
    return this.currentExample;
  }

  // Demo data
  sizes = ['small', 'normal', 'large'];
  positions = ['top', 'bottom', 'left', 'right'];
  
  // Demo state
  basicOverlayVisible = false;
  sizeOverlayVisible = false;
  positionOverlayVisible = false;
  modalOverlayVisible = false;
  dismissibleOverlayVisible = false;
  closeButtonOverlayVisible = false;
  richContentOverlayVisible = false;
  customStyleOverlayVisible = false;

  // Demo methods
  toggleBasicOverlay(): void {
    this.basicOverlayVisible = !this.basicOverlayVisible;
  }

  toggleSizeOverlay(): void {
    this.sizeOverlayVisible = !this.sizeOverlayVisible;
  }

  togglePositionOverlay(): void {
    this.positionOverlayVisible = !this.positionOverlayVisible;
  }

  toggleModalOverlay(): void {
    this.modalOverlayVisible = !this.modalOverlayVisible;
  }

  toggleDismissibleOverlay(): void {
    this.dismissibleOverlayVisible = !this.dismissibleOverlayVisible;
  }

  toggleCloseButtonOverlay(): void {
    this.closeButtonOverlayVisible = !this.closeButtonOverlayVisible;
  }

  toggleRichContentOverlay(): void {
    this.richContentOverlayVisible = !this.richContentOverlayVisible;
  }

  toggleCustomStyleOverlay(): void {
    this.customStyleOverlayVisible = !this.customStyleOverlayVisible;
  }

  // Event handlers
  onShow(): void {
    console.log('Overlay panel shown');
  }

  onHide(): void {
    console.log('Overlay panel hidden');
  }
}
