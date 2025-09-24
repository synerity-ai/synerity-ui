import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonationModal } from '../../shared/donation-modal/donation-modal';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, DonationModal],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  isMenuOpen = false;
  isSidebarOpen = false;
  isDonationModalOpen = false;
  
  @Output() sidebarToggle = new EventEmitter<void>();

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.sidebarToggle.emit();
  }

  buyMeCoffee() {
    this.isDonationModalOpen = true;
    this.isMenuOpen = false; // Close mobile menu if open
  }

  closeDonationModal() {
    this.isDonationModalOpen = false;
  }
}
