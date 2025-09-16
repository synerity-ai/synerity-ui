import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { Tooltip } from 'ui-lib';

@Component({
  selector: 'app-tooltip',
  imports: [CommonModule, FormsModule, Tabs, Tooltip],
  templateUrl: './tooltip.html',
  styleUrl: './tooltip.scss'
})
export class TooltipPage {
  activeTab = 'demo';

  // Code visibility toggles
  showBasicTooltipCode = false;
  showPositionedTooltipCode = false;
  showCustomStylingCode = false;

  // Tooltip configurations
  basicTooltipConfig = {
    tooltip: 'This is a basic tooltip',
    position: 'top' as const,
    showDelay: 0,
    hideDelay: 0,
    disabled: false
  };

  topTooltipConfig = {
    tooltip: 'Tooltip on top',
    position: 'top' as const,
    showDelay: 0,
    hideDelay: 0,
    disabled: false
  };

  bottomTooltipConfig = {
    tooltip: 'Tooltip on bottom',
    position: 'bottom' as const,
    showDelay: 0,
    hideDelay: 0,
    disabled: false
  };

  leftTooltipConfig = {
    tooltip: 'Tooltip on left',
    position: 'left' as const,
    showDelay: 0,
    hideDelay: 0,
    disabled: false
  };

  rightTooltipConfig = {
    tooltip: 'Tooltip on right',
    position: 'right' as const,
    showDelay: 0,
    hideDelay: 0,
    disabled: false
  };

  delayedTooltipConfig = {
    tooltip: 'This tooltip has a delay',
    position: 'top' as const,
    showDelay: 500,
    hideDelay: 200,
    disabled: false
  };

  longTooltipConfig = {
    tooltip: 'This is a longer tooltip that demonstrates how the component handles multi-line text content and provides helpful information to users.',
    position: 'bottom' as const,
    showDelay: 0,
    hideDelay: 0,
    disabled: false
  };

  disabledTooltipConfig = {
    tooltip: 'This tooltip is disabled',
    position: 'top' as const,
    showDelay: 0,
    hideDelay: 0,
    disabled: true
  };

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(section: string): void {
    switch (section) {
      case 'basicTooltip':
        this.showBasicTooltipCode = !this.showBasicTooltipCode;
        break;
      case 'positionedTooltip':
        this.showPositionedTooltipCode = !this.showPositionedTooltipCode;
        break;
      case 'customStyling':
        this.showCustomStylingCode = !this.showCustomStylingCode;
        break;
    }
  }

  // Tooltip events
  onTooltipShow(): void {
    console.log('Tooltip shown');
  }

  onTooltipHide(): void {
    console.log('Tooltip hidden');
  }

  // Demo actions
  onButtonClick(): void {
    console.log('Button clicked');
    alert('Button clicked!');
  }

  onInputFocus(): void {
    console.log('Input focused');
  }

  onInputBlur(): void {
    console.log('Input blurred');
  }

  onLinkClick(): void {
    console.log('Link clicked');
    alert('Link clicked!');
  }

  onIconClick(): void {
    console.log('Icon clicked');
    alert('Icon clicked!');
  }
}