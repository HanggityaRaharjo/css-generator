import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NavigationBar from "./pages/NavigationBar";
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/navigation-bar",
      element: <NavigationBar />,
    },
  ]);

  return <RouterProvider router={router} />;
}
