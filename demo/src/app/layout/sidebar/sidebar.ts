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
      label: 'Foundation Components', 
      icon: '🏗️', 
      isExpanded: false,
      children: [
        { label: 'Accordion', route: '/components/accordion' },
        { label: 'Avatar', route: '/components/avatar' },
        { label: 'Badge', route: '/components/badge' },
        { label: 'Breadcrumb', route: '/components/breadcrumb' },
        { label: 'Button', route: '/components/button' },
        { label: 'Card', route: '/components/card' },
        { label: 'Checkbox', route: '/components/checkbox' },
        { label: 'Color Picker', route: '/components/color-picker' },
        { label: 'Date Picker', route: '/components/date-picker' },
        { label: 'Editor', route: '/components/editor' },
        { label: 'Input Text', route: '/components/input-text' },
        { label: 'Knob', route: '/components/knob' },
        { label: 'Radio Button', route: '/components/radio-button' },
        { label: 'Rating', route: '/components/rating' },
        { label: 'Select', route: '/components/select' },
        { label: 'Select Button', route: '/components/select-button' },
        { label: 'Slider', route: '/components/slider' },
        { label: 'Tabs', route: '/components/tabs' },
        { label: 'Toggle Switch', route: '/components/toggle-switch' }
      ]
    },
    { 
      label: 'Form Components', 
      icon: '📝', 
      isExpanded: false,
      children: [
        { label: 'Auto-Complete', route: '/components/auto-complete' },
        { label: 'Auto Focus', route: '/components/auto-focus' },
        { label: 'Cascade Select', route: '/components/cascade-select' },
        { label: 'Chip', route: '/components/chip' },
        { label: 'Float Label', route: '/components/float-label' },
        { label: 'Icon Field', route: '/components/icon-field' },
        { label: 'IFT Label', route: '/components/ift-label' },
        { label: 'IFTA Label', route: '/components/ifta-label' },
        { label: 'Input Group', route: '/components/input-group' },
        { label: 'Input Mask', route: '/components/input-mask' },
        { label: 'Input Number', route: '/components/input-number' },
        { label: 'Input OTP', route: '/components/input-otp' },
        { label: 'Key Filter', route: '/components/key-filter' },
        { label: 'Listbox', route: '/components/listbox' },
        { label: 'Password', route: '/components/password' },
        { label: 'Textarea', route: '/components/textarea' },
        { label: 'Toggle Button', route: '/components/toggle-button' },
        { label: 'Tree Select', route: '/components/tree-select' }
      ]
    },
    { 
      label: 'Data Components', 
      icon: '📊', 
      isExpanded: false,
      children: [
        { label: 'Data View', route: '/components/data-view' },
        { label: 'Order List', route: '/components/order-list' },
        { label: 'Paginator', route: '/components/paginator' },
        { label: 'Pick List', route: '/components/pick-list' },
        { label: 'Table', route: '/components/table' },
        { label: 'Tree', route: '/components/tree' },
        { label: 'Tree Table', route: '/components/tree-table' },
        { label: 'Virtual Scroller', route: '/components/virtual-scroller' }
      ]
    },
    { 
      label: 'Layout Components', 
      icon: '📐', 
      isExpanded: false,
      children: [
        { label: 'Divider', route: '/components/divider' },
        { label: 'Fieldset', route: '/components/fieldset' },
        { label: 'Fluid', route: '/components/fluid' },
        { label: 'Panel', route: '/components/panel' },
        { label: 'Splitter', route: '/components/splitter' },
        { label: 'Stepper', route: '/components/stepper' },
        { label: 'Timeline', route: '/components/timeline' },
        { label: 'Toolbar', route: '/components/toolbar' }
      ]
    },
    { 
      label: 'Navigation Components', 
      icon: '🧭', 
      isExpanded: false,
      children: [
        { label: 'Context Menu', route: '/components/context-menu' },
        { label: 'Dock', route: '/components/dock' },
        { label: 'Menu', route: '/components/menu' },
        { label: 'Menubar', route: '/components/menubar' },
        { label: 'Mega Menu', route: '/components/mega-menu' },
        { label: 'Panel Menu', route: '/components/panel-menu' },
        { label: 'Tiered Menu', route: '/components/tiered-menu' }
      ]
    },
    { 
      label: 'Media Components', 
      icon: '🎬', 
      isExpanded: false,
      children: [
        { label: 'Carousel', route: '/components/carousel' },
        { label: 'Galleria', route: '/components/galleria' },
        { label: 'Image', route: '/components/image' },
        { label: 'Image Compare', route: '/components/image-compare' }
      ]
    },
    { 
      label: 'File Components', 
      icon: '📁', 
      isExpanded: false,
      children: [
        { label: 'File Upload Advanced', route: '/components/file-upload-advanced' },
        { label: 'Upload', route: '/components/upload' }
      ]
    },
    { 
      label: 'Messages Components', 
      icon: '💬', 
      isExpanded: false,
      children: [
        { label: 'Confirm Dialog', route: '/components/confirm-dialog' },
        { label: 'Confirm Popup', route: '/components/confirm-popup' },
        { label: 'Dialog', route: '/components/dialog' },
        { label: 'Message', route: '/components/message' },
        { label: 'Toast', route: '/components/toast' }
      ]
    },
    { 
      label: 'Overlay Components', 
      icon: '🎭', 
      isExpanded: false,
      children: [
        { label: 'Block UI', route: '/components/block-ui' },
        { label: 'Captcha', route: '/components/captcha' },
        { label: 'Drawer', route: '/components/drawer' },
        { label: 'Dynamic Dialog', route: '/components/dynamic-dialog' },
        { label: 'Overlay Panel', route: '/components/overlay-panel' },
        { label: 'Popover', route: '/components/popover' },
        { label: 'Tooltip', route: '/components/tooltip' }
      ]
    },
    { 
      label: 'Progress Components', 
      icon: '⏳', 
      isExpanded: false,
      children: [
        { label: 'Progress Bar', route: '/components/progress-bar' },
        { label: 'Progress Spinner', route: '/components/progress-spinner' },
        { label: 'Skeleton', route: '/components/skeleton' }
      ]
    },
    { 
      label: 'Utility Components', 
      icon: '🔧', 
      isExpanded: false,
      children: [
        { label: 'Animate On Scroll', route: '/components/animate-on-scroll' },
        { label: 'Focus Trap', route: '/components/focus-trap' },
        { label: 'Inplace', route: '/components/inplace' },
        { label: 'Meter Group', route: '/components/meter-group' },
        { label: 'Org Chart', route: '/components/org-chart' },
        { label: 'Ripple', route: '/components/ripple' },
        { label: 'Scroll Panel', route: '/components/scroll-panel' },
        { label: 'Scroll Top', route: '/components/scroll-top' },
        { label: 'Speed Dial', route: '/components/speed-dial' },
        { label: 'Split Button', route: '/components/split-button' },
        { label: 'Style Class', route: '/components/style-class' },
        { label: 'Terminal', route: '/components/terminal' }
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
