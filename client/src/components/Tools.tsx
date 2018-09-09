import * as React from "react";
interface ToolsProps { }

export class Tools extends React.Component<ToolsProps> {
  constructor(props: ToolsProps){
    super(props);
  }

  public render(){
    return(
      <div>
        <h2>Tools</h2>
        <p>This is Tools</p>
      </div>
    );
  }
};
