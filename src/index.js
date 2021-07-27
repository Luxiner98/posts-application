import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { GreetUserInConsoleContextProvider } from "./context/greetUserInConsole";
import "./styles/styles.scss";

ReactDOM.render(
  <React.StrictMode>
    <GreetUserInConsoleContextProvider>
      <App />
    </GreetUserInConsoleContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
