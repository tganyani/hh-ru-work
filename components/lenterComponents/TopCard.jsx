import styles from "../../styles/LenterTopCard.module.scss";
import BoltIcon from "@mui/icons-material/Bolt";
import WhatshotIcon from "@mui/icons-material/Whatshot";

const data = [
  { id: 1, text: "Сотни россиян застряли в Египте из-за отмен рейсов." },
  {
    id: 2,
    text: "На Украине заявили о невосполнимых потерях после российских ударов.",
  },
  {
    id: 3,
    text: "ЕС ввел санкции против силовиков из Крыма из-за дела в отношении журналиста.",
  },
  {
    id: 4,
    text: "Резников назвал профессионалом нового министра обороны Украины Умерова.",
  },
];

const LenterTopCard = () => {
  return (
    <div className={styles.container}>
      <p className={styles.header}>Лента</p>
      <ul className={styles.list}>
        {data.map((item) => (
          <li id={item.id}>
            <div className={styles.top}>
              <BoltIcon style={{ fontSize: "20px" }} />
              <p>{item.text}</p>
            </div>
            <div className={styles.bottom}>
              <p>14:59</p>
              <button>Политика</button>
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.footer}>
        <div className={styles.inner}>
          <WhatshotIcon style={{ fontSize: "15px", color: "#FF6B00" }} />
          <p>ОЧЕНЬ ВАЖНАЯ НОВОСТЬ </p>
        </div>
        <div className={styles.inner}>
          <WhatshotIcon style={{ fontSize: "15px", color: "#FF6B00" }} />
          <p> ОЧЕНЬ ВАЖНАЯ НОВОСТЬ</p>
        </div>
        <div className={styles.inner}>
          <WhatshotIcon style={{ fontSize: "15px", color: "#FF6B00" }} />
          <p> ОЧЕНЬ ВАЖНАЯ НОВОСТЬ</p>
        </div>
      </div>
    </div>
  );
};

export default LenterTopCard;
