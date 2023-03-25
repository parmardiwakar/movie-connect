import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./AppLayout";
import "./index.css";
import ErrorPage from "./pages/ErrorPage";
import Details from "./pages/Details";
import Explore from "./pages/Explore";
import SearchResult from "./pages/SearchResult";
import Home from "./pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/search/:query",
        element: <SearchResult />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
