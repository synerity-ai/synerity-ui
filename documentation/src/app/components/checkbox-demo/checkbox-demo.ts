import { Component, Input } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Checkbox, Button } from '@synerity/ui';
import { ComponentExample } from '../../models/component.model';

interface Task {
  id: string;
  name: string;
  completed: boolean;
}

interface CheckboxOption {
  id: string;
  label: string;
  value: string;
  checked: boolean;
}

interface CheckboxGroup {
  name: string;
  options: CheckboxOption[];
}

@Component({
  selector: 'app-checkbox-demo',
  standalone: true,
  imports: [CommonModule, NgFor, FormsModule, Checkbox, Button],
  templateUrl: './checkbox-demo.html',
  styleUrl: './checkbox-demo.scss'
})
export class CheckboxDemoComponent {
  @Input() currentExample!: ComponentExample;

  getCurrentExample(): ComponentExample {
    return this.currentExample;
  }

  // Basic checkbox states
  basicChecked = false;
  basicIndeterminate = false;
  basicDisabled = false;
  
  // Form example
  formData = {
    acceptTerms: false,
    subscribeNewsletter: true,
    shareData: false
  };

  // Size variations
  sizeVariants = [
    { size: 'sm', label: 'Small Checkbox' },
    { size: 'normal', label: 'Normal Checkbox' },
    { size: 'lg', label: 'Large Checkbox' },
    { size: 'xl', label: 'Extra Large Checkbox' }
  ];

  // Color variants
  colorVariants = [
    { color: 'primary', label: 'Primary Checkbox' },
    { color: 'secondary', label: 'Secondary Checkbox' },
    { color: 'success', label: 'Success Checkbox' },
    { color: 'warning', label: 'Warning Checkbox' },
    { color: 'danger', label: 'Danger Checkbox' }
  ];

  // Todo list example
  todos: Task[] = [
    { id: '1', name: 'Complete project documentation', completed: false },
    { id: '2', name: 'Review code changes', completed: true },
    { id: '3', name: 'Update dependencies', completed: false },
    { id: '4', name: 'Test new features', completed: false },
    { id: '5', name: 'Deploy to production', completed: true }
  ];

  // Checkbox group example
  checkboxGroups: CheckboxGroup[] = [
    {
      name: 'Skills',
      options: [
        { id: 'skills-angular', label: 'Angular', value: 'angular', checked: true },
        { id: 'skills-react', label: 'React', value: 'react', checked: false },
        { id: 'skills-vue', label: 'Vue.js', value: 'vue', checked: true },
        { id: 'skills-svelte', label: 'Svelte', value: 'svelte', checked: false }
      ]
    },
    {
      name: 'Interests',
      options: [
        { id: 'interests-frontend', label: 'Frontend Development', value: 'frontend', checked: false },
        { id: 'interests-backend', label: 'Backend Development', value: 'backend', checked: true },
        { id: 'interests-mobile', label: 'Mobile Development', value: 'mobile', checked: false },
        { id: 'interests-devops', label: 'DevOps', value: 'devops', checked: true }
      ]
    }
  ];

  // Settings panel example
  settings = {
    notifications: {
      email: true,
      push: false,
      sms: true
    },
    privacy: {
      profileVisible: true,
      dataSharing: false,
      analytics: true
    },
    preferences: {
      darkMode: false,
      autoSave: true,
      compactView: false
    }
  };

  // Custom styling examples
  customStyles = [
    { style: 'enhanced', label: 'Enhanced Checkbox' },
    { style: 'animated', label: 'Animated Checkbox' },
    { style: 'glow', label: 'Glow Effect' },
    { style: 'rounded', label: 'Rounded Checkbox' },
    { style: 'borderless', label: 'Borderless Checkbox' }
  ];

  // Methods
  toggleTaskCompletion(task: Task): void {
    task.completed = !task.completed;
  }

  toggleIndeterminate(): void {
    this.basicIndeterminate = !this.basicIndeterminate;
    if (this.basicIndeterminate) {
      this.basicChecked = false;
    }
  }

  selectAll(group: CheckboxGroup): void {
    const allChecked = group.options.every(option => option.checked);
    group.options.forEach(option => option.checked = !allChecked);
  }

  getSelectedSkills(): string[] {
    return this.checkboxGroups
      .flatMap(group => group.options)
      .filter(option => option.checked)
      .map(option => option.value);
  }

  getCompletedTodosCount(): number {
    return this.todos.filter(todo => todo.completed).length;
  }

  getTotalTodosCount(): number {
    return this.todos.length;
  }

  clearAllTodos(): void {
    this.todos.forEach(todo => todo.completed = false);
  }

  completeAllTodos(): void {
    this.todos.forEach(todo => todo.completed = true);
  }

  resetForm(): void {
    this.formData = {
      acceptTerms: false,
      subscribeNewsletter: true,
      shareData: false
    };
  }

  submitForm(): void {
    console.log('Form submitted:', this.formData);
  }

  getTodoProgress(): number {
    return (this.getCompletedTodosCount() / this.getTotalTodosCount()) * 100;
  }
}