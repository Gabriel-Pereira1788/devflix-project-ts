import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./GlobalStyles";

//context
import AuthContextProvider from "./contexts/AuthContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
      <GlobalStyle />
    </AuthContextProvider>
  </React.StrictMode>
);