import {memo} from "react";
import {headerLogo, userLogo} from "../../assets/icons";
import styles from "./style.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>

        <div className={styles.logo}>
          <img src={headerLogo} alt="logo" />
        </div>

        <div className={styles.tarifs_wrapper}>
          <div className={styles.tarif}>
            <p>Тарифный план:</p>
            <span>старт</span>
          </div>

          <div className={styles.tarifs_info}>
            <p>Тариф действителен до: 10.08.2024 г.</p>
            <p>Осталось дней: 145</p>
          </div>

          <button 
            type="button" 
            className={styles.btn}
          >
            <svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.6716 2.00929L24 0L22.5838 6.46045L20.5531 4.62035L13.8666 11.9328L7.95857 7.62943L0.828742 15L0 14.2056L7.82691 6.11436L13.7117 10.4008L19.7023 3.84939L17.6716 2.00929Z" fill="#5C5EDC"/>
            </svg>
            Улучшить тариф
          </button>
        </div>

        <div className={styles.user_wrapper}>
          <div className={styles.user_logo}>
            <img src={userLogo} alt="" />
          </div>
          <div className={styles.user_name}>
            Владимир
          </div>
        </div>

        </div>
    </header>
  )
}

export default memo(Header);