import { Injectable, signal } from '@angular/core';
import { ComponentModel } from '../models/component.model';
import { allComponents } from './data';

@Injectable({
  providedIn: 'root'
})
export class ComponentDataService {
  private readonly _components = signal<ComponentModel[]>(allComponents);
  
  private readonly _categories = signal<string[]>([
    'Foundation',
    'Data',
    'Form', 
    'Layout',
    'Navigation',
    'Overlay',
    'Media',
    'Messages',
    'Progress'
  ]);

  readonly components = this._components.asReadonly();
  readonly categories = this._categories.asReadonly();

  getComponent(id: string): ComponentModel | undefined {
    return this._components().find(component => component.id === id);
  }

  getComponentsByCategory(category: string): ComponentModel[] {
    return this._components().filter(component => component.category === category);
  }

  searchComponents(query: string): ComponentModel[] {
    const lowercaseQuery = query.toLowerCase();
    return this._components().filter(component => 
      component.name.toLowerCase().includes(lowercaseQuery) ||
      component.description.toLowerCase().includes(lowercaseQuery) ||
      component.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    );
  }

  getRelatedComponents(componentId: string): ComponentModel[] {
    const component = this.getComponent(componentId);
    if (!component) return [];
    
    return this._components().filter(c => 
      c.id !== componentId && 
      c.category === component.category
    ).slice(0, 3);
  }
}
