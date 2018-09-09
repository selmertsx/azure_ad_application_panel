import { ToolAction } from "../Types";

export function inputTool(tool: string): ToolAction {
  return {
    type: "INPUT_TOOL",
    payload: {
      tool
    }
  };
}

export function addTool(tool: string): ToolAction {
  return {
    type: "ADD_TOOL",
    payload: {
      tool
    }
  };
}
