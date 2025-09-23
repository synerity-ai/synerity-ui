import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs } from '../../shared/tabs/tabs';
import { OrgChart as SuiOrgChart } from '../../../../../ui-lib/src/lib/org-chart/org-chart';

@Component({
  selector: 'app-orgchart',
  standalone: true,
  imports: [CommonModule, Tabs, SuiOrgChart],
  templateUrl: './orgchart.html',
  styleUrl: './orgchart.scss'
})
export class OrgchartComponent {
  activeTab = 'demo';
  showBasicOrgChartCode = false;
  showSelectionOrgChartCode = false;
  selectedNode: any = null;

  // Basic org chart data
  basicOrgData = [
    {
      key: 'ceo',
      label: 'CEO',
      data: { department: 'Executive', email: 'ceo@company.com' },
      children: [
        {
          key: 'cto',
          label: 'CTO',
          data: { department: 'Technology', email: 'cto@company.com' },
          children: [
            {
              key: 'dev-lead',
              label: 'Dev Lead',
              data: { department: 'Engineering', email: 'dev@company.com' }
            },
            {
              key: 'qa-lead',
              label: 'QA Lead',
              data: { department: 'Quality Assurance', email: 'qa@company.com' }
            }
          ]
        },
        {
          key: 'cmo',
          label: 'CMO',
          data: { department: 'Marketing', email: 'cmo@company.com' },
          children: [
            {
              key: 'marketing-manager',
              label: 'Marketing Manager',
              data: { department: 'Marketing', email: 'marketing@company.com' }
            }
          ]
        }
      ]
    }
  ];

  // Selection org chart data
  selectionOrgData = [
    {
      key: 'manager',
      label: 'Project Manager',
      data: { department: 'Management', email: 'manager@company.com' },
      children: [
        {
          key: 'developer1',
          label: 'Senior Developer',
          data: { department: 'Engineering', email: 'dev1@company.com' }
        },
        {
          key: 'developer2',
          label: 'Junior Developer',
          data: { department: 'Engineering', email: 'dev2@company.com' }
        },
        {
          key: 'designer',
          label: 'UI/UX Designer',
          data: { department: 'Design', email: 'designer@company.com' }
        }
      ]
    }
  ];

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basicOrgChart':
        this.showBasicOrgChartCode = !this.showBasicOrgChartCode;
        break;
      case 'selectionOrgChart':
        this.showSelectionOrgChartCode = !this.showSelectionOrgChartCode;
        break;
    }
  }

  onNodeSelect(node: any): void {
    this.selectedNode = node;
    console.log('Node selected:', node);
  }

  clearSelection(): void {
    this.selectedNode = null;
  }
}
