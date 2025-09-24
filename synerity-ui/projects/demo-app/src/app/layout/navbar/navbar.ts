import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DONATION_CONFIG } from '../../config/donation.config';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  isMenuOpen = false;
  isSidebarOpen = false;
  
  @Output() sidebarToggle = new EventEmitter<void>();

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.sidebarToggle.emit();
  }

  buyMeCoffee() {
    const config = DONATION_CONFIG;
    
    // Create PayPal donation URL
    const paypalUrl = `https://www.paypal.com/donate/?business=${encodeURIComponent(config.paypalEmail)}&amount=${config.defaultAmount}&currency_code=${config.currency}&item_name=${encodeURIComponent(config.message)}`;
    
    // Open PayPal in new tab
    window.open(paypalUrl, '_blank', 'noopener,noreferrer');
    
    // Close mobile menu if open
    this.isMenuOpen = false;
  }
}
