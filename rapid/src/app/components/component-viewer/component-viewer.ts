import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

// Import component demos
import { RapidButtonsComponent } from '../foundation/rapid-buttons/rapid-buttons';
import { RapidInputTextComponent } from '../foundation/rapid-input-text/rapid-input-text';
import { RapidInputTextareaComponent } from '../foundation/rapid-input-textarea/rapid-input-textarea';
import { RapidCardComponent } from '../foundation/rapid-card/rapid-card';
import { RapidBadgeComponent } from '../misc-components/rapid-badge/rapid-badge';
import { RapidAvatarComponent } from '../misc-components/rapid-avatar/rapid-avatar';
import { RapidAutocompleteComponent } from '../form-components/rapid-autocomplete/rapid-autocomplete';
import { RapidCheckbox } from '../form-components/rapid-checkbox/rapid-checkbox';
import { RapidRadioButton } from '../form-components/rapid-radio-button/rapid-radio-button';
import { RapidColorPicker } from '../form-components/rapid-color-picker/rapid-color-picker';

@Component({
  selector: 'app-component-viewer',
  standalone: true,
  imports: [
    CommonModule,
    RapidButtonsComponent,
    RapidInputTextComponent,
    RapidInputTextareaComponent,
    RapidCardComponent,
    RapidBadgeComponent,
    RapidAvatarComponent,
    RapidAutocompleteComponent,
    RapidCheckbox,
    RapidRadioButton,
    RapidColorPicker
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
      'progressbar': 'ProgressBar',
      'autocomplete': 'AutoComplete',
      'checkbox': 'Checkbox',
      'radiobutton': 'RadioButton',
      'colorpicker': 'ColorPicker'
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
      'ProgressBar': 'Visual progress indicators for showing completion status.',
      'AutoComplete': 'Searchable dropdown with suggestions and async data filtering.',
      'Checkbox': 'Form input component for boolean values with various styling options.',
      'RadioButton': 'Single-selection form input component with multiple options and group support.',
      'ColorPicker': 'Advanced color selection component with multiple formats and preset colors.'
    };
    
    this.componentDescription = descriptions[this.componentName] || 'Component description coming soon.';
  }
}