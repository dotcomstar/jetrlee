import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import ProjectsPage from "./pages/ProjectsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> }, // Default component
      { path: "/projects", element: <ProjectsPage /> }, // Default component
    ],
  },
]);

export default router;
