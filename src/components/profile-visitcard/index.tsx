import {memo} from "react";
import {formatPhoneNumber} from "../../utils/phone-format";
import DownloadSvg from "../svg-icons/download";
import {qrCode} from "../../assets/icons";
import styles from "./style.module.scss";
import type {IUser} from "../../types/i-user";

interface IProps {
  user: IUser;
}

const VisitCard: React.FC<IProps> = ({user}) => {
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.description}>
        Визитную карточку можно скачать на последний слайд вашей презентации
      </h4>

      <div className={styles.card_container}>
        <div className={styles.user_wrapper}>
          <h1>{`${user.username} ${user.lastname} ${user.surname}`}</h1>

          <div className={styles.details_card_wrapper}>
            <div className={styles.left}>
              <div className={styles.details}>{user.job}</div>
              <div className={styles.details}>{formatPhoneNumber(user.tel)}</div>
            </div>
            <div className={styles.right}>
              <div className={styles.details}>{user.org}</div>
              <div className={styles.details}>{user.email}</div>
            </div>
          </div>
        </div>

        <div className={styles.qr_wrapper}>
          <div className={styles.qr_img}>
            <img src={qrCode} alt="" />
          </div>
          <button type='button'>
            <DownloadSvg/>
            QR-код
          </button>
        </div>

      </div>
    </div>
  )
}

export default memo(VisitCard);