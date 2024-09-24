//import classes from "./Layout.module.scss";

import { AppShell } from "@mantine/core";
import Navbar from "@src/features/Layout/components/Navbar/Navbar";
import Header from "@src/features/Layout/components/Header/Header";
import Main from "@src/features/Layout/components/Main/Main";
import Footer from "@src/features/Layout/components/Footer/Footer";
import { useDisclosure } from "@mantine/hooks";

export default function Layout() {
  const [isDesktopNavbarOpened, { toggle: toggleDesktopNavbar }] =
    useDisclosure(true);
  const [isMobileNavbarOpened, { toggle: toggleMobileNavbar }] =
    useDisclosure(false);
  return (
    <AppShell
      padding={"sm"}
      // withBorder
      footer={{ height: 30 }}
      header={{ height: 60 }}
      navbar={{
        width: 250,
        breakpoint: "xs",
        collapsed: {
          mobile: !isMobileNavbarOpened,
          desktop: !isDesktopNavbarOpened,
        },
      }}
    >
      <Header
        isDesktopNavbarOpened={isDesktopNavbarOpened}
        toggleDesktopNavbar={toggleDesktopNavbar}
        isMobileNavbarOpened={isMobileNavbarOpened}
        toggleMobileNavbar={toggleMobileNavbar}
      ></Header>
      <Navbar></Navbar>
      <Main></Main>
      <Footer></Footer>
    </AppShell>
  );
}
