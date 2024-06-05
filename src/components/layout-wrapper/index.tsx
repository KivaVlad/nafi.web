import {memo} from "react";
import styles from "./style.module.scss";

interface IProps {
  navbar: React.ReactNode;
  main: React.ReactNode;
}

const LayoutWrapper: React.FC<IProps> = ({navbar, main}) => {
  return (
    <div className={styles.wrapper}>
      <aside className={styles.navbar}>
        {navbar}
      </aside>
          
      <main className={styles.main}>
        {main}
      </main>
    </div>
  )
}

export default memo(LayoutWrapper);