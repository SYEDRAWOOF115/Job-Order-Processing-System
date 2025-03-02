import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";  // ✅ Ensure Provider is imported
import { store } from "./redux/store";   // ✅ Ensure store is imported
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);





// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
  
//     <App />
  
// )
