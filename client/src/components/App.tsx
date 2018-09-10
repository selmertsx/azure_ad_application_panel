import * as React  from "react";
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { TopPage } from "./TopPage";
import { Tools } from "./Tools";

interface AppState { }
interface AppProps { }

class App extends React.Component <AppProps, AppState> {
  public render() {
    return(
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to="/">TopPage</Link></li>
            <li><Link to="/tools">Tools</Link></li>
          </ul>

          <hr />
          <Route exact={true} path='/' component={TopPage} />
          <Route path='/tools' component={Tools} />
        </div>
      </BrowserRouter>
    )
  }
}

export { App }

