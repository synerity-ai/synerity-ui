import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickList } from '@synerity/ui';

interface Item {
  id: number;
  name: string;
  category?: string;
}

@Component({
  selector: 'app-pick-list-demo',
  standalone: true,
  imports: [CommonModule, PickList],
  templateUrl: './pick-list-demo.html',
  styleUrls: ['./pick-list-demo.scss']
})
export class PickListDemo {
  @Input() currentExample: any;

  getCurrentExample() {
    return this.currentExample || { name: 'Basic Pick List' };
  }

  // Basic example - Skills
  sourceSkills: Item[] = [
    { id: 1, name: 'JavaScript' },
    { id: 2, name: 'TypeScript' },
    { id: 3, name: 'Python' },
    { id: 4, name: 'Java' },
    { id: 5, name: 'C++' },
    { id: 6, name: 'Go' },
    { id: 7, name: 'Rust' },
    { id: 8, name: 'PHP' }
  ];
  targetSkills: Item[] = [];

  // With filter - Team members
  sourceMembers: Item[] = [
    { id: 1, name: 'Alice Johnson' },
    { id: 2, name: 'Bob Smith' },
    { id: 3, name: 'Charlie Brown' },
    { id: 4, name: 'Diana Prince' },
    { id: 5, name: 'Eve Anderson' },
    { id: 6, name: 'Frank Miller' },
    { id: 7, name: 'Grace Lee' },
    { id: 8, name: 'Henry Davis' }
  ];
  targetMembers: Item[] = [];

  // Without filter - Cities
  sourceCities: Item[] = [
    { id: 1, name: 'New York' },
    { id: 2, name: 'Los Angeles' },
    { id: 3, name: 'Chicago' },
    { id: 4, name: 'Houston' },
    { id: 5, name: 'Phoenix' },
    { id: 6, name: 'Philadelphia' }
  ];
  targetCities: Item[] = [];

  // Pre-populated - Features
  sourceFeatures: Item[] = [
    { id: 1, name: 'User Management' },
    { id: 2, name: 'Email Notifications' },
    { id: 3, name: 'Export to PDF' }
  ];
  targetFeatures: Item[] = [
    { id: 4, name: 'Dashboard Analytics' },
    { id: 5, name: 'Search Functionality' },
    { id: 6, name: 'File Upload' }
  ];

  // Categories - Products
  sourceProducts: Item[] = [
    { id: 1, name: 'Laptop', category: 'Electronics' },
    { id: 2, name: 'Mouse', category: 'Electronics' },
    { id: 3, name: 'Desk Chair', category: 'Furniture' },
    { id: 4, name: 'Notebook', category: 'Stationery' },
    { id: 5, name: 'Pen Set', category: 'Stationery' },
    { id: 6, name: 'Monitor', category: 'Electronics' }
  ];
  targetProducts: Item[] = [];

  // Minimal - Tags
  sourceTags: Item[] = [
    { id: 1, name: 'urgent' },
    { id: 2, name: 'important' },
    { id: 3, name: 'low-priority' },
    { id: 4, name: 'bug' },
    { id: 5, name: 'feature' }
  ];
  targetTags: Item[] = [];

  onMoveToTarget(event: any): void {
    console.log('Moved to target:', event);
  }

  onMoveToSource(event: any): void {
    console.log('Moved to source:', event);
  }

  onMoveAllToTarget(event: any): void {
    console.log('Moved all to target:', event);
  }

  onMoveAllToSource(event: any): void {
    console.log('Moved all to source:', event);
  }

  resetSkills(): void {
    this.sourceSkills = [
      { id: 1, name: 'JavaScript' },
      { id: 2, name: 'TypeScript' },
      { id: 3, name: 'Python' },
      { id: 4, name: 'Java' },
      { id: 5, name: 'C++' },
      { id: 6, name: 'Go' },
      { id: 7, name: 'Rust' },
      { id: 8, name: 'PHP' }
    ];
    this.targetSkills = [];
  }
}
