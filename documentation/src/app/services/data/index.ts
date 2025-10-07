import { ComponentModel } from '../../models/component.model';

// Import all component data files
import { foundationComponents } from './foundation-components.data';
import { dataComponents } from './data-components.data';
import { formComponents } from './form-components.data';
import { layoutComponents } from './layout-components.data';
import { navigationComponents } from './navigation-components.data';
import { overlayComponents } from './overlay-components.data';
import { mediaComponents } from './media-components.data';
import { messagesComponents } from './messages-components.data';
import { progressComponents } from './progress-components.data';
import { fileComponents } from './file-components.data';
import { utilityComponents } from './utility-components.data';

// Combine all components
export const allComponents: ComponentModel[] = [
  ...foundationComponents,
  ...dataComponents,
  ...formComponents,
  ...layoutComponents,
  ...navigationComponents,
  ...overlayComponents,
  ...mediaComponents,
  ...messagesComponents,
  ...progressComponents,
  ...fileComponents,
  ...utilityComponents,
];

// Export individual categories for easier access
export { 
  foundationComponents,
  dataComponents,
  formComponents,
  layoutComponents,
  navigationComponents,
  overlayComponents,
  mediaComponents,
  messagesComponents,
  progressComponents,
  fileComponents,
  utilityComponents
};
