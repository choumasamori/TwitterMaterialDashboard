import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import Login from "views/Login/Login.jsx"
import TableTest from "views/TableTest/TableTest.jsx"
import {Main} from 'views/Main/Main.js';
import {Logout} from 'views/Logout/Logout.jsx';

import {
  Dashboard,
  Person,
  ContentPaste,
  LibraryBooks,
  BubbleChart,
  LocationOn,
  Notifications,
  Fingerprint,
  PowerSettingsNew
} from "material-ui-icons";

const appRoutes = [
  {
    path: "/main",
    sidebarName: "TWIT",
    navbarName: "TWIT",
    icon: Dashboard,
    component: Main
  },
  {
    path: "/logout",
    sidebarName: "Log Out",
    icon: PowerSettingsNew,
    component: Logout
  },
  { redirect: true, path: "/", to: "/login", navbarName: "Redirect" }
];

export default appRoutes;