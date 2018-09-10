import { connect } from "react-redux";
import { Dispatch } from "redux";

import { addTool, inputTool } from "../actions/tools";
import { App } from "../components/App";
import { ToolAction, ToolState } from "../Types";

function mapStateToProps({ tool, tools }: ToolState): ToolState {
  return {
    tool,
    tools
  };
}

function mapDispatchToProps(dispatch: Dispatch<ToolAction>) {
  return {
    addTool: (tool: string) => dispatch(addTool(tool)),
    inputTool: (tool: string) => dispatch(inputTool(tool))
  };
}

export const ToolContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
