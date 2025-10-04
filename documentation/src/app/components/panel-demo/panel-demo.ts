import { Component, Input } from '@angular/core';
import { Panel, Button } from '@synerity/ui';
import { CommonModule } from '@angular/common';
import { ComponentExample } from '../../models/component.model';

@Component({
  selector: 'app-panel-demo',
  standalone: true,
  imports: [CommonModule, Panel, Button],
  templateUrl: './panel-demo.html',
  styleUrl: './panel-demo.scss'
})
export class PanelDemoComponent {
  @Input() currentExample: ComponentExample | null = null;

  // Basic Panel
  basicCollapsed = false;

  // Toggleable Panel
  toggleableCollapsed = false;

  // Panel without header
  noHeaderCollapsed = false;

  // Custom styled panel
  customCollapsed = false;

  // Panel with custom content
  contentCollapsed = false;

  // Panel with different sizes
  smallCollapsed = false;
  largeCollapsed = false;

  // Panel with header and footer
  headerFooterCollapsed = false;

  onBasicToggle(event: any): void {
    console.log('Basic panel toggle:', event);
  }

  onToggleableToggle(event: any): void {
    console.log('Toggleable panel toggle:', event);
  }

  onCustomToggle(event: any): void {
    console.log('Custom panel toggle:', event);
  }

  onContentToggle(event: any): void {
    console.log('Content panel toggle:', event);
  }

  onSmallToggle(event: any): void {
    console.log('Small panel toggle:', event);
  }

  onLargeToggle(event: any): void {
    console.log('Large panel toggle:', event);
  }

  onHeaderFooterToggle(event: any): void {
    console.log('Header footer panel toggle:', event);
  }
}