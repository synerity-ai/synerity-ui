export interface ComponentModel {
  id: string;
  name: string;
  category: string;
  description: string;
  examples: ComponentExample[];
  props: ComponentProp[];
  usage: string;
  tags: string[];
}

export interface ComponentExample {
  name: string;
  code: string;
  tsCode?: string;
  description: string;
}

export interface ComponentProp {
  name: string;
  type: string;
  default: string;
  description: string;
  required: boolean;
}

export interface ComponentCategory {
  name: string;
  displayName: string;
  description: string;
  icon: string;
  components: ComponentModel[];
}
