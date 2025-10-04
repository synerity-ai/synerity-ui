import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { DonationModalComponent } from '../donation-modal/donation-modal.component';
import { Button } from '@synerity/ui';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, DonationModalComponent, Button],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  protected readonly isThemeDropdownOpen = signal(false);
  protected readonly isDonationModalOpen = signal(false);
  
  readonly currentTheme: any;
  readonly availableThemes: any;

  constructor(
    private themeService: ThemeService
  ) {
    this.currentTheme = this.themeService.getCurrentTheme();
    this.availableThemes = this.themeService.getAvailableThemes();
  }

  toggleThemeDropdown(): void {
    this.isThemeDropdownOpen.update(open => !open);
  }

  closeThemeDropdown(): void {
    this.isThemeDropdownOpen.set(false);
  }

  setTheme(themeId: string): void {
    this.themeService.setTheme(themeId);
    this.closeThemeDropdown();
  }

  getCurrentThemeName(): string {
    return this.themeService.getCurrentThemeName();
  }

  buyMeCoffee(): void {
    this.isDonationModalOpen.set(true);
  }

  closeDonationModal(): void {
    this.isDonationModalOpen.set(false);
  }
}
