import {ReactNode, memo} from "react";
import {logo} from "../../assets/icons";
import styles from "./style.module.scss";

interface IProps {
  children: ReactNode;
}

const LoginLayout: React.FC<IProps> = ({children}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.form}>
        {children}
      </div>
    </div>
  )
}

export default memo(LoginLayout);