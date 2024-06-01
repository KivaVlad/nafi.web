import {memo} from "react";
import styles from "./style.module.scss";

interface IProps {
  type: "submit" | "reset" | "button" | undefined;
}

const ButtonChange: React.FC<IProps> = ({type}) => {
  return (
    <button type={type} className={styles.btn}>
      <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24.1919 3.61685L18.6105 0.5V3.077H0.75V14.6839H1.86628V4.15671H18.6105V6.73371L24.1919 3.61685Z" fill="#5C5EDC"/>
        <path d="M1.30814 17.3831L6.88953 20.5L6.88953 17.923L24.75 17.923V6.31613H23.6337V16.8433H6.88953L6.88954 14.2663L1.30814 17.3831Z" fill="#5C5EDC"/>
      </svg>
      Сменить
    </button>
  )
}

export default memo(ButtonChange);