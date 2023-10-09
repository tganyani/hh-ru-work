import React from "react";
import Footer from "./Footer";
import TopBar from "./TopBar";
import SideBar from "./SideBar";

import styles from "../styles/Layout.module.scss";

export default function Layout({ children }) {
  const [openMenu, setOpenMenu] = React.useState(true);
  return (
    <div className={styles.container}>
      <TopBar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <main className={styles.main}>
        <SideBar openMenu={openMenu} setOpenMenu={setOpenMenu} />
        {children}
      </main>
      <Footer />
    </div>
  );
}
