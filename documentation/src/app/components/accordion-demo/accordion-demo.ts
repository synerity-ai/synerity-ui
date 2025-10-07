import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentExample } from '../../models/component.model';
import { Accordion } from '@synerity/ui';

@Component({
  selector: 'app-accordion-demo',
  standalone: true,
  imports: [CommonModule, Accordion],
  templateUrl: './accordion-demo.html',
  styleUrls: ['./accordion-demo.scss']
})
export class AccordionDemoComponent {
  @Input() currentExample!: ComponentExample;

  getCurrentExample(): ComponentExample {
    return this.currentExample;
  }

  // Basic accordion
  basicActiveIndex: number = 0;
  basicTabs = [
    {
      header: 'Getting Started',
      content: '<p>Learn the basics of our platform and how to get started with your first project. This section covers account setup, initial configuration, and basic navigation.</p>'
    },
    {
      header: 'Features Overview',
      content: '<p>Explore all the powerful features available in our platform. From advanced analytics to collaboration tools, discover what makes our solution unique.</p>'
    },
    {
      header: 'Best Practices',
      content: '<p>Follow these proven strategies to maximize your productivity and achieve better results. Learn from industry experts and successful users.</p>'
    }
  ];

  // Multiple expansion accordion
  multipleActiveIndex: number[] = [0, 2];
  multipleTabs = [
    {
      header: 'Account Settings',
      content: '<p>Manage your account preferences, security settings, and personal information. Keep your account secure and up to date.</p>'
    },
    {
      header: 'Billing Information',
      content: '<p>View and update your billing details, payment methods, and subscription information. Manage your plan and billing cycle.</p>'
    },
    {
      header: 'Notifications',
      content: '<p>Configure how and when you receive notifications. Customize your communication preferences for different types of updates.</p>'
    },
    {
      header: 'Privacy & Security',
      content: '<p>Control your privacy settings and security options. Manage data sharing preferences and security features.</p>'
    }
  ];

  // Bordered accordion
  borderedActiveIndex: number = 1;
  borderedTabs = [
    {
      header: 'Project Management',
      content: '<p>Organize and track your projects with our comprehensive project management tools. Create tasks, set deadlines, and collaborate with your team.</p>'
    },
    {
      header: 'Team Collaboration',
      content: '<p>Work together seamlessly with real-time collaboration features. Share files, communicate, and coordinate efforts across your entire team.</p>'
    },
    {
      header: 'Analytics & Reporting',
      content: '<p>Gain insights into your performance with detailed analytics and customizable reports. Track progress and make data-driven decisions.</p>'
    }
  ];

  // Minimal accordion
  minimalActiveIndex: number = 0;
  minimalTabs = [
    {
      header: 'Quick Start Guide',
      content: '<p>Get up and running in minutes with our quick start guide. Perfect for new users who want to see immediate results.</p>'
    },
    {
      header: 'Advanced Configuration',
      content: '<p>Dive deep into advanced settings and configurations. Customize your experience to match your specific workflow requirements.</p>'
    }
  ];

  // Size variations
  smallActiveIndex: number = 0;
  mediumActiveIndex: number = 1;
  largeActiveIndex: number = 0;
  sizeTabs = [
    {
      header: 'Compact View',
      content: '<p>This is a compact accordion suitable for dense interfaces and mobile applications.</p>'
    },
    {
      header: 'Standard View',
      content: '<p>This is the standard accordion size, perfect for most use cases and desktop applications.</p>'
    },
    {
      header: 'Spacious View',
      content: '<p>This is a larger accordion with more padding, ideal for touch interfaces and accessibility.</p>'
    }
  ];

  // Rich content accordion
  richContentActiveIndex: number = 0;
  richContentTabs = [
    {
      header: 'Product Features',
      content: `
        <h4>Core Features</h4>
        <ul>
          <li>Real-time collaboration</li>
          <li>Advanced analytics</li>
          <li>Custom integrations</li>
          <li>Mobile applications</li>
        </ul>
        <h4>Benefits</h4>
        <p>Our platform provides everything you need to succeed in today's competitive market. With powerful tools and intuitive design, you can focus on what matters most.</p>
      `
    },
    {
      header: 'Technical Specifications',
      content: `
        <h4>System Requirements</h4>
        <ul>
          <li>Modern web browser (Chrome, Firefox, Safari, Edge)</li>
          <li>Internet connection (minimum 1 Mbps)</li>
          <li>JavaScript enabled</li>
        </ul>
        <h4>Supported Formats</h4>
        <p>We support a wide range of file formats including PDF, DOC, XLS, images, and more. Maximum file size is 100MB per upload.</p>
      `
    },
    {
      header: 'Support & Resources',
      content: `
        <h4>Getting Help</h4>
        <ul>
          <li>24/7 customer support</li>
          <li>Comprehensive documentation</li>
          <li>Video tutorials</li>
          <li>Community forum</li>
        </ul>
        <h4>Training</h4>
        <p>We offer free training sessions for all users. Schedule a session with our experts to learn advanced features and best practices.</p>
      `
    }
  ];

  // FAQ accordion
  faqActiveIndex: number = -1;
  faqTabs = [
    {
      header: 'How do I get started?',
      content: '<p>Getting started is easy! Simply create an account, complete the setup wizard, and you\'ll be ready to use our platform in minutes. We provide step-by-step guidance throughout the process.</p>'
    },
    {
      header: 'What payment methods do you accept?',
      content: '<p>We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are processed securely through our encrypted payment system.</p>'
    },
    {
      header: 'Can I cancel my subscription anytime?',
      content: '<p>Yes, you can cancel your subscription at any time from your account settings. There are no cancellation fees, and you\'ll continue to have access until the end of your current billing period.</p>'
    },
    {
      header: 'Do you offer a free trial?',
      content: '<p>We offer a 14-day free trial with full access to all features. No credit card required to start your trial. You can upgrade to a paid plan anytime during or after the trial period.</p>'
    },
    {
      header: 'Is my data secure?',
      content: '<p>Absolutely! We use enterprise-grade security measures including SSL encryption, regular security audits, and compliance with industry standards like SOC 2 and GDPR.</p>'
    }
  ];

  // Custom styling accordion
  customActiveIndex: number = 0;
  customTabs = [
    {
      header: 'Custom Styled Panel',
      content: '<p>This accordion uses custom CSS classes and inline styles to demonstrate the flexibility of the component.</p>'
    },
    {
      header: 'Brand Colors',
      content: '<p>You can easily customize the accordion to match your brand colors and design system.</p>'
    }
  ];

  customStyles = {
    '--sui-accordion-tab-header-active-bg': 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
    '--sui-accordion-tab-header-hover-bg': '#f3f4f6',
    '--sui-accordion-border-radius': '12px',
    '--sui-accordion-box-shadow': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
  };

  // Event handlers for type safety
  onBasicActiveIndexChange(event: number | number[]): void {
    this.basicActiveIndex = event as number;
  }

  onMultipleActiveIndexChange(event: number | number[]): void {
    this.multipleActiveIndex = event as number[];
  }

  onBorderedActiveIndexChange(event: number | number[]): void {
    this.borderedActiveIndex = event as number;
  }

  onMinimalActiveIndexChange(event: number | number[]): void {
    this.minimalActiveIndex = event as number;
  }

  onSmallActiveIndexChange(event: number | number[]): void {
    this.smallActiveIndex = event as number;
  }

  onMediumActiveIndexChange(event: number | number[]): void {
    this.mediumActiveIndex = event as number;
  }

  onLargeActiveIndexChange(event: number | number[]): void {
    this.largeActiveIndex = event as number;
  }

  onRichContentActiveIndexChange(event: number | number[]): void {
    this.richContentActiveIndex = event as number;
  }

  onFaqActiveIndexChange(event: number | number[]): void {
    this.faqActiveIndex = event as number;
  }

  onCustomActiveIndexChange(event: number | number[]): void {
    this.customActiveIndex = event as number;
  }
}
