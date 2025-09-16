import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { Paginator } from 'ui-lib';

@Component({
  selector: 'app-paginator',
  imports: [CommonModule, FormsModule, Tabs, Paginator],
  templateUrl: './paginator.html',
  styleUrl: './paginator.scss'
})
export class PaginatorPage {
  activeTab = 'demo';

  // Code visibility toggles
  showBasicPaginatorCode = false;
  showCustomOptionsCode = false;
  showPageReportCode = false;
  showMinimalCode = false;

  // Pagination data
  totalRecords = 150;
  currentPage = 0;
  rows = 10;
  rowsPerPageOptions = [5, 10, 20, 30];
  customRowsPerPageOptions = [10, 25, 50, 100];

  // Sample data for demonstration
  sampleData = Array.from({ length: 150 }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
    category: ['Electronics', 'Clothing', 'Books', 'Home'][i % 4],
    price: Math.floor(Math.random() * 1000) + 10
  }));

  // Current page data
  currentPageData = this.sampleData.slice(0, this.rows);

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(section: string): void {
    switch (section) {
      case 'basicPaginator':
        this.showBasicPaginatorCode = !this.showBasicPaginatorCode;
        break;
      case 'customOptions':
        this.showCustomOptionsCode = !this.showCustomOptionsCode;
        break;
      case 'pageReport':
        this.showPageReportCode = !this.showPageReportCode;
        break;
      case 'minimal':
        this.showMinimalCode = !this.showMinimalCode;
        break;
    }
  }

  onPageChange(event: any): void {
    console.log('Page changed:', event);
    this.currentPage = event.page;
    this.rows = event.rows;
    this.updateCurrentPageData();
  }

  onCustomPageChange(event: any): void {
    console.log('Custom page changed:', event);
    this.updateCurrentPageData();
  }

  onPageReportChange(event: any): void {
    console.log('Page report changed:', event);
    this.updateCurrentPageData();
  }

  onMinimalPageChange(event: any): void {
    console.log('Minimal page changed:', event);
    this.updateCurrentPageData();
  }

  private updateCurrentPageData(): void {
    const start = this.currentPage * this.rows;
    const end = start + this.rows;
    this.currentPageData = this.sampleData.slice(start, end);
  }
}