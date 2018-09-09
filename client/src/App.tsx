import * as React from "react";
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { TopPage } from "./components/TopPage";

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">TopPage</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <hr />

      <Route exact={true} path='/' component={TopPage} />
      <Route path='/about' component={About} />
    </div>
  </BrowserRouter>
)

const About = () => (
  <div>
    <h2>About</h2>
    <p>フレンズに投票するページです</p>
  </div>
)

export { App }

