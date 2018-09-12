// これを参考に色々作ってみる
// https://qiita.com/teradonburi/items/aa31fa91d618dd6955a1

import * as React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';
import { createStore, Store } from "redux";
import { toolReducer } from './reducers/tools';
import { AppContainer } from "./containers/AppContainer";

const store: Store = createStore(toolReducer);

function renderApp(store: Store) {
  render(
    <Provider store={store}>
      <AppContainer/>
    </Provider>,
    document.getElementById("root")
  );
}

store.subscribe(() => renderApp(store));
renderApp(store);
