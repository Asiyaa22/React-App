// import React from "react"
import { StrictMode } from "react";
import ReactDOM from "react-dom/client"
// import { createRoot } from "react-dom/client";
import App from "./App.jsx";

var root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    <StrictMode>
        <App />
    </StrictMode>
);

// ReactDOM.createRoot(document.getElementById("root")).render(
//     <StrictMode>
//         <App />
//     </StrictMode>
// );
