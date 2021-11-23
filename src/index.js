import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";
import { App } from "./App.js";
import { rootReducer } from "./redusers/rootReducer";
import lodash from "lodash";

const persistedState = localStorage.getItem("reduxState") ? JSON.parse(localStorage.getItem("reduxState")) : {};

const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk))
);
store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});
ReactDOM.render(
    <Provider _={lodash} store={store}>
      <App />
      <div id="modal"></div>
    </Provider>,
  document.getElementById("root")
);
reportWebVitals();
