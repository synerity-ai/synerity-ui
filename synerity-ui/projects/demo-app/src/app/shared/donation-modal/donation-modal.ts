import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DONATION_CONFIG } from '../../config/donation.config';

@Component({
  selector: 'app-donation-modal',
  imports: [CommonModule],
  templateUrl: './donation-modal.html',
  styleUrl: './donation-modal.scss'
})
export class DonationModal {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();
  
  config = DONATION_CONFIG;

  closeModal() {
    this.close.emit();
  }

  openKoFi() {
    window.open(`https://ko-fi.com/${this.config.koFiUsername}`, '_blank', 'noopener,noreferrer');
    this.closeModal();
  }

  openGitHubSponsors() {
    window.open(this.config.githubSponsorsUrl, '_blank', 'noopener,noreferrer');
    this.closeModal();
  }

  openPayPal() {
    const paypalUrl = `https://www.paypal.com/donate/?business=${encodeURIComponent(this.config.paypalEmail)}&amount=${this.config.defaultAmount}&currency_code=${this.config.currency}&item_name=${encodeURIComponent(this.config.message)}`;
    window.open(paypalUrl, '_blank', 'noopener,noreferrer');
    this.closeModal();
  }
}
