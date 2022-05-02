import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { StateProvider } from "./context/StateProvider";
import { initialState } from "./context/initialState";
import reducer from "./context/reducer"

const container = document.getElementById("root");
const root = ReactDom.createRoot(container);

root.render(
  <Router>
    <StateProvider initialState={initialState} reducer = {reducer} >
      <App />
    </StateProvider>
  </Router>
);
