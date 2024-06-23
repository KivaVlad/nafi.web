import {memo} from "react";
import styles from "./style.module.scss";

interface IProps {
  title: string;
  nav?: React.ReactNode;
}

const PageHead: React.FC<IProps> = ({title, nav}) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      {nav && (
        <div className={styles.options}>
          {nav}
        </div>
      )}
    </div>
  )
}

export default memo(PageHead);