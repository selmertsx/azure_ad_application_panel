export interface ToolAction {
  type: string;
  payload: {
    tool: string;
  };
  error?: boolean;
  meta?: any;
}

export interface ToolState {
  tool: string;
  tools: string[];
}
