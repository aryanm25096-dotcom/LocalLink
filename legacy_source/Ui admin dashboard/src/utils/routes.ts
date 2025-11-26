import { createBrowserRouter } from "react-router";
import { Layout } from "../components/Layout";
import { Dashboard } from "../components/Dashboard";
import { LiveHeatmap } from "../components/LiveHeatmap";
import { Tickets } from "../components/Tickets";
import { Departments } from "../components/Departments";
import { Analytics } from "../components/Analytics";
import { UsersRoles } from "../components/UsersRoles";
import { Settings } from "../components/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "heatmap", Component: LiveHeatmap },
      { path: "tickets", Component: Tickets },
      { path: "departments", Component: Departments },
      { path: "analytics", Component: Analytics },
      { path: "users", Component: UsersRoles },
      { path: "settings", Component: Settings },
    ],
  },
]);
