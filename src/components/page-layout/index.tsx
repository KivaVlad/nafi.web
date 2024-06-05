import {memo} from "react";
import styles from "./style.module.scss";

interface IProps {
  title: string;
  children: React.ReactNode;
  button?: React.ReactNode;
}

const PageLayout: React.FC<IProps> = ({title, children, button}) => {
  return (
    <div className={styles.wrapper}>

      <div className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        {button && (
          <div className={styles.options}>{button}</div>
        )}
      </div>

      <div className={styles.content}>
        {children}
      </div>

    </div>
  )
}

export default memo(PageLayout);