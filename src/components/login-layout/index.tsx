import {memo} from "react";
import AnimateLogo from "../login-animate-logo";
import logo from "../../assets/animation.gif";
import styles from "./style.module.scss";

interface IProps {
  children: React.ReactNode;
}

const LoginLayout: React.FC<IProps> = ({children}) => {
  return (
    <div className={styles.wrapper}>

      <div className={styles.up_section}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
      </div>

      <div className={styles.down_section}>
        <div className={styles.animate}>
          <AnimateLogo/>
        </div>
        <div className={styles.form}>
          {children}
        </div>
      </div>

    </div>
  )
}

export default memo(LoginLayout);