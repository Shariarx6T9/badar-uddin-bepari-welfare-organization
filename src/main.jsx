import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* BrowserRouter moved inside App.jsx now */}
    <App />
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 2500,
        style: {
          background: "#fff",
          color: "#333",
          borderRadius: "8px",
          border: "1px solid #e6e9ef",
          fontWeight: 500,
          padding: "10px 16px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        },
      }}
    />
  </React.StrictMode>
);
