import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { Chart as SuiChart } from '../../../../../ui-lib/src/lib/chart/chart';

@Component({
  selector: 'app-chart',
  imports: [CommonModule, FormsModule, Tabs, SuiChart],
  templateUrl: './chart.html',
  styleUrl: './chart.scss'
})
export class ChartComponent {
  activeTab = 'demo';
  showBarCode = false;
  showLineCode = false;
  showPieCode = false;

  // Demo data
  barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.1
      },
      {
        label: 'Profit',
        data: [28, 48, 40, 19, 86, 27],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.1
      }
    ]
  };

  pieChartData = {
    labels: ['Desktop', 'Mobile', 'Tablet'],
    datasets: [
      {
        label: 'Device Usage',
        data: [300, 150, 100],
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 205, 86, 0.8)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 205, 86, 1)'
        ],
        borderWidth: 2
      }
    ]
  };

  barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Monthly Sales Data'
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Revenue vs Profit Trends'
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  pieChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: true,
        text: 'Device Usage Distribution'
      }
    }
  };

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'bar':
        this.showBarCode = !this.showBarCode;
        break;
      case 'line':
        this.showLineCode = !this.showLineCode;
        break;
      case 'pie':
        this.showPieCode = !this.showPieCode;
        break;
    }
  }

  onChartClick(event: any): void {
    console.log('Chart clicked:', event);
  }

  onChartHover(event: any): void {
    console.log('Chart hovered:', event);
  }
}
