import styles from "../styles/Footer.module.scss"
import TelegramIcon from "@mui/icons-material/Telegram";


export default function Footer (){

    return (
      <div className={styles.container}>
        <div className={styles.logo}>
          <p style={{fontSize:"20px"}}> ЛОГО</p>
          <p>© НАЗВАНИЕ 2023. Все права защищены</p>
        </div>
        <ul className={styles.logo}>
          <li>Контакты</li>
          <li> Рдакция</li>
        </ul>
        <ul>
          <li>Политика конфиденциальности</li>
          <li>Условия использования</li>
          <li>Реклама</li>
        </ul>
        <ul>
          <li> По любым вопросам</li>
          <li>пишите на privet@yandex.com</li>
          <li className={styles.telegram}>
            <div className={styles.telegramDiv}>
              <TelegramIcon style={{color:"grey",fontSize:"20px"}}/>
            </div>
            <p>Подписаться</p>
          </li>
        </ul>
        <button>Предложить новость</button>
      </div>
    );
}


