import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Paginator } from '@synerity/ui';

interface Item {
  id: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-su-paginator-demo',
  imports: [CommonModule, FormsModule, Paginator],
  templateUrl: './su-paginator-demo.html',
  styleUrl: './su-paginator-demo.scss'
})
export class SuPaginatorDemo {
  // Generate 100 items for pagination
  allItems: Item[] = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    title: `Item ${i + 1}`,
    description: `This is the description for item number ${i + 1}`
  }));

  displayedItems: Item[] = this.allItems.slice(0, 10);
  first = 0;
  rows = 10;
  totalRecords = this.allItems.length;

  handlePageChange(event: any): void {
    console.log('Page change event:', event);
    this.first = event.first;
    this.rows = event.rows;
    this.displayedItems = this.allItems.slice(this.first, this.first + this.rows);
  }
}
