import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

// Import component demos
import { RapidButtonsComponent } from '../foundation/rapid-buttons/rapid-buttons';
import { RapidInputTextComponent } from '../foundation/rapid-input-text/rapid-input-text';
import { RapidInputTextareaComponent } from '../foundation/rapid-input-textarea/rapid-input-textarea';
import { RapidCardComponent } from '../foundation/rapid-card/rapid-card';

@Component({
  selector: 'app-component-viewer',
  standalone: true,
  imports: [
    CommonModule,
    RapidButtonsComponent,
    RapidInputTextComponent,
    RapidInputTextareaComponent,
    RapidCardComponent
  ],
  templateUrl: './component-viewer.html',
  styleUrl: './component-viewer.scss'
})
export class ComponentViewerComponent {
  componentName: string = '';
  componentDescription: string = '';

  constructor(private route: ActivatedRoute) {
    // Get component name from route
    this.route.params.subscribe(params => {
      const routeComponent = params['component'] || 'button';
      // Convert route parameter to proper component name
      this.componentName = this.convertRouteToComponentName(routeComponent);
      this.setComponentDescription();
    });
  }

  private convertRouteToComponentName(route: string): string {
    const routeMap: { [key: string]: string } = {
      'button': 'Button',
      'inputtext': 'InputText',
      'inputtextarea': 'InputTextarea',
      'card': 'Card',
      'badge': 'Badge',
      'avatar': 'Avatar',
      'progressbar': 'ProgressBar'
    };
    
    return routeMap[route.toLowerCase()] || route.charAt(0).toUpperCase() + route.slice(1);
  }

  private setComponentDescription() {
    const descriptions: { [key: string]: string } = {
      'Button': 'Interactive buttons with multiple variants and sizes for user actions.',
      'InputText': 'Text input fields with various states and styling options.',
      'InputTextarea': 'Multi-line text input for longer content entry.',
      'Card': 'Flexible container component for grouping related content.',
      'Badge': 'Small status indicators and labels for highlighting information.',
      'Avatar': 'User profile images with fallback options and different sizes.',
      'ProgressBar': 'Visual progress indicators for showing completion status.'
    };
    
    this.componentDescription = descriptions[this.componentName] || 'Component description coming soon.';
  }
}