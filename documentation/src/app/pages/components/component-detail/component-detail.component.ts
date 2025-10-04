import { Component, signal, computed, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ComponentDataService } from '../../../services/component-data.service';
import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { CodeDisplayComponent } from '../../../components/code-display/code-display.component';
import { ComponentModel } from '../../../models/component.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-component-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, ComponentPreviewComponent, CodeDisplayComponent],
  templateUrl: './component-detail.component.html',
  styleUrl: './component-detail.component.scss'
})
export class ComponentDetailComponent implements OnInit, OnDestroy {
  protected readonly component = signal<ComponentModel | null>(null);
  private routeSubscription?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private componentDataService: ComponentDataService
  ) {}

  ngOnInit(): void {
    // Subscribe to route parameter changes
    this.routeSubscription = this.route.paramMap.subscribe(params => {
      const componentName = params.get('name') || '';
      this.loadComponent(componentName);
    });
  }

  ngOnDestroy(): void {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }

  private loadComponent(componentName: string): void {
    const component = this.componentDataService.getComponent(componentName);
    this.component.set(component || null);
  }

  get componentName(): string {
    return this.component()?.name || '';
  }

  get componentDescription(): string {
    return this.component()?.description || '';
  }

  get componentExamples(): any[] {
    return this.component()?.examples || [];
  }

  get componentProps(): any[] {
    return this.component()?.props || [];
  }

  get componentUsage(): string {
    return this.component()?.usage || '';
  }
}
