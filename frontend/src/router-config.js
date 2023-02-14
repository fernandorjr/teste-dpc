import { createBrowserRouter } from "react-router-dom"

import App from "./App";
import Home from "./routes/HomePage";
import NotFoundPage from "./routes/NotFoundPage";
import RegistrationPage from "./routes/RegistrationPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/cadastro",
        element: <RegistrationPage />
      }
    ]
  }
])

export default router;