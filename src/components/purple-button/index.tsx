import {memo} from "react";
import styles from "./style.module.scss";

interface IProps {
  icon?: React.ReactNode;
  title: string;
  onClick?: () => void;
}

const PurpleButton:React.FC<IProps> = ({icon, title, onClick}) => {
  return (
    <div className={styles.wrapper}>
      <button type="button" onClick={onClick}>
        {icon && 
          <>{icon}</>
        }
        {title}
      </button>
    </div>
  )
}

export default memo(PurpleButton);