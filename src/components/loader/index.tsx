import {memo} from "react";
import styles from "./style.module.scss";

const Loader: React.FC = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.spinner}></div>
    </div>
  )
}

export default memo(Loader);