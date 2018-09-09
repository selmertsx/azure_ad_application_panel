import { ToolAction, ToolState } from "../Types";

const initialState: ToolState = {
  tool: "",
  tools: []
};

export function toolsReducer(state: ToolState = initialState, action: ToolAction): ToolState {
  switch (action.type) {
    case "INPUT_TASK":
      return {
        ...state,
        tool: action.payload.tool
      };
    case "ADD_TASK":
      return {
        ...state,
        tools: state.tools.concat([action.payload.tool])
      };
    default:
      return state;
  }
}
