import * as React from "react";

export class App extends React.Component {
  public render() {
    const tasks = [{ title: "TODO１つ目", id: 0 }];
    return(
      <div>
        <h1> TODO App </h1>
        <ul>
          <li>
            { tasks[0].title }
          </li>
        </ul>
      </div>
    );
  }
}
