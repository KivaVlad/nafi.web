import {memo} from "react";
import styles from "./style.module.scss";

interface IProps {
  title: string;
  icon: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick: () => void;
}

const Button: React.FC<IProps> = ({title, icon, disabled, type, onClick}) => {
  return (
    <button className={styles.button}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      <img src={icon} alt=""/>
      {title}
    </button>
  )
}

export default memo(Button);