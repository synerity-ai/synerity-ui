import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface MegaMenuItem {
  label?: string;
  icon?: string;
  command?: () => void;
  disabled?: boolean;
  separator?: boolean;
  items?: MegaMenuItem[];
  columns?: MegaMenuItem[][];
}

@Component({
  selector: 'app-su-mega-menu-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './su-mega-menu-demo.html',
  styleUrl: './su-mega-menu-demo.scss'
})
export class SuMegaMenuDemo {
  // Sample mega menu items
  basicMegaMenuItems: MegaMenuItem[] = [
    {
      label: 'Products',
      columns: [
        [
          { label: 'Software', icon: '💻', command: () => this.showMessage('Software products') },
          { label: 'Hardware', icon: '🖥️', command: () => this.showMessage('Hardware products') },
          { label: 'Services', icon: '🔧', command: () => this.showMessage('Service offerings') }
        ],
        [
          { label: 'Cloud Solutions', icon: '☁️', command: () => this.showMessage('Cloud solutions') },
          { label: 'Security', icon: '🔒', command: () => this.showMessage('Security products') },
          { label: 'Analytics', icon: '📊', command: () => this.showMessage('Analytics tools') }
        ],
        [
          { label: 'Mobile Apps', icon: '📱', command: () => this.showMessage('Mobile applications') },
          { label: 'Web Apps', icon: '🌐', command: () => this.showMessage('Web applications') },
          { label: 'APIs', icon: '🔌', command: () => this.showMessage('API services') }
        ]
      ]
    },
    {
      label: 'Solutions',
      columns: [
        [
          { label: 'Enterprise', icon: '🏢', command: () => this.showMessage('Enterprise solutions') },
          { label: 'SMB', icon: '🏪', command: () => this.showMessage('Small business solutions') },
          { label: 'Startup', icon: '🚀', command: () => this.showMessage('Startup solutions') }
        ],
        [
          { label: 'Industry', icon: '🏭', command: () => this.showMessage('Industry solutions') },
          { label: 'Healthcare', icon: '🏥', command: () => this.showMessage('Healthcare solutions') },
          { label: 'Finance', icon: '🏦', command: () => this.showMessage('Finance solutions') }
        ]
      ]
    },
    {
      label: 'Resources',
      items: [
        { label: 'Documentation', icon: '📚', command: () => this.showMessage('Opening documentation') },
        { label: 'Tutorials', icon: '🎓', command: () => this.showMessage('Viewing tutorials') },
        { label: 'Blog', icon: '📝', command: () => this.showMessage('Reading blog') },
        { separator: true },
        { label: 'Support', icon: '🆘', command: () => this.showMessage('Getting support') },
        { label: 'Community', icon: '👥', command: () => this.showMessage('Joining community') }
      ]
    },
    {
      label: 'Company',
      items: [
        { label: 'About Us', icon: 'ℹ️', command: () => this.showMessage('About our company') },
        { label: 'Careers', icon: '💼', command: () => this.showMessage('Viewing careers') },
        { label: 'Contact', icon: '📞', command: () => this.showMessage('Contacting us') }
      ]
    }
  ];

  ecommerceMegaMenuItems: MegaMenuItem[] = [
    {
      label: 'Electronics',
      columns: [
        [
          { label: 'Smartphones', icon: '📱', command: () => this.showMessage('Browse smartphones') },
          { label: 'Laptops', icon: '💻', command: () => this.showMessage('Browse laptops') },
          { label: 'Tablets', icon: '📟', command: () => this.showMessage('Browse tablets') },
          { label: 'Wearables', icon: '⌚', command: () => this.showMessage('Browse wearables') }
        ],
        [
          { label: 'Audio', icon: '🎧', command: () => this.showMessage('Browse audio devices') },
          { label: 'Cameras', icon: '📷', command: () => this.showMessage('Browse cameras') },
          { label: 'Gaming', icon: '🎮', command: () => this.showMessage('Browse gaming') },
          { label: 'Accessories', icon: '🔌', command: () => this.showMessage('Browse accessories') }
        ],
        [
          { label: 'TV & Home', icon: '📺', command: () => this.showMessage('Browse TV & home') },
          { label: 'Smart Home', icon: '🏠', command: () => this.showMessage('Browse smart home') },
          { label: 'Office', icon: '🖨️', command: () => this.showMessage('Browse office equipment') }
        ]
      ]
    },
    {
      label: 'Fashion',
      columns: [
        [
          { label: "Women's", icon: '👗', command: () => this.showMessage('Browse women fashion') },
          { label: "Men's", icon: '👔', command: () => this.showMessage('Browse men fashion') },
          { label: "Kids'", icon: '👶', command: () => this.showMessage('Browse kids fashion') }
        ],
        [
          { label: 'Shoes', icon: '👟', command: () => this.showMessage('Browse shoes') },
          { label: 'Bags', icon: '👜', command: () => this.showMessage('Browse bags') },
          { label: 'Jewelry', icon: '💍', command: () => this.showMessage('Browse jewelry') },
          { label: 'Watches', icon: '⌚', command: () => this.showMessage('Browse watches') }
        ]
      ]
    },
    {
      label: 'Home & Garden',
      items: [
        { label: 'Furniture', icon: '🪑', command: () => this.showMessage('Browse furniture') },
        { label: 'Kitchen', icon: '🍳', command: () => this.showMessage('Browse kitchen items') },
        { label: 'Bedroom', icon: '🛏️', command: () => this.showMessage('Browse bedroom items') },
        { separator: true },
        { label: 'Garden', icon: '🌱', command: () => this.showMessage('Browse garden items') },
        { label: 'Tools', icon: '🔨', command: () => this.showMessage('Browse tools') }
      ]
    }
  ];

  // Demo properties
  selectedVariant = 'default';
  selectedSize = 'md';
  selectedOrientation = 'horizontal';
  showIcons = true;
  disabled = false;

  // Available options for demo controls
  variants = [
    { value: 'default', label: 'Default' },
    { value: 'primary', label: 'Primary' },
    { value: 'dark', label: 'Dark' }
  ];

  sizes = [
    { value: 'compact', label: 'Compact' },
    { value: 'md', label: 'Medium' },
    { value: 'large', label: 'Large' }
  ];

  orientations = [
    { value: 'horizontal', label: 'Horizontal' },
    { value: 'vertical', label: 'Vertical' }
  ];

  // Mega menu event handlers
  onItemClick(item: MegaMenuItem): void {
    console.log('Mega menu item clicked:', item.label);
    if (item.command) {
      item.command();
    }
  }

  private showMessage(message: string): void {
    alert(message);
  }

  // Template helpers
  getBasicMegaMenuItems(): MegaMenuItem[] {
    return this.basicMegaMenuItems;
  }

  getEcommerceMegaMenuItems(): MegaMenuItem[] {
    return this.ecommerceMegaMenuItems;
  }

  getMegaMenuClass(): string {
    let classes = 'sui-mega-menu';
    
    // Orientation class
    if (this.selectedOrientation !== 'horizontal') {
      classes += ` sui-mega-menu-${this.selectedOrientation}`;
    }
    
    // Variant class
    if (this.selectedVariant !== 'default') {
      classes += ` sui-mega-menu-${this.selectedVariant}`;
    }
    
    // Size class
    if (this.selectedSize !== 'md') {
      classes += ` sui-mega-menu-${this.selectedSize}`;
    }
    
    return classes;
  }

  hasSubmenu(item: MegaMenuItem): boolean {
    return !!(item.items && item.items.length > 0) || !!(item.columns && item.columns.length > 0);
  }
}