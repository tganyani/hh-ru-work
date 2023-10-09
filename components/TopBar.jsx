import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import styles from "../styles/TopBar.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";

export default function TopBar({ openMenu, setOpenMenu }) {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <p>ЛОГО</p>
        <div className={styles.menu} onClick={() => setOpenMenu(!openMenu)}>
          <MenuIcon />
        </div>
      </div>
      <div className={styles.center}>
        <div className={styles.calender}>
          <CalendarMonthIcon style={{ fontSize: "16px" }} />
          <p> ПН, 4.08.2023</p>
        </div>
        <div className={styles.dollar}>$ 96.34 </div>
        <div className={styles.euro}>€ 104.61</div>
        <div className={styles.bitcoin}>₿ 25.725</div>
      </div>
      <div className={styles.right}>
        <div className={styles.searchIcon}>
          <SearchIcon style={{ color: "white", fontSize: "16px" }} />
        </div>
        <div className={styles.accountIcon}>
          <PersonIcon style={{ color: "white", fontSize: "16px" }} />
        </div>
      </div>
    </div>
  );
}
