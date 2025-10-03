import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ComponentDataService } from '../../../services/component-data.service';
import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { CodeDisplayComponent } from '../../../components/code-display/code-display.component';
import { ComponentModel } from '../../../models/component.model';

@Component({
  selector: 'app-component-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, ComponentPreviewComponent, CodeDisplayComponent],
  templateUrl: './component-detail.component.html',
  styleUrl: './component-detail.component.scss'
})
export class ComponentDetailComponent {
  protected readonly component = signal<ComponentModel | null>(null);

  constructor(
    private route: ActivatedRoute,
    private componentDataService: ComponentDataService
  ) {
    this.loadComponent();
  }

  private loadComponent(): void {
    const componentName = this.route.snapshot.paramMap.get('name') || '';
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
