// これを参考に色々作ってみる
// https://qiita.com/teradonburi/items/aa31fa91d618dd6955a1

import * as React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';
import { createStore, Store } from "redux";
import { toolReducer } from './reducers/ToolReducer';
import { ToolContainer } from "./containers/ToolContainer";
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { TopPage } from './components/TopPage';

const store: Store = createStore(toolReducer);

function renderApp(store: Store) {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to="/">TopPage</Link></li>
            <li><Link to="/tools">Tools</Link></li>
          </ul>

          <hr />
          <Route exact={true} path='/' component={TopPage}  />
          <Route path='/tools' component={ToolContainer} />
        </div>
      </BrowserRouter>
    </Provider>,
    document.getElementById("root")
  );
}

store.subscribe(() => renderApp(store));
renderApp(store);
