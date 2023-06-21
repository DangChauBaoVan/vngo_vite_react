import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { MainContextProvider } from "./context/MainContext";
import "react-toastify/dist/ReactToastify.css";

import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
ReactDOM.render(
  <MainContextProvider>
    <React.StrictMode>
      <Router>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </Router>
    </React.StrictMode>
  </MainContextProvider>,
  document.getElementById("root")
);
registerServiceWorker(toast);
