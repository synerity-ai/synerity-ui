import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Select } from '@synerity/ui';

@Component({
  selector: 'app-su-select-demo',
  imports: [CommonModule, FormsModule, Select],
  templateUrl: './su-select-demo.html',
  styleUrl: './su-select-demo.scss'
})
export class SuSelectDemo {
  // Basic select states
  basicSelected: string | null = null;
  disabledSelected: string | null = 'option2';
  
  // Single select examples
  countrySelected: string | null = null;
  themeSelected: string | null = null;
  sizeSelected: string | null = null;
  
  // Multiple select examples
  skillsSelected: string[] = [];
  interestsSelected: string[] = [];
  colorsSelected: string[] = [];
  
  // Options for select components
  basicOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 4 (Disabled)', value: 'option4', disabled: true }
  ];

  countryOptions = [
    { label: 'United States', value: 'us' },
    { label: 'Canada', value: 'ca' },
    { label: 'United Kingdom', value: 'uk' },
    { label: 'Germany', value: 'de' },
    { label: 'France', value: 'fr' },
    { label: 'Japan', value: 'jp' },
    { label: 'Australia', value: 'au' },
    { label: 'Brazil', value: 'br' }
  ];

  themeOptions = [
    { label: 'Light Theme', value: 'light' },
    { label: 'Dark Theme', value: 'dark' },
    { label: 'Auto (System)', value: 'auto' },
    { label: 'High Contrast', value: 'contrast' }
  ];

  sizeOptions = [
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' },
    { label: 'Extra Large', value: 'xl' }
  ];

  skillsOptions = [
    { label: 'Angular', value: 'angular' },
    { label: 'React', value: 'react' },
    { label: 'Vue.js', value: 'vue' },
    { label: 'TypeScript', value: 'typescript' },
    { label: 'JavaScript', value: 'javascript' },
    { label: 'HTML/CSS', value: 'html-css' },
    { label: 'Node.js', value: 'nodejs' },
    { label: 'Python', value: 'python' },
    { label: 'Java', value: 'java' },
    { label: 'C#', value: 'csharp' }
  ];

  interestsOptions = [
    { label: 'Web Development', value: 'web-dev' },
    { label: 'Mobile Development', value: 'mobile-dev' },
    { label: 'Data Science', value: 'data-science' },
    { label: 'Machine Learning', value: 'ml' },
    { label: 'DevOps', value: 'devops' },
    { label: 'UI/UX Design', value: 'ui-ux' },
    { label: 'Game Development', value: 'game-dev' },
    { label: 'Cybersecurity', value: 'cybersecurity' }
  ];

  colorsOptions = [
    { label: 'Red', value: 'red' },
    { label: 'Blue', value: 'blue' },
    { label: 'Green', value: 'green' },
    { label: 'Yellow', value: 'yellow' },
    { label: 'Purple', value: 'purple' },
    { label: 'Orange', value: 'orange' },
    { label: 'Pink', value: 'pink' },
    { label: 'Gray', value: 'gray' }
  ];

  // Form integration
  formData = {
    country: null as string | null,
    theme: null as string | null,
    skills: [] as string[],
    interests: [] as string[]
  };

  // Methods for demo interactions
  onSelectChange(value: any, type: string) {
    console.log(`${type} select changed to:`, value);
    
    // Update the corresponding form data
    switch(type) {
      case 'country':
        this.formData.country = value;
        break;
      case 'theme':
        this.formData.theme = value;
        break;
      case 'skills':
        this.formData.skills = value;
        break;
      case 'interests':
        this.formData.interests = value;
        break;
    }
  }

  resetForm() {
    this.formData = {
      country: null,
      theme: null,
      skills: [],
      interests: []
    };
    this.countrySelected = null;
    this.themeSelected = null;
    this.skillsSelected = [];
    this.interestsSelected = [];
  }

  setDefaultValues() {
    this.countrySelected = 'us';
    this.themeSelected = 'dark';
    this.skillsSelected = ['angular', 'typescript', 'javascript'];
    this.interestsSelected = ['web-dev', 'ui-ux'];
  }

  clearAllSelections() {
    this.basicSelected = null;
    this.countrySelected = null;
    this.themeSelected = null;
    this.sizeSelected = null;
    this.skillsSelected = [];
    this.interestsSelected = [];
    this.colorsSelected = [];
  }
}
