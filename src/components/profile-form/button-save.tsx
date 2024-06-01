import {memo} from "react";
import styles from "./style.module.scss";

interface IProps {
  type: "submit" | "reset" | "button" | undefined;
}

const ButtonSave: React.FC<IProps> = ({type}) => {
  return (
    <button type={type} className={styles.btn}>
      <svg width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.7517 0.656006H0.530762V23.1476H11.106V11.9018H19.6122V5.21568L13.7517 0.656006Z" fill="#5C5EDC"/>
        <path d="M15.5354 17.0569V13.1979H16.8291V17.0569H19.9167L16.1822 23.4375L12.4478 17.0569H15.5354Z" fill="#5C5EDC"/>
        <path d="M11.8337 24.0179V24.656H20.5308V24.0179H11.8337Z" fill="#5C5EDC"/>
      </svg>
      Сохранить
    </button>
  )
}

export default memo(ButtonSave);