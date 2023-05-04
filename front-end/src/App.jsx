import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Table from "./pages/Table";
import Form from "./pages/Form";
import NavigationBar from "./pages/NavigationBar";
import Monitoring from "./pages/Monitoring";
import Button from "./pages/Button";
import Popup from "./pages/Popup";
import Login from "./pages/Login";
import Modal from "./pages/Modal";
import Theme from "./pages/Theme";
import Card from "./pages/Card";
import Breadcrumbs from "./pages/Breadcrumbs";
import Tabs from "./pages/Tabs";
import Toast from "./pages/Toast";
import Dropdown from "./pages/Dropdown";
import Accordions from "./pages/Accordions";
import Tree from "./pages/Tree";
import Alert from "./pages/Alert";
import PreviewAll from "./pages/PreviewAll";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/basic-table",
      element: <Table />,
    },
    {
      path: "/form",
      element: <Form />,
    },
    {
      path: "/monitoring",
      element: <Monitoring />,
    },
    {
      path: "/button",
      element: <Button />,
    },
    {
      path: "/pop-up",
      element: <Popup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/modal",
      element: <Modal />,
    },
    {
      path: "/theme",
      element: <Theme />,
    },
    {
      path: "/navigation-bar",
      element: <NavigationBar />,
    },
    {
      path: "/card",
      element: <Card />,
    },
    {
      path: "/breadcrumbs",
      element: <Breadcrumbs />,
    },
    {
      path: "/tabs",
      element: <Tabs />,
    },
    {
      path: "/toast",
      element: <Toast />,
    },
    {
      path: "/accordions",
      element: <Accordions />,
    },
    {
      path: "/dropdown",
      element: <Dropdown />,
    },
    {
      path: "/tree-view",
      element: <Tree />,
    },
    {
      path: "/alert",
      element: <Alert />,
    },
    {
      path: "/preview-all",
      element: <PreviewAll />,
    },
  ]);

  return <RouterProvider router={router} />;
}
