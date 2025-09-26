import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  @Input() isCollapsed = false;

  // Search functionality
  searchQuery = '';
  filteredNavigationGroups: any[] = [];

  // Track which categories are expanded/collapsed
  expandedCategories: { [key: string]: boolean } = {
    'Foundation': true, // Start with Foundation expanded
    'Form Components': false,
    'Button Components': false,
    'Data Components': false,
    'Panel Components': false,
    'Overlay Components': false,
    'File Components': false,
    'Menu Components': false,
    'Messages Components': false,
    'Media Components': false,
    'Misc Components': false,
    'Getting Started': false
  };

  constructor(public router: Router) {
    // Initialize filtered navigation groups with all groups
    this.filteredNavigationGroups = this.navigationGroups;
  }

  toggleCategory(categoryTitle: string) {
    this.expandedCategories[categoryTitle] = !this.expandedCategories[categoryTitle];
  }

  isCategoryExpanded(categoryTitle: string): boolean {
    return this.expandedCategories[categoryTitle] || false;
  }

  getCategoryId(categoryTitle: string): string {
    return 'category-' + categoryTitle.toLowerCase().replace(/\s+/g, '-');
  }

  // Search functionality methods
  onSearchChange(): void {
    if (!this.searchQuery.trim()) {
      this.filteredNavigationGroups = this.navigationGroups;
      return;
    }

    const query = this.searchQuery.toLowerCase().trim();
    this.filteredNavigationGroups = this.navigationGroups.map(group => {
      const filteredItems = group.items.filter((item: any) => 
        item.name.toLowerCase().includes(query) ||
        item.route.toLowerCase().includes(query)
      );
      
      return {
        ...group,
        items: filteredItems
      };
    }).filter(group => group.items.length > 0);
  }

  clearSearch(): void {
    this.searchQuery = '';
    this.filteredNavigationGroups = this.navigationGroups;
  }

  navigationGroups = [
    {
      title: 'Foundation',
      items: [
        { name: 'Button', route: '/components/button', icon: '🔘', comingSoon: false },
        { name: 'InputText', route: '/components/inputtext', icon: '📝', comingSoon: false },
        { name: 'InputTextarea', route: '/components/inputtextarea', icon: '📄', comingSoon: false },
        { name: 'Card', route: '/components/card', icon: '🃏', comingSoon: false }
      ]
    },
    {
      title: 'Form Components',
      items: [
        { name: 'AutoComplete', route: '/components/autocomplete', icon: '🔍', comingSoon: true },
        { name: 'Checkbox', route: '/components/checkbox', icon: '☑️', comingSoon: true },
        { name: 'RadioButton', route: '/components/radiobutton', icon: '🔘', comingSoon: true },
        { name: 'ColorPicker', route: '/components/colorpicker', icon: '🎨', comingSoon: true },
        { name: 'DatePicker', route: '/components/datepicker', icon: '📅', comingSoon: true },
        { name: 'Editor', route: '/components/editor', icon: '✏️', comingSoon: true },
        { name: 'InputNumber', route: '/components/inputnumber', icon: '🔢', comingSoon: true },
        { name: 'Password', route: '/components/password', icon: '🔒', comingSoon: true },
        { name: 'Rating', route: '/components/rating', icon: '⭐', comingSoon: true },
        { name: 'Select', route: '/components/select', icon: '📋', comingSoon: true },
        { name: 'Slider', route: '/components/slider', icon: '🎚️', comingSoon: true },
        { name: 'ToggleSwitch', route: '/components/toggleswitch', icon: '🔄', comingSoon: true },
        { name: 'CascadeSelect', route: '/components/cascadeselect', icon: '🌊', comingSoon: true },
        { name: 'FloatLabel', route: '/components/floatlabel', icon: '🏷️', comingSoon: true },
        { name: 'InputMask', route: '/components/inputmask', icon: '🎭', comingSoon: true },
        { name: 'ListBox', route: '/components/listbox', icon: '📋', comingSoon: true },
        { name: 'SelectButton', route: '/components/selectbutton', icon: '🔘', comingSoon: true },
        { name: 'ToggleButton', route: '/components/togglebutton', icon: '🔄', comingSoon: true },
        { name: 'IconField', route: '/components/iconfield', icon: '🔍', comingSoon: true },
        { name: 'InputGroup', route: '/components/inputgroup', icon: '📦', comingSoon: true },
        { name: 'KeyFilter', route: '/components/keyfilter', icon: '🔑', comingSoon: true },
        { name: 'Knob', route: '/components/knob', icon: '🎛️', comingSoon: true },
        { name: 'TreeSelect', route: '/components/treeselect', icon: '🌳', comingSoon: true },
        { name: 'InputOTP', route: '/components/inputotp', icon: '🔢', comingSoon: true },
        { name: 'Captcha', route: '/components/captcha', icon: '🔐', comingSoon: true },
        { name: 'IftaLabel', route: '/components/ifta-label', icon: '🏷️', comingSoon: true },
        { name: 'IftLabel', route: '/components/ift-label', icon: '🏷️', comingSoon: true }
      ]
    },
    {
      title: 'Button Components',
      items: [
        { name: 'SpeedDial', route: '/components/speed-dial', icon: '⚡', comingSoon: true },
        { name: 'SplitButton', route: '/components/split-button', icon: '🔀', comingSoon: true }
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