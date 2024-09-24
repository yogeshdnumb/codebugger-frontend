//import classes from "./Main.module.scss";

import { AppShell } from "@mantine/core";
import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <AppShell.Main>
      <Outlet />
    </AppShell.Main>
  );
}
