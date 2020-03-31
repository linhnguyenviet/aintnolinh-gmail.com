import React from "react";
import { render } from "react-dom";
import createSagaMiddleware from "redux-saga";
import App from "./App";
import "./index.css";
import "./font/HelveticaNeue.ttc";
import "./i18n";
import setAuthorizationToken from "./utils/setAuthorizationToken";
// store
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import { logger } from "redux-logger";
import rootSaga from "./sagas";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(rootSaga);

setAuthorizationToken(localStorage.getItem("jwtToken"));

render(
  <Provider store={store}>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </Provider>,
  document.getElementById("root")
);
