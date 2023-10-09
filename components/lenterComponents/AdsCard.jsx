import styles from "../../styles/Ads.module.scss"



const Ads = ()=>{
    return (
      <div className={styles.container}>
        <p>
          Ссылка на сайт <span style={{color:"lightgrey"}}>Реклама</span>
        </p>
        <div className={styles.center}>РЕКЛАМА</div>
        <p className={styles.bottomText}>Текст длинного рекламного объявления</p>
      </div>
    );
}

export default Ads