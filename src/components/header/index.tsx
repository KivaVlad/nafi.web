import {memo} from "react";
import {headerLogo, lightningIcon, userLogo} from "../../assets/icons";
import styles from "./style.module.scss";

interface IProps {
  username: string;
}

const Header: React.FC<IProps> = ({username}) => {
  return (
    <header className={styles.header}>
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
          <img src={lightningIcon} alt=""/>
          Улучшить тариф
        </button>
      </div>

      <div className={styles.user_wrapper}>
        <div className={styles.user_logo}>
          <img src={userLogo} alt="" />
        </div>
        <div className={styles.user_name}>
          {username ? username : 'Пользователь'}
        </div>
      </div>
    </header>
  )
}

export default memo(Header);