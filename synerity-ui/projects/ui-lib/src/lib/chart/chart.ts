import { ChangeDetectionStrategy, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgIf, CommonModule } from '@angular/common';

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string | string[];
    borderColor?: string | string[];
    borderWidth?: number;
  }[];
}

interface ChartOptions {
  responsive?: boolean;
  maintainAspectRatio?: boolean;
  plugins?: any;
  scales?: any;
}

@Component({
  selector: 'sui-chart',
  imports: [CommonModule, NgIf],
  templateUrl: './chart.html',
  styleUrl: './chart.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Chart implements OnInit, OnDestroy {
  @Input() type: 'line' | 'bar' | 'pie' | 'doughnut' | 'polarArea' | 'radar' = 'line';
  @Input() data: ChartData = { labels: [], datasets: [] };
  @Input() options: ChartOptions = {};
  @Input() width = 400;
  @Input() height = 200;
  @Input() style: any = {};
  @Input() styleClass = '';

  @ViewChild('chartCanvas') chartCanvas!: ElementRef;

  private chartInstance: any = null;

  ngOnInit(): void {
    // Note: This is a placeholder implementation
    // In a real implementation, you would integrate with Chart.js or another charting library
    this.initializeChart();
  }

  ngOnDestroy(): void {
    this.destroyChart();
  }

  private initializeChart(): void {
    // Placeholder for chart initialization
    // Real implementation would use Chart.js:
    // this.chartInstance = new Chart(this.chartCanvas.nativeElement, {
    //   type: this.type,
    //   data: this.data,
    //   options: this.options
    // });
    
    // For now, we'll draw a simple placeholder chart
    this.drawPlaceholderChart();
  }

  private drawPlaceholderChart(): void {
    if (!this.chartCanvas || !this.data || this.data.datasets.length === 0) {
      return;
    }

    const canvas = this.chartCanvas.nativeElement;
    const ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw placeholder content
    ctx.fillStyle = '#f3f4f6';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw chart type text
    ctx.fillStyle = '#6b7280';
    ctx.font = '16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(`${this.type.toUpperCase()} Chart`, canvas.width / 2, canvas.height / 2);
    
    // Draw data info
    ctx.font = '12px Arial';
    ctx.fillText(`${this.data.datasets.length} dataset(s), ${this.data.labels.length} label(s)`, canvas.width / 2, canvas.height / 2 + 25);
  }

  private destroyChart(): void {
    if (this.chartInstance) {
      this.chartInstance.destroy();
      this.chartInstance = null;
    }
  }

  updateChart(): void {
    if (this.chartInstance) {
      this.chartInstance.update();
    }
  }

  getChartClass(): string {
    const baseClasses = 'relative bg-white border border-gray-200 rounded-lg p-4';
    return `${baseClasses} ${this.styleClass}`.trim();
  }

  getChartTitle(): string {
    return `${this.type.charAt(0).toUpperCase() + this.type.slice(1)} Chart`;
  }

  getDatasetColor(dataset: any, index: number): string {
    const colors = [
      '#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6', 
      '#06b6d4', '#84cc16', '#f97316', '#ec4899', '#6366f1'
    ];
    
    if (dataset.backgroundColor) {
      return Array.isArray(dataset.backgroundColor) 
        ? dataset.backgroundColor[0] 
        : dataset.backgroundColor;
    }
    
    return colors[index % colors.length];
  }

  getTotalDataPoints(): number {
    if (!this.data || !this.data.datasets) return 0;
    return this.data.datasets.reduce((total, dataset) => total + dataset.data.length, 0);
  }

  getChartStyle(): any {
    return {
      width: `${this.width}px`,
      height: `${this.height}px`,
      ...this.style
    };
  }

  getChartType(): string {
    return this.type;
  }

  getChartData(): ChartData {
    return this.data;
  }

  getChartOptions(): ChartOptions {
    return this.options;
  }
}
