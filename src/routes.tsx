import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import { PlaylistsPage } from "./pages/PlaylistsPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Layout outlet={<ErrorPage />} />,
    children: [
      { index: true, element: <HomePage /> }, // Default component
      { path: "playlists", element: <PlaylistsPage /> },
      { path: "projects/:slug", element: <ProjectDetailsPage /> },
    ],
  },
]);

export default router;
