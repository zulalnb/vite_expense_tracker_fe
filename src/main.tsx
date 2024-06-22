import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";
import rootReducer from "./store";
import { Provider } from "react-redux";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
