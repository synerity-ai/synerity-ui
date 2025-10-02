import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PickList } from '@synerity/ui';

@Component({
  selector: 'app-su-pick-list-demo',
  imports: [CommonModule, FormsModule, PickList],
  templateUrl: './su-pick-list-demo.html',
  styleUrl: './su-pick-list-demo.scss'
})
export class SuPickListDemo {
  // Available cities
  availableCities: any[] = [
    { label: 'New York', code: 'NY' },
    { label: 'Los Angeles', code: 'LA' },
    { label: 'Chicago', code: 'CHI' },
    { label: 'Houston', code: 'HOU' },
    { label: 'Phoenix', code: 'PHX' },
    { label: 'Philadelphia', code: 'PHL' },
    { label: 'San Antonio', code: 'SA' },
    { label: 'San Diego', code: 'SD' }
  ];

  // Selected cities
  selectedCities: any[] = [
    { label: 'Dallas', code: 'DAL' },
    { label: 'San Jose', code: 'SJ' }
  ];

  // Available skills
  availableSkills: any[] = [
    { label: 'JavaScript' },
    { label: 'TypeScript' },
    { label: 'Python' },
    { label: 'Java' },
    { label: 'C#' },
    { label: 'Go' },
    { label: 'Rust' },
    { label: 'Swift' }
  ];

  // Selected skills
  selectedSkills: any[] = [
    { label: 'Angular' },
    { label: 'React' }
  ];

  handleMoveToTarget(event: any): void {
    console.log('Moved to target:', event);
  }

  handleMoveToSource(event: any): void {
    console.log('Moved to source:', event);
  }
}
