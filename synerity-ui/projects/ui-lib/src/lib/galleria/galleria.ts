import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { NgFor, NgIf, CommonModule } from '@angular/common';
import { Subscription, fromEvent } from 'rxjs';

interface GalleriaItem {
  src: string;
  alt?: string;
  title?: string;
  caption?: string;
  thumbnailSrc?: string;
}

@Component({
  selector: 'sui-galleria',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './galleria.html',
  styleUrl: './galleria.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Galleria implements OnInit, OnDestroy {
  @Input() value: GalleriaItem[] = [];
  @Input() activeIndex = 0;
  @Input() visible = false;
  @Input() showThumbnails = true;
  @Input() showIndicators = true;
  @Input() circular = true;
  @Input() fullScreen = false;
  @Input() style: any = {};
  @Input() styleClass = '';
  @Output() onImageChange = new EventEmitter<number>();
  @Output() onShow = new EventEmitter<void>();
  @Output() onHide = new EventEmitter<void>();

  @ViewChild('galleriaContainer') galleriaContainer!: ElementRef;

  private documentClickListener!: Subscription;

  ngOnInit(): void {
    this.bindDocumentClickListener();
  }

  ngOnDestroy(): void {
    this.unbindDocumentClickListener();
  }

  show(index: number = 0): void {
    this.activeIndex = index;
    this.visible = true;
    this.onShow.emit();
  }

  hide(): void {
    this.visible = false;
    this.onHide.emit();
  }

  next(): void {
    if (this.value.length === 0) return;

    if (this.circular) {
      this.activeIndex = (this.activeIndex + 1) % this.value.length;
    } else {
      this.activeIndex = Math.min(this.activeIndex + 1, this.value.length - 1);
    }

    this.onImageChange.emit(this.activeIndex);
  }

  prev(): void {
    if (this.value.length === 0) return;

    if (this.circular) {
      this.activeIndex = this.activeIndex === 0 ? this.value.length - 1 : this.activeIndex - 1;
    } else {
      this.activeIndex = Math.max(this.activeIndex - 1, 0);
    }

    this.onImageChange.emit(this.activeIndex);
  }

  goToImage(index: number): void {
    if (index >= 0 && index < this.value.length) {
      this.activeIndex = index;
      this.onImageChange.emit(this.activeIndex);
    }
  }

  private bindDocumentClickListener(): void {
    this.documentClickListener = fromEvent(document, 'click').subscribe((event: any) => {
      if (this.visible && this.galleriaContainer && !this.galleriaContainer.nativeElement.contains(event.target)) {
        this.hide();
      }
    });
  }

  private unbindDocumentClickListener(): void {
    if (this.documentClickListener) {
      this.documentClickListener.unsubscribe();
    }
  }

  getGalleriaClass(): string {
    return `sui-galleria ${this.visible ? 'sui-galleria-visible' : ''} ${this.fullScreen ? 'sui-galleria-fullscreen' : ''} ${this.styleClass}`.trim();
  }

  getGalleriaStyle(): any {
    return {
      ...this.style
    };
  }

  getActiveItem(): GalleriaItem | null {
    return this.value[this.activeIndex] || null;
  }

  getTotalItems(): number {
    return this.value.length;
  }

  isFirstImage(): boolean {
    return this.activeIndex === 0;
  }

  isLastImage(): boolean {
    return this.activeIndex === this.value.length - 1;
  }
}
