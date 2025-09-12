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
    return `sui-chart sui-chart-${this.type} ${this.styleClass}`.trim();
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
