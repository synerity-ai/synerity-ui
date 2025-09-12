import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { 
  InputText, 
  Checkbox, 
  Select, 
  Textarea, 
  RadioButton, 
  Password, 
  InputNumber,
  InputMask,
  MultiSelect,
  DatePicker,
  ColorPicker,
  Slider,
  Rating,
  ToggleSwitch,
  ToggleButton,
  SelectButton,
  CascadeSelect,
  TreeSelect,
  Listbox,
  PickList,
  OrderList,
  InputOtp,
  Knob,
  Editor,
  FloatLabel,
  IconField,
  IftaLabel,
  InputGroup,
  KeyFilter
} from 'ui-lib';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputText, 
    Checkbox, 
    Select, 
    Textarea, 
    RadioButton, 
    Password, 
    InputNumber,
    InputMask,
    MultiSelect,
    DatePicker,
    ColorPicker,
    Slider,
    Rating,
    ToggleSwitch,
    ToggleButton,
    SelectButton,
    CascadeSelect,
    TreeSelect,
    Listbox,
    PickList,
    OrderList,
    InputOtp,
    Knob,
    Editor,
    FloatLabel,
    IconField,
    InputGroup,
    KeyFilter
  ],
  templateUrl: './forms.html',
  styleUrl: './forms.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Forms {
  // Form data
  formData = {
    textInput: '',
    numberInput: null as number | null,
    textarea: '',
    selectValue: null as any,
    multiSelectValue: [] as any[],
    checkboxValue: false,
    radioValue: null as any,
    password: '',
    dateValue: null as Date | null,
    colorValue: '#3b82f6',
    sliderValue: 50,
    ratingValue: 0,
    toggleSwitch: false,
    toggleButton: null as any,
    selectButton: null as any
  };

  // Options for selects
  selectOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' }
  ];

  multiSelectOptions = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Cherry', value: 'cherry' },
    { label: 'Date', value: 'date' }
  ];

  radioOptions = [
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' }
  ];

  toggleButtonOptions = [
    { label: 'Bold', value: 'bold', icon: 'B' },
    { label: 'Italic', value: 'italic', icon: 'I' },
    { label: 'Underline', value: 'underline', icon: 'U' }
  ];

  selectButtonOptions = [
    { label: 'Option 1', value: 'opt1' },
    { label: 'Option 2', value: 'opt2' },
    { label: 'Option 3', value: 'opt3' }
  ];

  // Event handlers
  onFormChange(field: string, value: any) {
    (this.formData as any)[field] = value;
    console.log('Form data updated:', this.formData);
  }

  onSubmit() {
    console.log('Form submitted:', this.formData);
    alert('Form submitted! Check console for data.');
  }

  resetForm() {
    this.formData = {
      textInput: '',
      numberInput: null,
      textarea: '',
      selectValue: null,
      multiSelectValue: [],
      checkboxValue: false,
      radioValue: null,
      password: '',
      dateValue: null,
      colorValue: '#3b82f6',
      sliderValue: 50,
      ratingValue: 0,
      toggleSwitch: false,
      toggleButton: null,
      selectButton: null
    };
  }
}


