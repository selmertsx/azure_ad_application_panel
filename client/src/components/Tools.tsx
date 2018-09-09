import * as React from "react";
interface ToolsProps { }

export class Tools extends React.Component<ToolsProps> {
  constructor(props: ToolsProps){
    super(props);
  }

  public render(){
    return(
      <div>
        This is Tools
      </div>
    );
  }
};
