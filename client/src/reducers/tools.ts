import { ToolAction, ToolState } from "../Types";

const initialState: ToolState = {
  tool: "",
  tools: []
};

export function toolReducer(state: ToolState = initialState, action: ToolAction): ToolState {
  switch (action.type) {
    case "INPUT_TOOL":
      return {
        ...state,
        tool: action.payload.tool
      };
    case "ADD_TOOL":
      return {
        ...state,
        tools: state.tools.concat([action.payload.tool])
      };
    default:
      return state;
  }
}
