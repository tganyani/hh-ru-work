import { useCallback, useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";
import Ads from "../components/lenterComponents/AdsCard";
import LenterTopCard from "../components/lenterComponents/TopCard";
import LenterMiddle from "../components/lenterComponents/middle";
import LenterBottom from "../components/lenterComponents/bottom";

function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.top}>
        <LenterTopCard />
        <Ads />
      </div>
      <div className={styles.middle}>
        <LenterMiddle />
      </div>
      <div className={styles.bottom}>
        <LenterBottom />
      </div>
    </main>
  );
}

export default Home;
