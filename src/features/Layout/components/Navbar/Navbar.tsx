//import classes from "./Navbar.module.scss";

import { AppShell, NavLink } from "@mantine/core";
import { NavLink as RouterLink } from "react-router-dom";
import {
  FiBell,
  FiCompass,
  FiHome,
  FiMessageCircle,
  FiPlusSquare,
  FiSearch,
  FiUser,
} from "react-icons/fi";

export default function Navbar() {
  const navbarData = [
    { label: "Home", to: "/", icon: <FiHome /> },
    { label: "Search", to: "home", icon: <FiSearch /> },
    { label: "Explore", to: "home", icon: <FiCompass /> },
    { label: "Messages", to: "home", icon: <FiMessageCircle /> },
    { label: "Notifications", to: "home", icon: <FiBell /> },
    { label: "Create", to: "home", icon: <FiPlusSquare /> },
    { label: "Profile", to: "home", icon: <FiUser /> },
  ];
  return (
    <AppShell.Navbar>
      {navbarData.map((nav, key) => (
        <NavLink
          key={key}
          component={RouterLink}
          leftSection={nav.icon}
          to={nav.to}
          label={nav.label}
          variant="light"
        ></NavLink>
      ))}
    </AppShell.Navbar>
  );
}
