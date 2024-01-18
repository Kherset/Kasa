import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/homepage/home.jsx";
import Habitation from "./pages/habitation-page/habitation.jsx";
import ErrorPage from "./pages/error-page/error-page.jsx";
import About from "./pages/about-page/about.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/accommodation/:id",
    element: <Habitation />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

export default router
