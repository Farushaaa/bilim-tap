import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";
import CoursePage from "../pages/CoursePage";

export const pageRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: `/course/:id`,
    element: <CoursePage />,
  },
]);
