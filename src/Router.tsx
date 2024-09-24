import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@src/features/Layout/Layout";
import Home from "@src/pages/Home/Home";
import CreatePostPage from "@src/pages/CreatePostPage/CreatePostPage";

const routes = createBrowserRouter([
  {
    element: <Layout />,
    // errorElement: <p></p>,
    children: [{ element: <Home />, path: "/" }],
  },
]);

export default function Router() {
  return <RouterProvider router={routes}></RouterProvider>;
}
