import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToggleSwitch } from '@synerity/ui';
import { ComponentExample } from '../../models/component.model';

interface ToggleSwitchVariant {
  checked: boolean;
  size: 'small' | 'medium' | 'large';
  theme: 'light' | 'dark';
  color: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'purple' | 'pink';
  disabled: boolean;
  readonly: boolean;
  loading: boolean;
  showText: boolean;
  onText: string;
  offText: string;
  label: string;
  labelPosition: 'left' | 'right';
  compact: boolean;
  spacious: boolean;
  animated: boolean;
  bounce: boolean;
  glow: boolean;
  description: string;
}

@Component({
  selector: 'app-toggle-switch-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, ToggleSwitch],
  templateUrl: './toggle-switch-demo.html',
  styleUrl: './toggle-switch-demo.scss'
})
export class ToggleSwitchDemoComponent {
  @Input() currentExample!: ComponentExample;

  getCurrentExample(): ComponentExample {
    return this.currentExample;
  }

  // Basic toggle switches
  basicToggles: ToggleSwitchVariant[] = [
    {
      checked: false,
      size: 'medium',
      theme: 'light',
      color: 'default',
      disabled: false,
      readonly: false,
      loading: false,
      showText: false,
      onText: 'On',
      offText: 'Off',
      label: 'Basic Toggle',
      labelPosition: 'right',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Simple toggle switch component'
    },
    {
      checked: true,
      size: 'medium',
      theme: 'light',
      color: 'default',
      disabled: false,
      readonly: false,
      loading: false,
      showText: true,
      onText: 'Enabled',
      offText: 'Disabled',
      label: 'Toggle with Text',
      labelPosition: 'right',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Toggle switch with text labels'
    }
  ];

  // Size variations
  sizeVariants: ToggleSwitchVariant[] = [
    {
      checked: true,
      size: 'small',
      theme: 'light',
      color: 'default',
      disabled: false,
      readonly: false,
      loading: false,
      showText: true,
      onText: 'On',
      offText: 'Off',
      label: 'Small Size',
      labelPosition: 'right',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Compact toggle switch'
    },
    {
      checked: true,
      size: 'medium',
      theme: 'light',
      color: 'default',
      disabled: false,
      readonly: false,
      loading: false,
      showText: true,
      onText: 'On',
      offText: 'Off',
      label: 'Medium Size',
      labelPosition: 'right',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Standard toggle switch'
    },
    {
      checked: true,
      size: 'large',
      theme: 'light',
      color: 'default',
      disabled: false,
      readonly: false,
      loading: false,
      showText: true,
      onText: 'On',
      offText: 'Off',
      label: 'Large Size',
      labelPosition: 'right',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Larger toggle switch'
    }
  ];

  // Color themes
  colorThemes: ToggleSwitchVariant[] = [
    {
      checked: true,
      size: 'medium',
      theme: 'light',
      color: 'default',
      disabled: false,
      readonly: false,
      loading: false,
      showText: true,
      onText: 'On',
      offText: 'Off',
      label: 'Default Color',
      labelPosition: 'right',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Standard green colored toggle'
    },
    {
      checked: true,
      size: 'medium',
      theme: 'light',
      color: 'primary',
      disabled: false,
      readonly: false,
      loading: false,
      showText: true,
      onText: 'On',
      offText: 'Off',
      label: 'Primary Color',
      labelPosition: 'right',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Blue colored toggle'
    },
    {
      checked: true,
      size: 'medium',
      theme: 'light',
      color: 'success',
      disabled: false,
      readonly: false,
      loading: false,
      showText: true,
      onText: 'On',
      offText: 'Off',
      label: 'Success Color',
      labelPosition: 'right',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Green colored toggle'
    },
    {
      checked: true,
      size: 'medium',
      theme: 'light',
      color: 'warning',
      disabled: false,
      readonly: false,
      loading: false,
      showText: true,
      onText: 'On',
      offText: 'Off',
      label: 'Warning Color',
      labelPosition: 'right',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Orange colored toggle'
    },
    {
      checked: true,
      size: 'medium',
      theme: 'light',
      color: 'danger',
      disabled: false,
      readonly: false,
      loading: false,
      showText: true,
      onText: 'On',
      offText: 'Off',
      label: 'Danger Color',
      labelPosition: 'right',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Red colored toggle'
    },
    {
      checked: true,
      size: 'medium',
      theme: 'light',
      color: 'purple',
      disabled: false,
      readonly: false,
      loading: false,
      showText: true,
      onText: 'On',
      offText: 'Off',
      label: 'Purple Color',
      labelPosition: 'right',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Purple colored toggle'
    },
    {
      checked: true,
      size: 'medium',
      theme: 'light',
      color: 'pink',
      disabled: false,
      readonly: false,
      loading: false,
      showText: true,
      onText: 'On',
      offText: 'Off',
      label: 'Pink Color',
      labelPosition: 'right',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Pink colored toggle'
    }
  ];

  // Layout options
  layoutOptions: ToggleSwitchVariant[] = [
    {
      checked: true,
      size: 'medium',
      theme: 'light',
      color: 'default',
      disabled: false,
      readonly: false,
      loading: false,
      showText: true,
      onText: 'Enabled',
      offText: 'Disabled',
      label: 'With Text Labels',
      labelPosition: 'right',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Shows custom text labels'
    },
    {
      checked: true,
      size: 'medium',
      theme: 'light',
      color: 'default',
      disabled: false,
      readonly: false,
      loading: false,
      showText: false,
      onText: 'On',
      offText: 'Off',
      label: 'Left Label Position',
      labelPosition: 'left',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Label positioned on the left'
    },
    {
      checked: true,
      size: 'medium',
      theme: 'light',
      color: 'default',
      disabled: false,
      readonly: false,
      loading: false,
      showText: false,
      onText: 'On',
      offText: 'Off',
      label: 'Compact Spacing',
      labelPosition: 'right',
      compact: true,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Reduced spacing between elements'
    },
    {
      checked: true,
      size: 'medium',
      theme: 'light',
      color: 'default',
      disabled: false,
      readonly: false,
      loading: false,
      showText: false,
      onText: 'On',
      offText: 'Off',
      label: 'Spacious Spacing',
      labelPosition: 'right',
      compact: false,
      spacious: true,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Increased spacing between elements'
    }
  ];

  // State examples
  stateExamples: ToggleSwitchVariant[] = [
    {
      checked: true,
      size: 'medium',
      theme: 'light',
      color: 'default',
      disabled: false,
      readonly: false,
      loading: false,
      showText: true,
      onText: 'On',
      offText: 'Off',
      label: 'Interactive Toggle',
      labelPosition: 'right',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Standard interactive toggle'
    },
    {
      checked: true,
      size: 'medium',
      theme: 'light',
      color: 'default',
      disabled: false,
      readonly: true,
      loading: false,
      showText: true,
      onText: 'On',
      offText: 'Off',
      label: 'Read-only Toggle',
      labelPosition: 'right',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Toggle cannot be changed'
    },
    {
      checked: false,
      size: 'medium',
      theme: 'light',
      color: 'default',
      disabled: true,
      readonly: false,
      loading: false,
      showText: true,
      onText: 'On',
      offText: 'Off',
      label: 'Disabled Toggle',
      labelPosition: 'right',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Toggle is disabled and cannot be interacted with'
    },
    {
      checked: true,
      size: 'medium',
      theme: 'light',
      color: 'default',
      disabled: false,
      readonly: false,
      loading: true,
      showText: true,
      onText: 'On',
      offText: 'Off',
      label: 'Loading Toggle',
      labelPosition: 'right',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Toggle is in loading state'
    }
  ];

  // Animation effects
  animationEffects: ToggleSwitchVariant[] = [
    {
      checked: true,
      size: 'medium',
      theme: 'light',
      color: 'default',
      disabled: false,
      readonly: false,
      loading: false,
      showText: true,
      onText: 'On',
      offText: 'Off',
      label: 'Animated Toggle',
      labelPosition: 'right',
      compact: false,
      spacious: false,
      animated: true,
      bounce: false,
      glow: false,
      description: 'Smooth animations on toggle'
    },
    {
      checked: true,
      size: 'medium',
      theme: 'light',
      color: 'default',
      disabled: false,
      readonly: false,
      loading: false,
      showText: true,
      onText: 'On',
      offText: 'Off',
      label: 'Bounce Effect',
      labelPosition: 'right',
      compact: false,
      spacious: false,
      animated: false,
      bounce: true,
      glow: false,
      description: 'Bounce animation on toggle'
    },
    {
      checked: true,
      size: 'medium',
      theme: 'light',
      color: 'default',
      disabled: false,
      readonly: false,
      loading: false,
      showText: true,
      onText: 'On',
      offText: 'Off',
      label: 'Glow Effect',
      labelPosition: 'right',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: true,
      description: 'Glowing effect when active'
    },
    {
      checked: true,
      size: 'medium',
      theme: 'light',
      color: 'primary',
      disabled: false,
      readonly: false,
      loading: false,
      showText: true,
      onText: 'On',
      offText: 'Off',
      label: 'Animated + Glow',
      labelPosition: 'right',
      compact: false,
      spacious: false,
      animated: true,
      bounce: false,
      glow: true,
      description: 'Combined animation and glow effects'
    }
  ];

  // Real-world examples
  notificationsToggle: ToggleSwitchVariant = {
    checked: true,
    size: 'medium',
    theme: 'light',
    color: 'primary',
    disabled: false,
    readonly: false,
    loading: false,
    showText: true,
    onText: 'Enabled',
    offText: 'Disabled',
    label: 'Push Notifications',
    labelPosition: 'left',
    compact: false,
    spacious: false,
    animated: true,
    bounce: false,
    glow: false,
    description: 'Enable or disable push notifications'
  };

  darkModeToggle: ToggleSwitchVariant = {
    checked: false,
    size: 'medium',
    theme: 'light',
    color: 'default',
    disabled: false,
    readonly: false,
    loading: false,
    showText: true,
    onText: 'Dark',
    offText: 'Light',
    label: 'Dark Mode',
    labelPosition: 'left',
    compact: false,
    spacious: false,
    animated: true,
    bounce: false,
    glow: false,
    description: 'Toggle between light and dark themes'
  };

  autoSaveToggle: ToggleSwitchVariant = {
    checked: true,
    size: 'small',
    theme: 'light',
    color: 'success',
    disabled: false,
    readonly: false,
    loading: false,
    showText: true,
    onText: 'Auto',
    offText: 'Manual',
    label: 'Auto Save',
    labelPosition: 'left',
    compact: true,
    spacious: false,
    animated: false,
    bounce: false,
    glow: false,
    description: 'Automatically save changes'
  };

  wifiToggle: ToggleSwitchVariant = {
    checked: true,
    size: 'large',
    theme: 'light',
    color: 'warning',
    disabled: false,
    readonly: false,
    loading: false,
    showText: true,
    onText: 'Connected',
    offText: 'Disconnected',
    label: 'WiFi Connection',
    labelPosition: 'left',
    compact: false,
    spacious: true,
    animated: true,
    bounce: true,
    glow: true,
    description: 'WiFi connection status'
  };

  onToggleChange(checked: boolean, toggle: ToggleSwitchVariant): void {
    toggle.checked = checked;
    console.log(`${toggle.label} changed to:`, checked);
  }

  getToggleStatus(checked: boolean): string {
    return checked ? 'Active' : 'Inactive';
  }

  getToggleStatusColor(checked: boolean): string {
    return checked ? 'text-green-600' : 'text-gray-500';
  }

  getToggleIcon(checked: boolean): string {
    return checked ? '✓' : '✗';
  }
}