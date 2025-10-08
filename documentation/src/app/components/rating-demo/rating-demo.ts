import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Rating } from '@synerity/ui';
import { ComponentExample } from '../../models/component.model';

@Component({
  selector: 'app-rating-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, Rating],
  templateUrl: './rating-demo.html',
  styleUrl: './rating-demo.scss'
})
export class RatingDemoComponent {
  @Input() currentExample!: ComponentExample;

  // Rating values for different examples
  basicRating = 0;
  ratingSmall = 3;
  ratingMedium = 3;
  ratingLarge = 3;
  ratingDefault = 4;
  ratingPrimary = 4;
  ratingSuccess = 4;
  ratingReadonly = 4;
  ratingDisabled = 3;
  ratingWithValue = 3;

  getCurrentExample(): ComponentExample {
    return this.currentExample;
  }
}
