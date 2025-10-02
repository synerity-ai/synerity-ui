import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'sui-paginator',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './paginator.html',
  styleUrl: './paginator.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Paginator {
  @Input() rows = 10;
  @Input() totalRecords = 0;
  @Input() pageLinkSize = 5;
  @Input() rowsPerPageOptions: number[] = [5, 10, 20, 30];
  @Input() showCurrentPageReport = false;
  @Input() currentPageReportTemplate = '({currentPage} of {totalPages})';
  @Input() showFirstLastIcon = true;
  @Input() showPageLinks = true;
  @Input() showRowsPerPageOptions = true;
  @Input() alwaysShow = true;
  @Output() onPageChange = new EventEmitter<any>();

  first = 0;
  page = 0;

  get totalPages(): number {
    return Math.ceil(this.totalRecords / this.rows);
  }

  get pageLinks(): number[] {
    const links: number[] = [];
    const start = Math.max(0, this.page - Math.floor(this.pageLinkSize / 2));
    const end = Math.min(this.totalPages - 1, start + this.pageLinkSize - 1);
    
    for (let i = start; i <= end; i++) {
      links.push(i);
    }
    return links;
  }

  get currentPageReport(): string {
    return this.currentPageReportTemplate
      .replace('{currentPage}', String(this.page + 1))
      .replace('{totalPages}', String(this.totalPages))
      .replace('{first}', String(this.first + 1))
      .replace('{last}', String(Math.min(this.first + this.rows, this.totalRecords)))
      .replace('{totalRecords}', String(this.totalRecords));
  }

  changePage(page: number): void {
    if (page >= 0 && page < this.totalPages) {
      this.page = page;
      this.first = page * this.rows;
      this.onPageChange.emit({
        first: this.first,
        rows: this.rows,
        page: this.page,
        pageCount: this.totalPages
      });
    }
  }

  changeRowsPerPage(rows: number): void {
    this.rows = rows;
    this.first = 0;
    this.page = 0;
    this.onPageChange.emit({
      first: this.first,
      rows: this.rows,
      page: this.page,
      pageCount: this.totalPages
    });
  }

  firstPage(): void {
    this.changePage(0);
  }

  prevPage(): void {
    this.changePage(this.page - 1);
  }

  nextPage(): void {
    this.changePage(this.page + 1);
  }

  lastPage(): void {
    this.changePage(this.totalPages - 1);
  }
}
