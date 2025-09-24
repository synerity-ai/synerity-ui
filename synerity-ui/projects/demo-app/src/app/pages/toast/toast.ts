import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs as AppTabs } from '../../shared/tabs/tabs';
import { Toast as SuiToast } from 'ui-lib';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule, AppTabs, SuiToast],
  templateUrl: './toast.html',
  styleUrl: './toast.scss'
})
export class ToastComponent implements AfterViewInit {
  activeTab = 'demo';

  @ViewChild('toast') toast!: SuiToast;
  @ViewChild('toast', { read: ElementRef }) toastElement!: ElementRef;

  ngAfterViewInit(): void {
    // Toast component is ready
  }

  // Code visibility toggles
  showBasicToastCode = false;
  showInfoToastCode = false;
  showSuccessToastCode = false;
  showWarningToastCode = false;
  showErrorToastCode = false;
  showCustomToastCode = false;

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basicToast':
        this.showBasicToastCode = !this.showBasicToastCode;
        break;
      case 'infoToast':
        this.showInfoToastCode = !this.showInfoToastCode;
        break;
      case 'successToast':
        this.showSuccessToastCode = !this.showSuccessToastCode;
        break;
      case 'warningToast':
        this.showWarningToastCode = !this.showWarningToastCode;
        break;
      case 'errorToast':
        this.showErrorToastCode = !this.showErrorToastCode;
        break;
      case 'customToast':
        this.showCustomToastCode = !this.showCustomToastCode;
        break;
    }
  }

  showToast(severity: string, summary: string, detail: string): void {
    if (this.toast) {
      this.toast.add({
        severity: severity as any,
        summary: summary,
        detail: detail
      });
    }
  }
}