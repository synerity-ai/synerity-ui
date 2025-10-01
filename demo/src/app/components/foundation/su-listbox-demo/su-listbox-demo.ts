import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Listbox } from '@synerity/ui';

@Component({
  selector: 'app-su-listbox-demo',
  imports: [CommonModule, FormsModule, Listbox],
  templateUrl: './su-listbox-demo.html',
  styleUrl: './su-listbox-demo.scss'
})
export class SuListboxDemo {
  selectedCity: any = null;
  selectedCountry: any = null;
  selectedColor: any = null;
  
  cities = [
    { label: 'New York', value: 'NY' },
    { label: 'Los Angeles', value: 'LA' },
    { label: 'Chicago', value: 'CHI' },
    { label: 'Houston', value: 'HOU' },
    { label: 'Phoenix', value: 'PHX' },
    { label: 'Philadelphia', value: 'PHL' },
    { label: 'San Antonio', value: 'SA' },
    { label: 'San Diego', value: 'SD' },
    { label: 'Dallas', value: 'DAL' },
    { label: 'San Jose', value: 'SJ' }
  ];
  
  countries = [
    { label: 'United States', value: 'US' },
    { label: 'United Kingdom', value: 'UK' },
    { label: 'Canada', value: 'CA' },
    { label: 'Australia', value: 'AU' },
    { label: 'Germany', value: 'DE' },
    { label: 'France', value: 'FR' }
  ];
  
  colors = [
    { label: 'Red', value: 'red' },
    { label: 'Blue', value: 'blue' },
    { label: 'Green', value: 'green', disabled: true },
    { label: 'Yellow', value: 'yellow' },
    { label: 'Purple', value: 'purple' }
  ];
  
  handleChange(value: any): void {
    console.log('Selection changed:', value);
  }
}
