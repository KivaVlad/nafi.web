import {memo} from "react";
import animation from "../../assets/illustration_animation.webp";
import styles from "./style.module.scss";

const LoginAnimation: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <img src={animation} alt=""/>
    </div>
  )
}

export default memo(LoginAnimation);