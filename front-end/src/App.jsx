import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Table from "./pages/Table";
import Form from "./pages/Form";
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
      path: "/table",
      element: <Table />,
    },
    {
      path: "/form",
      element: <Form />,
    },
  ]);

  return <RouterProvider router={router} />;
}
