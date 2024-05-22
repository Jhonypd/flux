/** @format */

import { createStore, applyMiddleware, compose } from "redux";
import rootRedux from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import { thunk } from "redux-thunk";

export default function configureStore(initialState) {
  return createStore(
    rootRedux,
    initialState,
    compose(
      applyMiddleware(thunk, reduxImmutableStateInvariant()),
      window.devToolsExtetion ? window.devToolsExtetion() : (f) => f
    )
  );
}
