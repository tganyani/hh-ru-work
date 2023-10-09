
import styles from "../../styles/LenterBottom.module.scss"
import Image from "next/image";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";


const data = [
  {
    id: 1,
    text: "Синоптик спрогнозировал срок наступления бабьего лета",
    image: "pic.png",
  },
  {
    id: 2,
    text: "Дмитрий Медведев проголосовал онлайн на выборах мэра Москвы",
    image: "pic1.png",
  },
  {
    id: 3,
    text: "Раскрыты последствия уничтожения беспилотника в небе над Подмосковьем",
    image: "pic2.png",
  },
  {
    id: 4,
    text: "Невролог назвала основные способы лечения мигрени",
    image: "pic3.png",
  },
];

const LenterBottom = ()=>{
    return (
      <div className={styles.container}>
        <p style={{display:"flex",alignItems:"center", fontSize:"16px"}}>Происшествия <KeyboardArrowRightIcon/></p>
        <div className={styles.cardContainer}>
          {data.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.image}>
                <Image src={`/${item.image}`} alt={item.image} layout="fill" />
              </div>
              <div className={styles.bottom}>
                <div className={styles.dateTime}>1.01.2023, 13:53</div>
                <div className={styles.text}>{item.text}</div>
                <div className={styles.footer}>😍 23 😡 23 💩 23 7 14</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}

export default LenterBottom
