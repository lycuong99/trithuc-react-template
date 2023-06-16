import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HelmetProvider } from 'react-helmet-async';
import { SettingsProvider } from "./contexts/SettingsContext";
import { CollapseDrawerProvider } from './contexts/CollapseDrawerContext';
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <HelmetProvider>


    <SettingsProvider>
    <CollapseDrawerProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </CollapseDrawerProvider>
    </SettingsProvider>
    </HelmetProvider>
  </React.StrictMode>
);
