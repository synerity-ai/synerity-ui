import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { OrgChart } from 'ui-lib';

@Component({
  selector: 'app-orgchart',
  imports: [CommonModule, FormsModule, Tabs, OrgChart],
  templateUrl: './orgchart.html',
  styleUrl: './orgchart.scss'
})
export class OrgChartPage {
  activeTab = 'demo';

  // Code visibility toggles
  showBasicOrgChartCode = false;
  showSelectionModesCode = false;
  showOrientationCode = false;
  showComplexDataCode = false;

  // Basic organization data
  basicOrgData = [
    {
      key: 'ceo',
      label: 'CEO',
      data: { department: 'Executive', role: 'Chief Executive Officer' },
      children: [
        {
          key: 'cto',
          label: 'CTO',
          data: { department: 'Technology', role: 'Chief Technology Officer' },
          children: [
            { key: 'dev1', label: 'Senior Developer', data: { role: 'Developer', level: 'Senior' } },
            { key: 'dev2', label: 'Junior Developer', data: { role: 'Developer', level: 'Junior' } }
          ]
        },
        {
          key: 'cfo',
          label: 'CFO',
          data: { department: 'Finance', role: 'Chief Financial Officer' },
          children: [
            { key: 'acc1', label: 'Senior Accountant', data: { role: 'Accountant', level: 'Senior' } },
            { key: 'acc2', label: 'Junior Accountant', data: { role: 'Accountant', level: 'Junior' } }
          ]
        }
      ]
    }
  ];

  // Complex organization data
  complexOrgData = [
    {
      key: 'president',
      label: 'President',
      data: { department: 'Executive', role: 'President', tenure: '5 years' },
      children: [
        {
          key: 'vp-tech',
          label: 'VP Technology',
          data: { department: 'Technology', role: 'Vice President', team: 'Engineering' },
          children: [
            {
              key: 'director-dev',
              label: 'Director of Development',
              data: { department: 'Engineering', role: 'Director', team: 'Development' },
              children: [
                { key: 'lead-dev', label: 'Lead Developer', data: { role: 'Lead Developer', team: 'Frontend' } },
                { key: 'senior-dev', label: 'Senior Developer', data: { role: 'Senior Developer', team: 'Backend' } },
                { key: 'mid-dev', label: 'Mid-level Developer', data: { role: 'Developer', team: 'Full-stack' } }
              ]
            },
            {
              key: 'director-qa',
              label: 'Director of QA',
              data: { department: 'Quality Assurance', role: 'Director', team: 'Testing' },
              children: [
                { key: 'qa-lead', label: 'QA Lead', data: { role: 'QA Lead', team: 'Automation' } },
                { key: 'qa-analyst', label: 'QA Analyst', data: { role: 'QA Analyst', team: 'Manual Testing' } }
              ]
            }
          ]
        },
        {
          key: 'vp-sales',
          label: 'VP Sales',
          data: { department: 'Sales', role: 'Vice President', team: 'Sales' },
          children: [
            {
              key: 'director-sales',
              label: 'Director of Sales',
              data: { department: 'Sales', role: 'Director', team: 'Enterprise Sales' },
              children: [
                { key: 'sales-manager', label: 'Sales Manager', data: { role: 'Sales Manager', region: 'North America' } },
                { key: 'sales-rep', label: 'Sales Representative', data: { role: 'Sales Rep', region: 'Europe' } }
              ]
            }
          ]
        },
        {
          key: 'vp-marketing',
          label: 'VP Marketing',
          data: { department: 'Marketing', role: 'Vice President', team: 'Marketing' },
          children: [
            { key: 'marketing-manager', label: 'Marketing Manager', data: { role: 'Marketing Manager', focus: 'Digital' } },
            { key: 'content-manager', label: 'Content Manager', data: { role: 'Content Manager', focus: 'Content Strategy' } }
          ]
        }
      ]
    }
  ];

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(section: string): void {
    switch (section) {
      case 'basicOrgChart':
        this.showBasicOrgChartCode = !this.showBasicOrgChartCode;
        break;
      case 'selectionModes':
        this.showSelectionModesCode = !this.showSelectionModesCode;
        break;
      case 'orientation':
        this.showOrientationCode = !this.showOrientationCode;
        break;
      case 'complexData':
        this.showComplexDataCode = !this.showComplexDataCode;
        break;
    }
  }

  onNodeSelect(node: any): void {
    console.log('Node selected:', node);
  }

  onNodeUnselect(node: any): void {
    console.log('Node unselected:', node);
  }

  onNodeExpand(node: any): void {
    console.log('Node expanded:', node);
  }

  onNodeCollapse(node: any): void {
    console.log('Node collapsed:', node);
  }
}
