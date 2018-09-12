import * as React from "react";
import { inputTool, addTool } from '../actions/tools';

interface ToolProps {
  tool: string;
  tools: string[];
}


export class Tools extends React.Component<ToolProps> {
  public render(){
    const tools = this.props.tools || [] ;

    return(
      <div>
        <h2>Tools</h2>
        <p>This is Tools</p>
        <input type="text" onChange={(e) => inputTool(e.target.value)} />
        <input type="button" value="add" onClick={() => addTool(this.props.tool)} />
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
