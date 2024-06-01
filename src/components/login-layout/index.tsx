import {ReactNode, memo} from "react";
import AnimateLogo from "../login-animate-logo";
import {logo} from "../../assets/icons";
import styles from "./style.module.scss";

interface IProps {
  children: ReactNode;
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