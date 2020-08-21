import React from "react";
import ReactDOM from "react-dom";
import ChakraUIProvider from "./utils/ChakraUIProvider";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ChakraUIProvider>
      <App />
    </ChakraUIProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
