import {memo} from "react";
import styles from "./style.module.scss";

interface IProps {
  navbar: React.ReactNode;
  main: React.ReactNode;
}

const SmallLayout: React.FC<IProps> = ({navbar, main}) => {
  return (
    <div className={styles.wrapper}>
      <article className={styles.navbar}>
        {navbar}
      </article>

      <div className={styles.main}>
        {main}
      </div>
    </div>
  )
} 

export default memo(SmallLayout);