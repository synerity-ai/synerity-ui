import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputText } from 'ui-lib';
import { Checkbox } from 'ui-lib';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [
    InputText,
    Checkbox
  ],
  templateUrl: './forms.html',
  styleUrl: './forms.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Forms {}


