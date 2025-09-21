import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { DataView as SuiDataView } from '../../../../../ui-lib/src/lib/data-view/data-view';

@Component({
  selector: 'app-data-view',
  imports: [CommonModule, FormsModule, Tabs, SuiDataView],
  templateUrl: './data-view.html',
  styleUrl: './data-view.scss'
})
export class DataViewComponent {
  activeTab = 'demo';
  showListCode = false;
  showGridCode = false;
  showPaginatedCode = false;

  // Demo data
  products = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1001',
      code: 'nvklal433',
      name: 'Black Watch',
      description: 'Product Description',
      image: 'black-watch.jpg',
      price: 72,
      category: 'Accessories',
      quantity: 61,
      inventoryStatus: 'INSTOCK',
      rating: 4
    },
    {
      id: '1002',
      code: 'zz21cz3c1',
      name: 'Blue Band',
      description: 'Product Description',
      image: 'blue-band.jpg',
      price: 79,
      category: 'Fitness',
      quantity: 2,
      inventoryStatus: 'LOWSTOCK',
      rating: 3
    },
    {
      id: '1003',
      code: '244wgerg2',
      name: 'Blue T-Shirt',
      description: 'Product Description',
      image: 'blue-t-shirt.jpg',
      price: 29,
      category: 'Clothing',
      quantity: 25,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1004',
      code: 'h456wer53',
      name: 'Bracelet',
      description: 'Product Description',
      image: 'bracelet.jpg',
      price: 15,
      category: 'Accessories',
      quantity: 73,
      inventoryStatus: 'INSTOCK',
      rating: 4
    },
    {
      id: '1005',
      code: 'av2231fwg',
      name: 'Brown Purse',
      description: 'Product Description',
      image: 'brown-purse.jpg',
      price: 120,
      category: 'Accessories',
      quantity: 0,
      inventoryStatus: 'OUTOFSTOCK',
      rating: 4
    }
  ];

  paginatedProducts = this.products.slice(0, 4);
  currentPage = 0;
  pageSize = 2;
  totalRecords = this.products.length;

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'list':
        this.showListCode = !this.showListCode;
        break;
      case 'grid':
        this.showGridCode = !this.showGridCode;
        break;
      case 'paginated':
        this.showPaginatedCode = !this.showPaginatedCode;
        break;
    }
  }

  onPage(event: any): void {
    console.log('Page event:', event);
    this.currentPage = event.page;
    const start = event.page * event.rows;
    const end = start + event.rows;
    this.paginatedProducts = this.products.slice(start, end);
  }

  onLazyLoad(event: any): void {
    console.log('Lazy load event:', event);
  }

  getSeverity(inventoryStatus: string): string {
    switch (inventoryStatus) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'info';
    }
  }

  getSeverityText(inventoryStatus: string): string {
    switch (inventoryStatus) {
      case 'INSTOCK':
        return 'In Stock';
      case 'LOWSTOCK':
        return 'Low Stock';
      case 'OUTOFSTOCK':
        return 'Out of Stock';
      default:
        return 'Unknown';
    }
  }

  getMaxDisplayIndex(): number {
    return Math.min((this.currentPage + 1) * this.pageSize, this.totalRecords);
  }
}
