import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrgChart } from '@synerity/ui';

interface OrgNode {
  key: string;
  label: string;
  data?: any;
  children?: OrgNode[];
  expanded?: boolean;
  type?: string;
}

@Component({
  selector: 'app-org-chart-demo',
  standalone: true,
  imports: [CommonModule, OrgChart],
  templateUrl: './org-chart-demo.html',
  styleUrls: ['./org-chart-demo.scss']
})
export class OrgChartDemo {
  @Input() currentExample: any;

  getCurrentExample() {
    return this.currentExample || { name: 'Basic Org Chart' };
  }

  // Company organization
  companyOrg: OrgNode[] = [
    {
      key: '0',
      label: 'CEO',
      data: { name: 'John Smith', title: 'Chief Executive Officer' },
      type: 'executive',
      expanded: true,
      children: [
        {
          key: '0-0',
          label: 'CTO',
          data: { name: 'Jane Doe', title: 'Chief Technology Officer' },
          type: 'executive',
          expanded: true,
          children: [
            {
              key: '0-0-0',
              label: 'Engineering Manager',
              data: { name: 'Bob Johnson', title: 'Engineering Manager' },
              type: 'manager'
            },
            {
              key: '0-0-1',
              label: 'DevOps Lead',
              data: { name: 'Alice Brown', title: 'DevOps Lead' },
              type: 'manager'
            }
          ]
        },
        {
          key: '0-1',
          label: 'CFO',
          data: { name: 'Mike Davis', title: 'Chief Financial Officer' },
          type: 'executive',
          children: [
            {
              key: '0-1-0',
              label: 'Accounting Manager',
              data: { name: 'Sarah Wilson', title: 'Accounting Manager' },
              type: 'manager'
            }
          ]
        },
        {
          key: '0-2',
          label: 'CMO',
          data: { name: 'Emily Chen', title: 'Chief Marketing Officer' },
          type: 'executive',
          children: [
            {
              key: '0-2-0',
              label: 'Marketing Manager',
              data: { name: 'Tom Anderson', title: 'Marketing Manager' },
              type: 'manager'
            }
          ]
        }
      ]
    }
  ];

  // Small team
  smallTeam: OrgNode[] = [
    {
      key: '0',
      label: 'Founder',
      data: { name: 'Alex Johnson' },
      expanded: true,
      children: [
        {
          key: '0-0',
          label: 'Lead Developer',
          data: { name: 'Sam Taylor' }
        },
        {
          key: '0-1',
          label: 'Designer',
          data: { name: 'Jordan Lee' }
        }
      ]
    }
  ];

  // Department structure
  departments: OrgNode[] = [
    {
      key: '0',
      label: 'Engineering',
      data: { employees: 25 },
      type: 'department',
      expanded: true,
      children: [
        { key: '0-0', label: 'Frontend', data: { employees: 8 }, type: 'team' },
        { key: '0-1', label: 'Backend', data: { employees: 10 }, type: 'team' },
        { key: '0-2', label: 'QA', data: { employees: 7 }, type: 'team' }
      ]
    },
    {
      key: '1',
      label: 'Sales',
      data: { employees: 15 },
      type: 'department',
      children: [
        { key: '1-0', label: 'Enterprise', data: { employees: 8 }, type: 'team' },
        { key: '1-1', label: 'SMB', data: { employees: 7 }, type: 'team' }
      ]
    }
  ];

  // Collapsed org
  collapsedOrg: OrgNode[] = JSON.parse(JSON.stringify(this.companyOrg.map(node => ({ ...node, expanded: false }))));

  selectedNodes: any[] = [];

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
