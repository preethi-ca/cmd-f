import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
//import './index.css'
import App from "./pages/MainPage.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App/>
    </Router>
  </StrictMode>,
)
