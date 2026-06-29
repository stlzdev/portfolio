import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "/src/style.css";
import RootLayout from "./shared/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Memory from "./pages/Memory";
import Films from "./pages/Films";
import Vision from "./pages/Vision";
import Play from "./pages/Play";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "blog", element: <Blog /> },
      { path: "memory", element: <Memory /> },
      { path: "films", element: <Films /> },
      { path: "vision", element: <Vision /> },
      { path: "play", element: <Play /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
