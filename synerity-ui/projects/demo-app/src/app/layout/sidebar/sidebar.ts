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

  // Track which categories are expanded/collapsed
  expandedCategories: { [key: string]: boolean } = {
    'Foundation': true,
    'Form Components': true,
    'Button Components': false,
    'Data Components': false,
    'Panel Components': false,
    'Overlay Components': false,
    'File Components': false,
    'Menu Components': false,
    'Chart Components': false,
    'Messages Components': false,
    'Media Components': false,
    'Misc Components': false,
    'Getting Started': false
  };

  constructor(public router: Router) {}

  toggleCategory(categoryTitle: string) {
    this.expandedCategories[categoryTitle] = !this.expandedCategories[categoryTitle];
  }

  isCategoryExpanded(categoryTitle: string): boolean {
    return this.expandedCategories[categoryTitle] || false;
  }

  getCategoryId(categoryTitle: string): string {
    return 'category-' + categoryTitle.toLowerCase().replace(/\s+/g, '-');
  }

  navigationGroups = [
    {
      title: 'Foundation',
      items: [
        { name: 'Button', route: '/components/button', icon: '🔘', comingSoon: false },
        { name: 'InputText', route: '/components/inputtext', icon: '📝', comingSoon: false },
        { name: 'Card', route: '/components/card', icon: '🃏', comingSoon: false }
      ]
    },
    {
      title: 'Form Components',
      items: [
        { name: 'AutoComplete', route: '/components/autocomplete', icon: '🔍', comingSoon: false },
        { name: 'Checkbox', route: '/components/checkbox', icon: '☑️', comingSoon: false },
        { name: 'ColorPicker', route: '/components/colorpicker', icon: '🎨', comingSoon: false },
        { name: 'DatePicker', route: '/components/datepicker', icon: '📅', comingSoon: false },
        { name: 'Editor', route: '/components/editor', icon: '✏️', comingSoon: false },
        { name: 'InputNumber', route: '/components/inputnumber', icon: '🔢', comingSoon: false },
        { name: 'MultiSelect', route: '/components/multiselect', icon: '📝', comingSoon: false },
        { name: 'Password', route: '/components/password', icon: '🔒', comingSoon: false },
        { name: 'RadioButton', route: '/components/radiobutton', icon: '🔘', comingSoon: false },
        { name: 'Rating', route: '/components/rating', icon: '⭐', comingSoon: false },
        { name: 'Select', route: '/components/select', icon: '📋', comingSoon: false },
        { name: 'Slider', route: '/components/slider', icon: '🎚️', comingSoon: false },
        { name: 'Textarea', route: '/components/textarea', icon: '📄', comingSoon: false },
        { name: 'ToggleSwitch', route: '/components/toggleswitch', icon: '🔄', comingSoon: false },
        { name: 'CascadeSelect', route: '/components/cascadeselect', icon: '🌊', comingSoon: false },
        { name: 'FloatLabel', route: '/components/floatlabel', icon: '🏷️', comingSoon: false },
        { name: 'InputMask', route: '/components/inputmask', icon: '🎭', comingSoon: false },
        { name: 'ListBox', route: '/components/listbox', icon: '📋', comingSoon: false },
        { name: 'SelectButton', route: '/components/selectbutton', icon: '🔘', comingSoon: false },
        { name: 'ToggleButton', route: '/components/togglebutton', icon: '🔄', comingSoon: false },
        { name: 'IconField', route: '/components/iconfield', icon: '🔍', comingSoon: false },
        { name: 'InputGroup', route: '/components/inputgroup', icon: '📦', comingSoon: false },
        { name: 'KeyFilter', route: '/components/keyfilter', icon: '🔑', comingSoon: false },
        { name: 'Knob', route: '/components/knob', icon: '🎛️', comingSoon: false },
        { name: 'TreeSelect', route: '/components/treeselect', icon: '🌳', comingSoon: false },
        { name: 'InputOTP', route: '/components/inputotp', icon: '🔢', comingSoon: false },
        { name: 'IftaLabel', route: '/components/iftalabel', icon: '🏷️', comingSoon: false },
        { name: 'IftLabel', route: '/components/iftlabel', icon: '🏷️', comingSoon: false }
      ]
    },
    {
      title: 'Button Components',
      items: [
        { name: 'SpeedDial', route: '/components/speeddial', icon: '⚡', comingSoon: false },
        { name: 'SplitButton', route: '/components/splitbutton', icon: '🔀', comingSoon: false }
      ]
    },
    {
      title: 'Data Components',
      items: [
        { name: 'DataView', route: '/components/dataview', icon: '📊', comingSoon: false },
        { name: 'OrderList', route: '/components/orderlist', icon: '📋', comingSoon: false },
        { name: 'OrgChart', route: '/components/orgchart', icon: '🏢', comingSoon: false },
        { name: 'Paginator', route: '/components/paginator', icon: '📄', comingSoon: false },
        { name: 'PickList', route: '/components/picklist', icon: '📝', comingSoon: false },
        { name: 'Table', route: '/components/table', icon: '📊', comingSoon: false },
        { name: 'Timeline', route: '/components/timeline', icon: '⏰', comingSoon: false },
        { name: 'Tree', route: '/components/tree', icon: '🌳', comingSoon: false },
        { name: 'TreeTable', route: '/components/treetable', icon: '🌳', comingSoon: false },
        { name: 'VirtualScroller', route: '/components/virtualscroller', icon: '📜', comingSoon: false }
      ]
    },
    {
      title: 'Panel Components',
      items: [
        { name: 'Accordion', route: '/components/accordion', icon: '📁', comingSoon: false },
        { name: 'Divider', route: '/components/divider', icon: '➖', comingSoon: false },
        { name: 'Fieldset', route: '/components/fieldset', icon: '📦', comingSoon: false },
        { name: 'Panel', route: '/components/panel', icon: '🪟', comingSoon: false },
        { name: 'ScrollPanel', route: '/components/scrollpanel', icon: '📜', comingSoon: false },
        { name: 'Splitter', route: '/components/splitter', icon: '✂️', comingSoon: false },
        { name: 'Stepper', route: '/components/stepper', icon: '👣', comingSoon: false },
        { name: 'Tabs', route: '/components/tabs', icon: '📑', comingSoon: false },
        { name: 'Toolbar', route: '/components/toolbar', icon: '🔧', comingSoon: false }
      ]
    },
    {
      title: 'Overlay Components',
      items: [
        { name: 'ConfirmDialog', route: '/components/confirmdialog', icon: '❓', comingSoon: false },
        { name: 'ConfirmPopup', route: '/components/confirmpopup', icon: '💬', comingSoon: false },
        { name: 'Dialog', route: '/components/dialog', icon: '💬', comingSoon: false },
        { name: 'Drawer', route: '/components/drawer', icon: '📱', comingSoon: false },
        { name: 'DynamicDialog', route: '/components/dynamicdialog', icon: '⚡', comingSoon: false },
        { name: 'Popover', route: '/components/popover', icon: '💭', comingSoon: false },
        { name: 'Tooltip', route: '/components/tooltip', icon: '💡', comingSoon: false }
      ]
    },
    {
      title: 'File Components',
      items: [
        { name: 'Upload', route: '/components/upload', icon: '📤', comingSoon: false }
      ]
    },
    {
      title: 'Menu Components',
      items: [
        { name: 'Breadcrumb', route: '/components/breadcrumb', icon: '🍞', comingSoon: false },
        { name: 'ContextMenu', route: '/components/contextmenu', icon: '📋', comingSoon: false },
        { name: 'Dock', route: '/components/dock', icon: '⚓', comingSoon: false },
        { name: 'Menu', route: '/components/menu', icon: '📋', comingSoon: false },
        { name: 'Menubar', route: '/components/menubar', icon: '📊', comingSoon: false },
        { name: 'MegaMenu', route: '/components/megamenu', icon: '📋', comingSoon: false },
        { name: 'PanelMenu', route: '/components/panelmenu', icon: '📁', comingSoon: false },
        { name: 'TieredMenu', route: '/components/tieredmenu', icon: '📊', comingSoon: false }
      ]
    },
    {
      title: 'Chart Components',
      items: [
        { name: 'Chart', route: '/components/chart', icon: '📈', comingSoon: false }
      ]
    },
    {
      title: 'Messages Components',
      items: [
        { name: 'Message', route: '/components/message', icon: '💬', comingSoon: false },
        { name: 'Toast', route: '/components/toast', icon: '🍞', comingSoon: false }
      ]
    },
    {
      title: 'Media Components',
      items: [
        { name: 'Carousel', route: '/components/carousel', icon: '🎠', comingSoon: false },
        { name: 'Galleria', route: '/components/galleria', icon: '🖼️', comingSoon: false },
        { name: 'Image', route: '/components/image', icon: '🖼️', comingSoon: false },
        { name: 'ImageCompare', route: '/components/imagecompare', icon: '🔄', comingSoon: false }
      ]
    },
    {
      title: 'Misc Components',
      items: [
        { name: 'AnimateOnScroll', route: '/components/animateonscroll', icon: '✨', comingSoon: false },
        { name: 'AutoFocus', route: '/components/autofocus', icon: '🎯', comingSoon: false },
        { name: 'Avatar', route: '/components/avatar', icon: '👤', comingSoon: false },
        { name: 'Badge', route: '/components/badge', icon: '🏷️', comingSoon: false },
        { name: 'BlockUI', route: '/components/blockui', icon: '🚫', comingSoon: false },
        { name: 'Chip', route: '/components/chip', icon: '🏷️', comingSoon: false },
        { name: 'FocusTrap', route: '/components/focustrap', icon: '🎯', comingSoon: false },
        { name: 'Fluid', route: '/components/fluid', icon: '💧', comingSoon: false },
        { name: 'Inplace', route: '/components/inplace', icon: '✏️', comingSoon: false },
        { name: 'MeterGroup', route: '/components/metergroup', icon: '📊', comingSoon: false },
        { name: 'ProgressBar', route: '/components/progressbar', icon: '📊', comingSoon: false },
        { name: 'ProgressSpinner', route: '/components/progressspinner', icon: '⏳', comingSoon: false },
        { name: 'Ripple', route: '/components/ripple', icon: '🌊', comingSoon: false },
        { name: 'ScrollTop', route: '/components/scrolltop', icon: '⬆️', comingSoon: false },
        { name: 'Skeleton', route: '/components/skeleton', icon: '💀', comingSoon: false },
        { name: 'StyleClass', route: '/components/styleclass', icon: '🎨', comingSoon: false },
        { name: 'Tag', route: '/components/tag', icon: '🏷️', comingSoon: false },
        { name: 'Terminal', route: '/components/terminal', icon: '💻', comingSoon: false }
      ]
    }
  ];
}
