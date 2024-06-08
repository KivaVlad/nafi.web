import {memo} from "react";
import styles from "./style.module.scss";

interface IProps {
  title: string;
  nav?: React.ReactNode;
  children: React.ReactNode;
}

const PageLayout: React.FC<IProps> = ({title, children, nav}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          {title}
        </h1>
        {nav && (
          <div className={styles.options}>
            {nav}
          </div>
        )}
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

export default memo(PageLayout);