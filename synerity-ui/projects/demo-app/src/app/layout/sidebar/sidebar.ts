import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  @Input() isCollapsed = false;

  constructor(public router: Router) {}

  navigationGroups = [
    {
      title: 'Foundation',
      items: [
        { name: 'Button', route: '/components/button', icon: '🔘', comingSoon: false },
        { name: 'Input Text', route: '/components/input', icon: '📝', comingSoon: false },
        { name: 'Card', route: '/components/card', icon: '🃏', comingSoon: false }
      ]
    },
    {
      title: 'Form Components',
      items: [
        { name: 'All Forms', route: '/components/forms', icon: '📋', comingSoon: false },
        { name: 'AutoComplete', route: '/components/autocomplete', icon: '🔍', comingSoon: true },
        { name: 'Checkbox', route: '/components/checkbox', icon: '☑️', comingSoon: true },
        { name: 'ColorPicker', route: '/components/colorpicker', icon: '🎨', comingSoon: true },
        { name: 'DatePicker', route: '/components/datepicker', icon: '📅', comingSoon: true },
        { name: 'Editor', route: '/components/editor', icon: '✏️', comingSoon: true },
        { name: 'InputNumber', route: '/components/inputnumber', icon: '🔢', comingSoon: true },
        { name: 'MultiSelect', route: '/components/multiselect', icon: '📝', comingSoon: true },
        { name: 'Password', route: '/components/password', icon: '🔒', comingSoon: true },
        { name: 'RadioButton', route: '/components/radiobutton', icon: '🔘', comingSoon: true },
        { name: 'Rating', route: '/components/rating', icon: '⭐', comingSoon: true },
        { name: 'Select', route: '/components/select', icon: '📋', comingSoon: true },
        { name: 'Slider', route: '/components/slider', icon: '🎚️', comingSoon: true },
        { name: 'Textarea', route: '/components/textarea', icon: '📄', comingSoon: true },
        { name: 'ToggleSwitch', route: '/components/toggleswitch', icon: '🔄', comingSoon: true }
      ]
    },
    {
      title: 'Button Components',
      items: [
        { name: 'SpeedDial', route: '/components/speeddial', icon: '⚡', comingSoon: true },
        { name: 'SplitButton', route: '/components/splitbutton', icon: '🔀', comingSoon: true }
      ]
    },
    {
      title: 'Data Components',
      items: [
        { name: 'DataView', route: '/components/dataview', icon: '📊', comingSoon: true },
        { name: 'OrderList', route: '/components/orderlist', icon: '📋', comingSoon: true },
        { name: 'OrgChart', route: '/components/orgchart', icon: '🏢', comingSoon: true },
        { name: 'Paginator', route: '/components/paginator', icon: '📄', comingSoon: true },
        { name: 'PickList', route: '/components/picklist', icon: '📝', comingSoon: true },
        { name: 'Table', route: '/components/table', icon: '📊', comingSoon: true },
        { name: 'Timeline', route: '/components/timeline', icon: '⏰', comingSoon: true },
        { name: 'Tree', route: '/components/tree', icon: '🌳', comingSoon: true },
        { name: 'TreeTable', route: '/components/treetable', icon: '🌳', comingSoon: true },
        { name: 'VirtualScroller', route: '/components/virtualscroller', icon: '📜', comingSoon: true }
      ]
    },
    {
      title: 'Panel Components',
      items: [
        { name: 'Accordion', route: '/components/accordion', icon: '📁', comingSoon: true },
        { name: 'Divider', route: '/components/divider', icon: '➖', comingSoon: true },
        { name: 'Fieldset', route: '/components/fieldset', icon: '📦', comingSoon: true },
        { name: 'Panel', route: '/components/panel', icon: '🪟', comingSoon: true },
        { name: 'ScrollPanel', route: '/components/scrollpanel', icon: '📜', comingSoon: true },
        { name: 'Splitter', route: '/components/splitter', icon: '✂️', comingSoon: true },
        { name: 'Stepper', route: '/components/stepper', icon: '👣', comingSoon: true },
        { name: 'Tabs', route: '/components/tabs', icon: '📑', comingSoon: true },
        { name: 'Toolbar', route: '/components/toolbar', icon: '🔧', comingSoon: true }
      ]
    },
    {
      title: 'Overlay Components',
      items: [
        { name: 'ConfirmDialog', route: '/components/confirmdialog', icon: '❓', comingSoon: true },
        { name: 'ConfirmPopup', route: '/components/confirmpopup', icon: '💬', comingSoon: true },
        { name: 'Dialog', route: '/components/dialog', icon: '💬', comingSoon: true },
        { name: 'Drawer', route: '/components/drawer', icon: '📱', comingSoon: true },
        { name: 'DynamicDialog', route: '/components/dynamicdialog', icon: '⚡', comingSoon: true },
        { name: 'Popover', route: '/components/popover', icon: '💭', comingSoon: true },
        { name: 'Tooltip', route: '/components/tooltip', icon: '💡', comingSoon: true }
      ]
    },
    {
      title: 'File Components',
      items: [
        { name: 'Upload', route: '/components/upload', icon: '📤', comingSoon: true }
      ]
    },
    {
      title: 'Menu Components',
      items: [
        { name: 'Breadcrumb', route: '/components/breadcrumb', icon: '🍞', comingSoon: true },
        { name: 'ContextMenu', route: '/components/contextmenu', icon: '📋', comingSoon: true },
        { name: 'Dock', route: '/components/dock', icon: '⚓', comingSoon: true },
        { name: 'Menu', route: '/components/menu', icon: '📋', comingSoon: true },
        { name: 'Menubar', route: '/components/menubar', icon: '📊', comingSoon: true },
        { name: 'MegaMenu', route: '/components/megamenu', icon: '📋', comingSoon: true },
        { name: 'PanelMenu', route: '/components/panelmenu', icon: '📁', comingSoon: true },
        { name: 'TieredMenu', route: '/components/tieredmenu', icon: '📊', comingSoon: true }
      ]
    },
    {
      title: 'Chart Components',
      items: [
        { name: 'Chart', route: '/components/chart', icon: '📈', comingSoon: true }
      ]
    },
    {
      title: 'Messages Components',
      items: [
        { name: 'Message', route: '/components/message', icon: '💬', comingSoon: true },
        { name: 'Toast', route: '/components/toast', icon: '🍞', comingSoon: true }
      ]
    },
    {
      title: 'Media Components',
      items: [
        { name: 'Carousel', route: '/components/carousel', icon: '🎠', comingSoon: true },
        { name: 'Galleria', route: '/components/galleria', icon: '🖼️', comingSoon: true },
        { name: 'Image', route: '/components/image', icon: '🖼️', comingSoon: true },
        { name: 'ImageCompare', route: '/components/imagecompare', icon: '🔄', comingSoon: true }
      ]
    },
    {
      title: 'Misc Components',
      items: [
        { name: 'AnimateOnScroll', route: '/components/animateonscroll', icon: '✨', comingSoon: true },
        { name: 'AutoFocus', route: '/components/autofocus', icon: '🎯', comingSoon: true },
        { name: 'Avatar', route: '/components/avatar', icon: '👤', comingSoon: true },
        { name: 'Badge', route: '/components/badge', icon: '🏷️', comingSoon: true },
        { name: 'BlockUI', route: '/components/blockui', icon: '🚫', comingSoon: true },
        { name: 'Chip', route: '/components/chip', icon: '🏷️', comingSoon: true },
        { name: 'FocusTrap', route: '/components/focustrap', icon: '🎯', comingSoon: true },
        { name: 'Fluid', route: '/components/fluid', icon: '💧', comingSoon: true },
        { name: 'Inplace', route: '/components/inplace', icon: '✏️', comingSoon: true },
        { name: 'MeterGroup', route: '/components/metergroup', icon: '📊', comingSoon: true },
        { name: 'ProgressBar', route: '/components/progressbar', icon: '📊', comingSoon: true },
        { name: 'ProgressSpinner', route: '/components/progressspinner', icon: '⏳', comingSoon: true },
        { name: 'Ripple', route: '/components/ripple', icon: '🌊', comingSoon: true },
        { name: 'ScrollTop', route: '/components/scrolltop', icon: '⬆️', comingSoon: true },
        { name: 'Skeleton', route: '/components/skeleton', icon: '💀', comingSoon: true },
        { name: 'StyleClass', route: '/components/styleclass', icon: '🎨', comingSoon: true },
        { name: 'Tag', route: '/components/tag', icon: '🏷️', comingSoon: true },
        { name: 'Terminal', route: '/components/terminal', icon: '💻', comingSoon: true }
      ]
    }
  ];
}
