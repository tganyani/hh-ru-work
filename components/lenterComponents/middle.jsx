import styles from "../../styles/LenterMiddle.module.scss";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";


const data = [
  {
    id: 1,
    text: "Политика Синоптик спрогнозировал срок наступления бабьего лета",
  },
  {
    id: 2,
    text: "Дмитрий Медведев проголосовал онлайн на выборах мэра Москвы",
  },
  {
    id: 3,
    text: "Раскрыты последствия уничтожения беспилотника в небе над Подмосковьем",
  },
  {
    id: 4,
    text: "Невролог назвала основные способы лечения мигрени",
  },
];

const LenterMiddle = () => {
  return (
    <div className={styles.container}>
      <p style={{ display: "flex", alignItems: "center", fontSize: "16px" }}>
        Читайте также
        <KeyboardArrowRightIcon />
      </p>
      <div className={styles.cardContainer}>
        {data.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.top}>
              <button>Политика</button>
              <p>1.01.2023, 13:53</p>
            </div>
            <div className={styles.center}>{item.text}</div>
            <div className={styles.bottom}>😍 23 😡 23 💩 23 7 14</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LenterMiddle
