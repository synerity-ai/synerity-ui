import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Paginator } from '@synerity/ui';

@Component({
  selector: 'app-paginator-demo',
  standalone: true,
  imports: [CommonModule, Paginator],
  templateUrl: './paginator-demo.html',
  styleUrls: ['./paginator-demo.scss']
})
export class PaginatorDemo {
  @Input() currentExample: any;

  // Expose Math for template
  Math = Math;

  getCurrentExample() {
    return this.currentExample || { name: 'Basic Paginator' };
  }

  // Basic pagination
  totalRecords = 120;
  rows = 10;
  first = 0;

  // Large dataset
  largeTotalRecords = 1000;
  largeRows = 25;
  largeFirst = 0;

  // Custom page sizes
  customRows = 15;
  customFirst = 0;
  customRowsPerPageOptions = [10, 15, 25, 50, 100];

  // Minimal paginator
  minimalRows = 20;
  minimalFirst = 0;

  onPageChange(event: any): void {
    console.log('Page changed:', event);
    this.first = event.first;
    this.rows = event.rows;
  }

  onLargePageChange(event: any): void {
    console.log('Large page changed:', event);
    this.largeFirst = event.first;
    this.largeRows = event.rows;
  }

  onCustomPageChange(event: any): void {
    console.log('Custom page changed:', event);
    this.customFirst = event.first;
    this.customRows = event.rows;
  }

  onMinimalPageChange(event: any): void {
    console.log('Minimal page changed:', event);
    this.minimalFirst = event.first;
    this.minimalRows = event.rows;
  }

  get currentPageInfo(): string {
    const start = this.first + 1;
    const end = Math.min(this.first + this.rows, this.totalRecords);
    return `Showing ${start}-${end} of ${this.totalRecords} records`;
  }
}
