import React from "react";
import { createHashRouter } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import {
  Home,
  About,
  Services,
  Projects,
  Blog,
  Contacts,
  NotFound,
} from "@/constants";

export const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "projects", element: <Projects /> },
      { path: "blog", element: <Blog /> },
      { path: "contacts", element: <Contacts /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
