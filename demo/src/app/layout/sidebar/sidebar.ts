import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  @Input() isCollapsed = false;

  menuItems = [
    { 
      label: 'Home', 
      icon: '🏠', 
      isExpanded: false,
      children: [
        { label: 'Dashboard', route: '/home' }
      ]
    },
    { 
      label: 'Foundation', 
      icon: '🏗️', 
      isExpanded: false,
      children: [
        { label: 'Button', route: '/components/button' },
        { label: 'Input Text', route: '/components/input-text' },
        { label: 'Card', route: '/components/card' }
      ]
    },
    { 
      label: 'Form Components', 
      icon: '📝', 
      isExpanded: false,
      children: [
        { label: 'Checkbox', route: '/components/checkbox' },
        { label: 'Radio Button', route: '/components/radio-button' },
        { label: 'Select', route: '/components/select' },
        { label: 'Select Button', route: '/components/select-button' },
        { label: 'Toggle Switch', route: '/components/toggle-switch' },
        { label: 'Slider', route: '/components/slider' },
        { label: 'Knob', route: '/components/knob' },
        { label: 'Rating', route: '/components/rating' },
        { label: 'Date Picker', route: '/components/date-picker' },
        { label: 'Color Picker', route: '/components/color-picker' },
        { label: 'Editor', route: '/components/editor' }
      ]
    },
    { 
      label: 'Layout', 
      icon: '📐', 
      isExpanded: false,
      children: [
        { label: 'Panel', route: '/components/panel' },
        { label: 'Tabs', route: '/components/tabs' },
        { label: 'Accordion', route: '/components/accordion' }
      ]
    },
    { 
      label: 'Data Display', 
      icon: '📊', 
      isExpanded: false,
      children: [
        { label: 'Table', route: '/components/table' },
        { label: 'List', route: '/components/list' }
      ]
    },
    { 
      label: 'Overlay', 
      icon: '🎭', 
      isExpanded: false,
      children: [
        { label: 'Dialog', route: '/components/dialog' },
        { label: 'Tooltip', route: '/components/tooltip' }
      ]
    }
  ];

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleCategory(category: any) {
    category.isExpanded = !category.isExpanded;
  }
}
