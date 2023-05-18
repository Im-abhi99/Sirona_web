import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "../node_modules/react-multi-carousel/lib/styles.css"
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./style.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


