import {memo} from "react";
import styles from "./style.module.scss";

interface IProps {
  children: React.ReactNode;
  active: boolean;
}

const Loader: React.FC<IProps> = ({active, children}) => {
  if (active) {
    return (
      <div className={styles.loader}>
        <div className={styles.spinner}></div>
        {children}
      </div>
    )
  } else {
    return children;
  }
}

export default memo(Loader);