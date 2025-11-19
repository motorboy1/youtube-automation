export type LayoutMode = 'IDE' | 'dashboard' | 'three-pane';

export interface ToolInput {
  type: string;
  required?: boolean;
  accept?: string;
  placeholder?: string;
  options?: string[];
  default?: any;
  min?: number;
  max?: number;
  maxLength?: number;
  unit?: string;
}

export interface ToolOutput {
  type: string;
  schema?: Record<string, any>;
}

export interface ToolMetadata {
  toolId: string;
  name: string;
  category: string;
  description: string;
  version: string;
  layoutMode: LayoutMode;
  features: string[];
  inputs: Record<string, ToolInput>;
  outputs: Record<string, ToolOutput>;
  apiEndpoint: string;
  rateLimit?: {
    maxRequests: number;
    perWindow: string;
  };
}
