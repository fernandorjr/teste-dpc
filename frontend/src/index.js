import React from "react";
import ReactDOM from "react-dom/client";

import router from "./router-config";
import { RouterProvider } from "react-router-dom";

import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
