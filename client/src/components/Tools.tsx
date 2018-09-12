import * as React from "react";
import { ToolAction } from "../Types";

interface ToolProps {
  tool: string;
  tools: string[];
  addTool: (tool: string) => ToolAction,
  inputTool: (tool: string) => ToolAction
}

export class Tools extends React.Component<ToolProps> {
  constructor(props: ToolProps) {
    super(props);
  }


  public render(){
    const tools = this.props.tools || [];

    return(
      <div>
        <h2>Tools</h2>
        <p>This is Tools</p>
        <input type="text" onChange={(e) => this.props.inputTool(e.target.value)} />
        <input type="button" value="add" onClick={() => this.props.addTool(this.props.tool)} />
        <ul>
        {
          tools.map((tool: string, i: number) => {
            return ( <li key={i}>{tool}</li>);
          })
        }
        </ul>
      </div>
    );
  }
};
