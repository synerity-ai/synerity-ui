import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { SuButtonDemo } from './components/foundation/su-button-demo/su-button-demo';
import { SuInputTextDemo } from './components/foundation/su-input-text-demo/su-input-text-demo';
import { SuCheckboxDemo } from './components/foundation/su-checkbox-demo/su-checkbox-demo';
import { SuRadioDemo } from './components/foundation/su-radio-demo/su-radio-demo';
import { SuSelectDemo } from './components/foundation/su-select-demo/su-select-demo';
import { SuSelectButtonDemo } from './components/foundation/su-select-button-demo/su-select-button-demo';
import { SuToggleSwitchDemo } from './components/foundation/su-toggle-switch-demo/su-toggle-switch-demo';
import { SuSliderDemo } from './components/foundation/su-slider-demo/su-slider-demo';
import { SuKnobDemo } from './components/foundation/su-knob-demo/su-knob-demo';
import { SuRatingDemo } from './components/foundation/su-rating-demo/su-rating-demo';
import { SuDatePickerDemo } from './components/foundation/su-date-picker-demo/su-date-picker-demo';
import { SuColorPickerDemo } from './components/foundation/su-color-picker-demo/su-color-picker-demo';
import { SuEditorDemo } from './components/foundation/su-editor-demo/su-editor-demo';
import { SuAccordionDemo } from './components/foundation/su-accordion-demo/su-accordion-demo';
import { SuAvatarDemo } from './components/foundation/su-avatar-demo/su-avatar-demo';
import { SuBadgeDemo } from './components/foundation/su-badge-demo/su-badge-demo';
import { SuBreadcrumbDemo } from './components/foundation/su-breadcrumb-demo/su-breadcrumb-demo';
import { SuCardDemo } from './components/foundation/su-card-demo/su-card-demo';
import { SuTabsDemo } from './components/foundation/su-tabs-demo/su-tabs-demo';
import { SuAutoCompleteDemo } from './components/foundation/su-auto-complete-demo/su-auto-complete-demo';
import { SuPasswordDemo } from './components/foundation/su-password-demo/su-password-demo';
import { SuTextareaDemo } from './components/foundation/su-textarea-demo/su-textarea-demo';
import { SuAutoFocusDemo } from './components/foundation/su-auto-focus-demo/su-auto-focus-demo';
import { SuCascadeSelectDemo } from './components/foundation/su-cascade-select-demo/su-cascade-select-demo';
import { SuChipDemo } from './components/foundation/su-chip-demo/su-chip-demo';
import { SuFloatLabelDemo } from './components/foundation/su-float-label-demo/su-float-label-demo';
import { SuIconFieldDemo } from './components/foundation/su-icon-field-demo/su-icon-field-demo';
import { SuIftLabelDemo } from './components/foundation/su-ift-label-demo/su-ift-label-demo';
import { SuIftaLabelDemo } from './components/foundation/su-ifta-label-demo/su-ifta-label-demo';
import { SuInputGroupDemo } from './components/foundation/su-input-group-demo/su-input-group-demo';
import { SuInputMaskDemo } from './components/foundation/su-input-mask-demo/su-input-mask-demo';
import { SuInputNumberDemo } from './components/foundation/su-input-number-demo/su-input-number-demo';
import { SuInputOtpDemo } from './components/foundation/su-input-otp-demo/su-input-otp-demo';
import { SuKeyFilterDemo } from './components/foundation/su-key-filter-demo/su-key-filter-demo';
import { SuListboxDemo } from './components/foundation/su-listbox-demo/su-listbox-demo';
import { SuToggleButtonDemo } from './components/foundation/su-toggle-button-demo/su-toggle-button-demo';
import { SuTreeSelectDemo } from './components/foundation/su-tree-select-demo/su-tree-select-demo';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: Home
  },
  {
    path: 'components/button',
    component: SuButtonDemo
  },
  {
    path: 'components/input-text',
    component: SuInputTextDemo
  },
  {
    path: 'components/checkbox',
    component: SuCheckboxDemo
  },
  {
    path: 'components/radio-button',
    component: SuRadioDemo
  },
  {
    path: 'components/select',
    component: SuSelectDemo
  },
  {
    path: 'components/select-button',
    component: SuSelectButtonDemo
  },
  {
    path: 'components/toggle-switch',
    component: SuToggleSwitchDemo
  },
  {
    path: 'components/slider',
    component: SuSliderDemo
  },
  {
    path: 'components/knob',
    component: SuKnobDemo
  },
  {
    path: 'components/rating',
    component: SuRatingDemo
  },
  {
    path: 'components/date-picker',
    component: SuDatePickerDemo
  },
  {
    path: 'components/color-picker',
    component: SuColorPickerDemo
  },
  {
    path: 'components/editor',
    component: SuEditorDemo
  },
  {
    path: 'components/accordion',
    component: SuAccordionDemo
  },
  {
    path: 'components/avatar',
    component: SuAvatarDemo
  },
  {
    path: 'components/badge',
    component: SuBadgeDemo
  },
  {
    path: 'components/breadcrumb',
    component: SuBreadcrumbDemo
  },
  {
    path: 'components/card',
    component: SuCardDemo
  },
  {
    path: 'components/tabs',
    component: SuTabsDemo
  },
  {
    path: 'components/auto-complete',
    component: SuAutoCompleteDemo
  },
  {
    path: 'components/password',
    component: SuPasswordDemo
  },
  {
    path: 'components/textarea',
    component: SuTextareaDemo
  },
  {
    path: 'components/auto-focus',
    component: SuAutoFocusDemo
  },
  {
    path: 'components/cascade-select',
    component: SuCascadeSelectDemo
  },
  {
    path: 'components/chip',
    component: SuChipDemo
  },
  {
    path: 'components/float-label',
    component: SuFloatLabelDemo
  },
  {
    path: 'components/icon-field',
    component: SuIconFieldDemo
  },
  {
    path: 'components/ift-label',
    component: SuIftLabelDemo
  },
  {
    path: 'components/ifta-label',
    component: SuIftaLabelDemo
  },
  {
    path: 'components/input-group',
    component: SuInputGroupDemo
  },
  {
    path: 'components/input-mask',
    component: SuInputMaskDemo
  },
  {
    path: 'components/input-number',
    component: SuInputNumberDemo
  },
  {
    path: 'components/input-otp',
    component: SuInputOtpDemo
  },
  {
    path: 'components/key-filter',
    component: SuKeyFilterDemo
  },
  {
    path: 'components/listbox',
    component: SuListboxDemo
  },
  {
    path: 'components/toggle-button',
    component: SuToggleButtonDemo
  },
  {
    path: 'components/tree-select',
    component: SuTreeSelectDemo
  }
];
