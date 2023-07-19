import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { DialogContextProvider } from "./context/DialogContext/dialogContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DialogContextProvider>
      <App />
    </DialogContextProvider>
  </React.StrictMode>
);
