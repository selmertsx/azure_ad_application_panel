// これを参考に色々作ってみる
// https://qiita.com/teradonburi/items/aa31fa91d618dd6955a1

import * as React from "react";
import { render } from "react-dom";
import { App } from "./App";
//import { Provider } from 'react-redux';
import { createStore, Store } from "redux";
import { toolReducer } from './reducers/tools';

const store: Store = createStore(toolReducer);

function renderApp(store: Store) {
  render(
    <App />,
    document.getElementById("root")
  );
}

renderApp(store);
