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
  }
];
