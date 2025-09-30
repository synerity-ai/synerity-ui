import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Rating } from '@synerity/ui';

@Component({
  selector: 'app-su-rating-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, Rating],
  templateUrl: './su-rating-demo.html',
  styleUrl: './su-rating-demo.scss'
})
export class SuRatingDemo {
  // Basic rating states
  basicRating = 3;
  disabledRating = 4;
  readonlyRating = 5;

  // Size variants
  smallRating = 2;
  mediumRating = 4;
  largeRating = 3;

  // Max rating variants
  fiveStarRating = 4;
  tenStarRating = 7;
  threeStarRating = 2;

  // Product reviews
  productRating = 4;
  serviceRating = 5;
  deliveryRating = 3;
  overallRating = 4;

  // Movie/Content ratings
  movieRating = 4;
  bookRating = 5;
  musicRating = 3;
  gameRating = 4;

  // Hotel/Service ratings
  hotelRating = 4;
  restaurantRating = 5;
  experienceRating = 3;

  // Form integration
  formData = {
    product: 4,
    service: 5,
    delivery: 3,
    overall: 4
  };

  // Rating statistics
  ratingStats = {
    average: 4.2,
    total: 127,
    distribution: {
      5: 45,
      4: 32,
      3: 25,
      2: 15,
      1: 10
    }
  };

  // Clear functionality
  clearableRating = 3;
  nonClearableRating = 4;

  onRatingChange(value: number, property: string): void {
    (this as any)[property] = value;
  }

  onFormRatingChange(value: number, property: string): void {
    this.formData[property as keyof typeof this.formData] = value;
  }

  resetForm(): void {
    this.formData = {
      product: 4,
      service: 5,
      delivery: 3,
      overall: 4
    };
  }

  setDefaultValues(): void {
    this.basicRating = 3;
    this.disabledRating = 4;
    this.readonlyRating = 5;
    this.smallRating = 2;
    this.mediumRating = 4;
    this.largeRating = 3;
    this.fiveStarRating = 4;
    this.tenStarRating = 7;
    this.threeStarRating = 2;
    this.productRating = 4;
    this.serviceRating = 5;
    this.deliveryRating = 3;
    this.overallRating = 4;
    this.movieRating = 4;
    this.bookRating = 5;
    this.musicRating = 3;
    this.gameRating = 4;
    this.hotelRating = 4;
    this.restaurantRating = 5;
    this.experienceRating = 3;
    this.clearableRating = 3;
    this.nonClearableRating = 4;
  }

  calculateAverageRating(): number {
    const { product, service, delivery } = this.formData;
    return Math.round(((product + service + delivery) / 3) * 10) / 10;
  }

  getRatingText(rating: number): string {
    const texts = ['Poor', 'Fair', 'Good', 'Very Good', 'Excellent'];
    return texts[Math.min(rating - 1, 4)] || 'Unknown';
  }

  getRatingColor(rating: number): string {
    if (rating >= 4) return '#10b981'; // Green
    if (rating >= 3) return '#f59e0b'; // Yellow
    if (rating >= 2) return '#f97316'; // Orange
    return '#ef4444'; // Red
  }

  getRatingDistributionPercentage(rating: number): number {
    const total = Object.values(this.ratingStats.distribution).reduce((sum, count) => sum + count, 0);
    return Math.round((this.ratingStats.distribution[rating as keyof typeof this.ratingStats.distribution] / total) * 100);
  }
}