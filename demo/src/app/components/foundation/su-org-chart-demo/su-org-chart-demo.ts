import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrgChart } from '@synerity/ui';

@Component({
  selector: 'app-su-org-chart-demo',
  imports: [CommonModule, FormsModule, OrgChart],
  templateUrl: './su-org-chart-demo.html',
  styleUrl: './su-org-chart-demo.scss'
})
export class SuOrgChartDemo {
  // Company organization
  companyOrg = [
    {
      key: 'ceo',
      label: 'CEO',
      data: { role: 'Chief Executive Officer', department: 'Executive' },
      children: [
        {
          key: 'cto',
          label: 'CTO',
          data: { role: 'Chief Technology Officer', department: 'Technology' },
          children: [
            {
              key: 'dev-lead',
              label: 'Dev Lead',
              data: { role: 'Development Lead', department: 'Engineering' }
            },
            {
              key: 'qa-lead',
              label: 'QA Lead',
              data: { role: 'Quality Assurance Lead', department: 'Engineering' }
            }
          ]
        },
        {
          key: 'cfo',
          label: 'CFO',
          data: { role: 'Chief Financial Officer', department: 'Finance' },
          children: [
            {
              key: 'accountant',
              label: 'Accountant',
              data: { role: 'Senior Accountant', department: 'Finance' }
            }
          ]
        }
      ]
    }
  ];

  // Simple team structure
  teamStructure = [
    {
      key: 'manager',
      label: 'Team Manager',
      data: { role: 'Project Manager', experience: '5 years' },
      children: [
        {
          key: 'senior-dev',
          label: 'Senior Developer',
          data: { role: 'Senior Developer', experience: '3 years' }
        },
        {
          key: 'junior-dev',
          label: 'Junior Developer',
          data: { role: 'Junior Developer', experience: '1 year' }
        },
        {
          key: 'designer',
          label: 'UI Designer',
          data: { role: 'UI/UX Designer', experience: '2 years' }
        }
      ]
    }
  ];

  // Department hierarchy
  departmentHierarchy = [
    {
      key: 'hr-director',
      label: 'HR Director',
      data: { department: 'Human Resources', level: 'Director' },
      children: [
        {
          key: 'hr-manager',
          label: 'HR Manager',
          data: { department: 'Human Resources', level: 'Manager' },
          children: [
            {
              key: 'hr-specialist',
              label: 'HR Specialist',
              data: { department: 'Human Resources', level: 'Specialist' }
            }
          ]
        },
        {
          key: 'recruiter',
          label: 'Recruiter',
          data: { department: 'Human Resources', level: 'Specialist' }
        }
      ]
    }
  ];

  selectedNode: any = null;
  selectionMode: 'single' | 'multiple' | null = null;
  collapsible = true;
  orientation: 'vertical' | 'horizontal' = 'vertical';

  handleNodeSelect(event: any): void {
    console.log('Node selected:', event);
    this.selectedNode = event;
  }

  handleNodeExpand(event: any): void {
    console.log('Node expanded:', event);
  }

  handleNodeCollapse(event: any): void {
    console.log('Node collapsed:', event);
  }
}