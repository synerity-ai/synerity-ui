import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Checkbox } from '@synerity/ui';

@Component({
  selector: 'app-su-checkbox-demo',
  imports: [CommonModule, FormsModule, Checkbox],
  templateUrl: './su-checkbox-demo.html',
  styleUrl: './su-checkbox-demo.scss'
})
export class SuCheckboxDemo {
  // Basic checkbox states
  basicChecked = false;
  disabledChecked = true;
  readonlyChecked = false;
  
  // Checkbox groups - using individual boolean properties
  selectedFruits: { [key: string]: boolean } = {};
  selectedColors: { [key: string]: boolean } = {};
  selectedFeatures: { [key: string]: boolean } = {};
  
  // Options for checkbox groups
  fruits = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'orange', label: 'Orange' },
    { value: 'grape', label: 'Grape' }
  ];

  colors = [
    { value: 'red', label: 'Red' },
    { value: 'green', label: 'Green' },
    { value: 'blue', label: 'Blue' },
    { value: 'yellow', label: 'Yellow' }
  ];

  features = [
    { value: 'feature1', label: 'Feature 1' },
    { value: 'feature2', label: 'Feature 2' },
    { value: 'feature3', label: 'Feature 3' }
  ];

  // Form integration
  formData = {
    termsAccepted: false,
    newsletter: true,
    notifications: false,
    marketing: false
  };

  // Methods for demo interactions
  onCheckboxChange(event: any, type: string) {
    console.log(`${type} checkbox changed:`, event);
  }

  onFruitChange(fruit: string, checked: boolean) {
    this.selectedFruits[fruit] = checked;
    console.log('Fruit change:', fruit, checked);
    console.log('Selected fruits:', this.getSelectedFruits());
  }

  onColorChange(color: string, checked: boolean) {
    this.selectedColors[color] = checked;
    console.log('Color change:', color, checked);
    console.log('Selected colors:', this.getSelectedColors());
  }

  onFeatureChange(feature: string, checked: boolean) {
    this.selectedFeatures[feature] = checked;
    console.log('Feature change:', feature, checked);
    console.log('Selected features:', this.getSelectedFeatures());
  }

  getSelectedFruits(): string[] {
    return Object.keys(this.selectedFruits).filter(key => this.selectedFruits[key]);
  }

  getSelectedColors(): string[] {
    return Object.keys(this.selectedColors).filter(key => this.selectedColors[key]);
  }

  getSelectedFeatures(): string[] {
    return Object.keys(this.selectedFeatures).filter(key => this.selectedFeatures[key]);
  }

  resetForm() {
    this.formData = {
      termsAccepted: false,
      newsletter: false,
      notifications: false,
      marketing: false
    };
  }

  selectAllFruits() {
    this.fruits.forEach(fruit => {
      this.selectedFruits[fruit.value] = true;
    });
  }

  clearAllFruits() {
    this.selectedFruits = {};
  }
}
