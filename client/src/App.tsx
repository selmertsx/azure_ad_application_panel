import * as React from "react";
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { TopPage } from "./components/TopPage";
import { Tools } from "./components/Tools";

const App = () => (
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

export { App }

